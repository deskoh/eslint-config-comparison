const fs = require('fs')
const { builtinRules } = require('eslint/use-at-your-own-risk')
const tsPlugin = require('@typescript-eslint/eslint-plugin')

function isDeprecated(ruleName) {
  const prefix = '@typescript-eslint/'
  const rule = ruleName.startsWith(prefix)
    ? tsPlugin.rules[ruleName.slice(prefix.length)]
    : builtinRules.get(ruleName)
  return Boolean(rule && rule.meta && rule.meta.deprecated)
}

function getPackageVersion(packageName) {
  return require(`${packageName}/package.json`).version
}

function writePackageVersion(outStream, packageName) {
  outStream.write(`${packageName}: \`${getPackageVersion(packageName)}\`\n\n`)
}

function generateMarkdown(rulesDb, filename) {
  const outStream = fs.createWriteStream(filename)

  outStream.write('# ESLint Config Comparison\n\n')

  outStream.write('\u2714\ufe0f: Rule enabled\n')
  outStream.write('\u274c: Rule turned off\n')
  outStream.write('\u{1f480}: Rule deprecated\n\n')

  const packages = [
    'eslint',
    '@typescript-eslint/eslint-plugin',
  ]
  packages.forEach(pkg => writePackageVersion(outStream, pkg))

  outStream.write('|   |')
  const configNames = Object.keys(rulesDb.getConfigs())
  for (let name of configNames) {
    outStream.write(`${name.replace('recommended', 'rec')} |`)
  }
  outStream.write('\n')

  outStream.write('|---|')
  for (let _ of configNames) {
    outStream.write(`:-:|`)
  }
  outStream.write('\n')

  rulesDb.getRules().forEach(rule => {
    const suffix = isDeprecated(rule.name) ? ' \u{1f480}' : ''
    outStream.write(`|${rule.name.replace('@typescript-eslint', '@ts-eslint')}${suffix}|`)
    for (let name of configNames) {
      const ruleVal = rule[name]
      let cellVal = "   "
      if (ruleVal && (ruleVal[0] === 0 || ruleVal[0] === 'off')) {
        cellVal = ' \u274c '
      } else if (ruleVal !== undefined) {
        cellVal = ' \u2714\ufe0f '
      }

      outStream.write(`${cellVal} |`)
    }
    outStream.write('\n')
  })
}

module.exports = {
  generateMarkdown
}
