import { spawnSync } from 'node:child_process'
import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'
import { createRequire } from 'node:module'
import { ts } from '@rslint/core'
import type { RulesConfig } from '../RulesDb.ts'

const require = createRequire(import.meta.url)

interface RslintEntry {
  files?: string[]
  rules?: RulesConfig
}

// Rslint presets are arrays of entries (not ESLint flat config: `plugins` is a list of names), so merge the
// rules by hand. Every entry applies, since the TS-scoped ones match the `.ts` file the other columns resolve.
const mergeRules = (entries: RslintEntry[]): RulesConfig =>
  Object.assign({}, ...entries.map(entry => entry.rules))

// Rslint has no rule listing, but it ignores unknown rules and `--timing all` lists the ones that ran.
// Enable every candidate on a throwaway file to learn which are implemented.
const findImplemented = (candidates: string[]): Set<string> => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'rslint-probe-'))
  try {
    fs.writeFileSync(path.join(dir, 'tsconfig.json'), JSON.stringify({ compilerOptions: { strict: true }, include: ['a.ts'] }))
    fs.writeFileSync(path.join(dir, 'a.ts'), 'export const a = 1\n')
    const rules = Object.fromEntries(candidates.map(name => [name, 'error']))
    fs.writeFileSync(path.join(dir, 'rslint.config.mjs'), `export default [{
  files: ['**/*.ts'],
  plugins: ['@typescript-eslint'],
  languageOptions: { parserOptions: { project: ['./tsconfig.json'] } },
  rules: ${JSON.stringify(rules)},
}]\n`)

    // The exit code is non-zero when any rule reports, so only the output matters
    const result = spawnSync(process.execPath, [require.resolve('@rslint/core/bin'), '--type-check', '--timing', 'all', '-c', 'rslint.config.mjs', 'a.ts'], {
      cwd: dir,
      encoding: 'utf8',
      maxBuffer: 64 * 1024 * 1024,
    })
    if (result.error) throw result.error

    const implemented = new Set<string>()
    for (const line of (result.stdout + result.stderr).split('\n')) {
      const cells = line.split('|').map(cell => cell.trim())
      if (cells.length >= 5 && cells[1] === 'native') implemented.add(cells[0])
    }
    if (implemented.size === 0) throw new Error(`Could not read implemented rules from rslint output:\n${result.stdout}${result.stderr}`)
    return implemented
  } finally {
    fs.rmSync(dir, { recursive: true, force: true })
  }
}

// Rslint has no tc-only preset. Mirror typescript-eslint's `recommended-type-checked-only`: the `files`-scoped
// (eslint-recommended) entries plus the rules `recommendedTypeChecked` adds on top of `recommended`.
const typeCheckedOnly = (recommended: RslintEntry[], typeChecked: RslintEntry[]): RulesConfig => {
  const recommendedRules = mergeRules(recommended)
  const added = Object.fromEntries(Object.entries(mergeRules(typeChecked)).filter(([name]) => !(name in recommendedRules)))
  return { ...mergeRules(typeChecked.filter(entry => entry.files)), ...added }
}

const loadConfigs = async (candidates: string[]) => {
  const configs = ts.configs as unknown as Record<string, RslintEntry[]>
  return {
    implemented: findImplemented(candidates),
    recommended: mergeRules(configs.recommended),
    'recommended-type-checked-only': typeCheckedOnly(configs.recommended, configs.recommendedTypeChecked),
  }
}

export default loadConfigs
