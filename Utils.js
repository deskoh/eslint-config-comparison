const fs = require('fs')

function getPackageVersion(packageName) {
  return require(`${packageName}/package.json`).version
}

function writePackageVersion(outStream, packageName) {
  outStream.write(`${packageName}: \`${getPackageVersion(packageName)}\`\n\n`)
}

function generateMarkdown(rulesDb, filename) {
  const outStream = fs.createWriteStream(filename)

  outStream.write('# ESLint Config Comparison\n\n')

  outStream.write('\u2714\ufe0f: Rule enabled\n')
  outStream.write('\u274c: Rule turned off\n\n')

  const packages = [
    'eslint',
    '@typescript-eslint/eslint-plugin',
    'eslint-config-airbnb-base'
  ]
  packages.forEach(pkg => writePackageVersion(outStream, pkg))

  outStream.write('|   |')
  const configNames = Object.keys(rulesDb.getConfigs())
  for (let name of configNames) {
    outStream.write(`${name.replace('recommended', 'rec')} |`)
  }
  outStream.write('\n')

  outStream.write('|---|')
  for (let _ of configNames) {
    outStream.write(`:-:|`)
  }
  outStream.write('\n')

  rulesDb.getRules().forEach(rule => {
    outStream.write(`|${rule.name.replace('@typescript-eslint', '@ts-eslint')}|`)
    for (let name of configNames) {
      const ruleVal = rule[name]
      let cellVal = "   "
      if (ruleVal && ruleVal[0] === 'off') {
        cellVal = ' \u274c '
      } else if (ruleVal !== undefined) {
        cellVal = ' \u2714\ufe0f '
      }

      outStream.write(`${cellVal} |`)
    }
    outStream.write('\n')
  })
}

module.exports = {
  generateMarkdown
}
