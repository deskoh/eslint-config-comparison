const { ESLint } = require('eslint')
const js = require('@eslint/js')

const loadConfigs = async () => {
  let eslint = new ESLint({
    overrideConfigFile: true,
    overrideConfig: [js.configs.recommended],
  });

  let config = await eslint.calculateConfigForFile('dummy.js')

  return {
    all: js.configs.all.rules,
    recommended: config.rules,
  }
}

module.exports = loadConfigs
