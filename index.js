const eslintConfig = require('./config/eslint')
const typescript = require('./config/typescript-eslint')
const airbnb = require('./config/airbnb')
const RulesDb = require('./RulesDb')
const { generateMarkdown } = require('./Utils')

async function generate() {
  const airbnbConfig = await airbnb()
  const typescriptConfig = await typescript()
  
  const rulesDb = new RulesDb()
  rulesDb.addRules(Object.keys(typescriptConfig.all))
  rulesDb.addRules(Object.keys(eslintConfig.all))
  rulesDb.addRules(Object.keys(airbnbConfig.all))
  
  rulesDb.addConfig(eslintConfig.recommended, 'eslint:recommended')
  rulesDb.addConfig(typescriptConfig.recommended, '@ts/recommended')
  rulesDb.addConfig(typescriptConfig['eslint-recommended'], '@ts/eslint-recommended')
  rulesDb.addConfig(airbnbConfig.all, 'airbnb')
  
  console.log(rulesDb.count())

  generateMarkdown(rulesDb, 'Comparison.md')
}

generate()
