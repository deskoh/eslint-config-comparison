const { builtinRules } = require("eslint/use-at-your-own-risk");
const { ESLint } = require('eslint')
const js = require('@eslint/js')

const allRules = {};
for (const ruleId of builtinRules.keys()) {
    if (!builtinRules.get(ruleId).meta.deprecated) {
        allRules[ruleId] = "error";
    }
}

const loadConfigs = async () => {
  let eslint = new ESLint({
    overrideConfigFile: true,
    overrideConfig: [js.configs.recommended],
  });

  let config = await eslint.calculateConfigForFile('dummy.js')

  return {
    all: allRules,
    recommended: config.rules,
  }
}

module.exports = loadConfigs
