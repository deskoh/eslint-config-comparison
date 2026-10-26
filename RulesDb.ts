import type { Linter } from 'eslint'

export type RulesConfig = Partial<Linter.RulesRecord>

export interface Rule {
  name: string
  values: Record<string, Linter.RuleEntry | undefined>
}

export default class RulesDb {
  configs: Record<string, RulesConfig> = {}
  rules = new Map<string, Rule>()

  addRules(rules: Iterable<string>) {
    let i = 0, j = 0
    for (let name of rules) {
      i++
      if (this.rules.has(name))
        continue
      this.rules.set(name, { name, values: {} })
      j++
    }
    console.info(`${j}/${i} new rules added`)
  }
  addConfig(config: RulesConfig, configName: string) {
    let i = 0
    this.configs[configName] = config
    Object.keys(config).forEach(name => {
      let entry = this.rules.get(name)
      if (entry === undefined) {
        entry = { name, values: {} }
        this.rules.set(name, entry)
        console.warn(`[WARN] Rule \`${name}\` is not in the rules list, but is in config \`${configName}\` (could be deprecated).`)
      }
      entry.values[configName] = config[name]
      i++
    })
    console.info(`${configName}: ${i} rules added`)
  }
  getRules(): Rule[] {
    return Array.from(this.rules.keys()).sort((a, b) => {
      if (!a.startsWith('@typescript-eslint/')) a = `@typescript-eslint/${a}`
      if (!b.startsWith('@typescript-eslint/')) b = `@typescript-eslint/${b}`
      return a > b ? 1 : -1
    }).map(name => this.rules.get(name)!)
  }
  getConfigs() {
    return this.configs
  }
  count() {
    return this.rules.size
  }
}
