import { ESLint } from 'eslint'
import js from '@eslint/js'
import type { RulesConfig } from '../RulesDb.ts'

const loadConfigs = async () => {
  let eslint = new ESLint({
    overrideConfigFile: true,
    overrideConfig: [js.configs.recommended],
  });

  let config = await eslint.calculateConfigForFile('dummy.js')

  return {
    all: js.configs.all.rules as RulesConfig,
    recommended: config.rules as RulesConfig,
  }
}

export default loadConfigs
