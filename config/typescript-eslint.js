const plugin = require('@typescript-eslint/eslint-plugin')
const { ESLint } = require('eslint')

const loadConfigs = async () => {
  let eslint = new ESLint({
    baseConfig: { extends: ['plugin:@typescript-eslint/recommended'] }
  });

  let config = await eslint.calculateConfigForFile('dummy.ts')
  const recRules = config.rules

  eslint = new ESLint({
    baseConfig: { extends: ['plugin:@typescript-eslint/recommended-requiring-type-checking'] }
  });

  config = await eslint.calculateConfigForFile('dummy.ts')
  const recTypeCheckRules = config.rules

  eslint = new ESLint({
    baseConfig: { extends: ['plugin:@typescript-eslint/recommended-requiring-type-checking'] }
  });

  config = await eslint.calculateConfigForFile('dummy.ts')
  const eslintRecRules = config.rules

  return {
    all: plugin.configs.all.rules,
    recommended: recRules,
    'recommended-requiring-type-checking': recTypeCheckRules,
    // Ruleset that disables rules only
    'eslint-recommended': eslintRecRules
  } 
}

module.exports = loadConfigs;
