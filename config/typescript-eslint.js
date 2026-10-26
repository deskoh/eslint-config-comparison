const plugin = require('@typescript-eslint/eslint-plugin')
const { ESLint } = require('eslint')

const calculateRules = async (configName) => {
  const eslint = new ESLint({
    overrideConfigFile: true,
    overrideConfig: plugin.configs[`flat/${configName}`],
  });

  const config = await eslint.calculateConfigForFile('dummy.ts')
  return config.rules
}

const loadConfigs = async () => {
  return {
    all: plugin.configs.all.rules,
    recommended: await calculateRules('recommended'),
    'recommended-type-checked': await calculateRules('recommended-type-checked'),
    // Ruleset that disables rules only
    'eslint-recommended': await calculateRules('eslint-recommended'),
  }
}

module.exports = loadConfigs;
