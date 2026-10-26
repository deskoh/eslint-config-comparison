import eslint from './config/eslint.ts'
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

  generateMarkdown(rulesDb, 'Comparison.md')
}

generate()
