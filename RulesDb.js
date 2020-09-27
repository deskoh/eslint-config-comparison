"use strict"

class RulesDb {
  constructor() {
    this.configs = {}
    this.rules = new Map()
  }
  addRules(rules) {
    let i = 0, j = 0
    for (let name of rules) {
      i++
      if (this.rules.has(name))
        continue
      this.rules.set(name, { name })
      j++
    }
    console.info(`${j}/${i} rules added`)
  }
  addConfig(config, configName) {
    let i = 0
    this.configs[configName] = config
    Object.keys(config).forEach(name => {
      let entry = this.rules.get(name)
      if (entry === undefined) {
        entry = { name }
        this.rules.set(name, entry)
      }
      entry[configName] = config[name]
      i++
    })
    console.info(`${configName}: ${i} rules added`)
  }
  getRules() {
    return Array.from(this.rules.keys()).sort((a, b) => {
      if (!a.startsWith('@typescript-eslint/')) a = `@typescript-eslint/${a}`
      if (!b.startsWith('@typescript-eslint/')) b = `@typescript-eslint/${b}`
      return a > b ? 1 : -1
    }).map(name => this.rules.get(name))
  }
  getConfigs() {
    return this.configs
  }
  count() {
    return this.rules.size
  }
}

module.exports = RulesDb
