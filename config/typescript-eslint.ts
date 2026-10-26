import plugin from '@typescript-eslint/eslint-plugin'
import { ESLint } from 'eslint'
import type { RulesConfig } from '../RulesDb.ts'

const calculateRules = async (configName: string): Promise<RulesConfig> => {
  const eslint = new ESLint({
    overrideConfigFile: true,
    overrideConfig: (plugin.configs as Record<string, ESLint.Options['overrideConfig']>)[`flat/${configName}`],
  });

  const config = await eslint.calculateConfigForFile('dummy.ts')
  return config.rules
}

const loadConfigs = async () => {
  return {
    all: plugin.configs.all.rules as RulesConfig,
    recommended: await calculateRules('recommended'),
    'recommended-type-checked': await calculateRules('recommended-type-checked'),
    'recommended-type-checked-only': await calculateRules('recommended-type-checked-only'),
  }
}

export default loadConfigs;
