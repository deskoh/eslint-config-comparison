const eslint = require('./config/eslint')
const typescript = require('./config/typescript-eslint')
const RulesDb = require('./RulesDb')
const { generateMarkdown } = require('./Utils')

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
