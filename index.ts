import eslint from './config/eslint.ts'
import rslint from './config/rslint.ts'
import typescript from './config/typescript-eslint.ts'
import RulesDb from './RulesDb.ts'
import { generateMarkdown } from './Utils.ts'

async function generate() {
  const eslintConfig = await eslint()
  const typescriptConfig = await typescript()

  const rulesDb = new RulesDb()
  rulesDb.addRules(Object.keys(typescriptConfig.all))
  rulesDb.addRules(Object.keys(eslintConfig.all))

  rulesDb.addConfig(eslintConfig.recommended, 'eslint:recommended')
  rulesDb.addConfig(typescriptConfig.recommended, '@ts/recommended')
  rulesDb.addConfig(typescriptConfig['recommended-type-checked-only'], '@ts/tc-only')

  console.log(rulesDb.count())

  generateMarkdown(rulesDb, 'Comparison.md', {
    title: 'ESLint Config Comparison',
    packages: ['eslint', '@typescript-eslint/eslint-plugin'],
    effective: true,
  })

  // typescript-eslint vs Rslint parity: only the rules the compared presets mention are rows
  const rslintConfig = await rslint([...Object.keys(typescriptConfig.all), ...Object.keys(eslintConfig.all)])

  const rslintDb = new RulesDb()
  rslintDb.addRules(Object.keys({
    ...typescriptConfig.recommended,
    ...typescriptConfig['recommended-type-checked-only'],
    ...rslintConfig.recommended,
    ...rslintConfig['recommended-type-checked-only'],
  }))

  rslintDb.addConfig(typescriptConfig.recommended, 'ts/recommended')
  rslintDb.addConfig(rslintConfig.recommended, 'rslint:ts/recommended')
  rslintDb.addConfig(typescriptConfig['recommended-type-checked-only'], '@ts/tc-only')
  rslintDb.addConfig(rslintConfig['recommended-type-checked-only'], 'rslint:ts/tc-only')

  generateMarkdown(rslintDb, 'comparison-rslint.md', {
    title: 'typescript-eslint vs Rslint Comparison',
    packages: ['@typescript-eslint/eslint-plugin', '@rslint/core'],
    effective: false,
    rslintImplemented: rslintConfig.implemented,
  })
}

generate()
