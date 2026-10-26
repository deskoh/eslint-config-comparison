import fs from 'node:fs'
import { createRequire } from 'node:module'
import type { Linter } from 'eslint'
import { builtinRules } from 'eslint/use-at-your-own-risk'
import tsPlugin from '@typescript-eslint/eslint-plugin'
import type RulesDb from './RulesDb.ts'
import type { Rule } from './RulesDb.ts'

const require = createRequire(import.meta.url)

function isDeprecated(ruleName: string) {
  const prefix = '@typescript-eslint/'
  const rule = ruleName.startsWith(prefix)
    ? (tsPlugin.rules as Record<string, { meta?: { deprecated?: unknown } }>)[ruleName.slice(prefix.length)]
    : builtinRules.get(ruleName)
  return Boolean(rule && rule.meta && rule.meta.deprecated)
}

function isOff(ruleVal: Linter.RuleEntry) {
  const level = Array.isArray(ruleVal) ? ruleVal[0] : ruleVal
  return level === 0 || level === 'off'
}

function getPackageVersion(packageName: string): string {
  return require(`${packageName}/package.json`).version
}

function writePackageVersion(outStream: fs.WriteStream, packageName: string) {
  outStream.write(`${packageName}: \`${getPackageVersion(packageName)}\`\n\n`)
}

interface Column {
  header: string
  value: (rule: Rule) => Linter.RuleEntry | undefined
}

export function generateMarkdown(rulesDb: RulesDb, filename: string) {
  const outStream = fs.createWriteStream(filename)

  outStream.write('# ESLint Config Comparison\n\n')

  outStream.write('✔️: Rule enabled\n')
  outStream.write('❌: Rule turned off\n')
  outStream.write('\u{1f480}: Rule deprecated\n\n')

  const packages = [
    'eslint',
    '@typescript-eslint/eslint-plugin',
  ]
  packages.forEach(pkg => writePackageVersion(outStream, pkg))

  const configNames = Object.keys(rulesDb.getConfigs())
  // Effective value when the configs are applied left to right (later configs override earlier ones)
  const effective = (rule: Rule) => configNames.reduce<Linter.RuleEntry | undefined>((val, name) => rule.values[name] !== undefined ? rule.values[name] : val, undefined)
  const columns: Column[] = [
    ...configNames.map(name => ({ header: name.replace('recommended', 'rec'), value: (rule: Rule) => rule.values[name] })),
    { header: '**effective**', value: effective },
  ]

  outStream.write('|   |')
  for (let column of columns) {
    outStream.write(`${column.header} |`)
  }
  outStream.write('\n')

  outStream.write('|---|')
  for (let _ of columns) {
    outStream.write(`:-:|`)
  }
  outStream.write('\n')

  const rules = rulesDb.getRules()
  const countRow = (label: string, predicate: (ruleVal: Linter.RuleEntry) => boolean) => {
    outStream.write(`|**${label}**|`)
    for (let column of columns) {
      const count = rules.filter(rule => {
        const ruleVal = column.value(rule)
        return ruleVal !== undefined && predicate(ruleVal)
      }).length
      outStream.write(` **${count}** |`)
    }
    outStream.write('\n')
  }
  countRow('✔️ enabled', ruleVal => !isOff(ruleVal))
  countRow('❌ turned off', isOff)

  rules.forEach(rule => {
    const suffix = isDeprecated(rule.name) ? ' \u{1f480}' : ''
    outStream.write(`|${rule.name.replace('@typescript-eslint', '@ts-eslint')}${suffix}|`)
    for (let column of columns) {
      const ruleVal = column.value(rule)
      let cellVal = "   "
      if (ruleVal !== undefined && isOff(ruleVal)) {
        cellVal = ' ❌ '
      } else if (ruleVal !== undefined) {
        cellVal = ' ✔️ '
      }

      outStream.write(`${cellVal} |`)
    }
    outStream.write('\n')
  })
}
