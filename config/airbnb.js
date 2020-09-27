const { ESLint } = require('eslint')
const airbnbConfig = require('eslint-config-airbnb-base')

const eslint = new ESLint({
    baseConfig: airbnbConfig
});

function removeDisabledRules(rules) {
  const ruleNames = Object.keys(rules)
  for (let i = 0; i < ruleNames.length; i++) {
    const value = rules[ruleNames[i]]
    if (value === 'off' || (value.length && value[0] === 'off')) {
      // console.debug(`Removing ${ruleNames[i]}`)
      delete rules[ruleNames[i]]
    }
  }
  return rules
}

module.exports = async () => {
  const config = await eslint.calculateConfigForFile('dummy.js')
  return {
    all: removeDisabledRules(config.rules)
  }
}
