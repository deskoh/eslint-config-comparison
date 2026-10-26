# AGENTS.md

Generates `Comparison.md`: a Markdown table with one row per ESLint rule and one column per preset, showing whether each preset enables (✔️) or turns off (❌) that rule.

## Regenerate

```sh
pnpm install
pnpm generate   # node index.ts (Node >= 22.18 runs .ts natively)
```

`Comparison.md` is build output. Change the generator, then regenerate it; editing the table by hand gets overwritten on the next run. Commit the regenerated file along with the generator change.

## Pipeline

1. `config/<source>.ts` exports an async loader that returns `{ all, <preset>: rules, ... }`. `all` is every rule the source knows (sets the rows); each other key is the resolved rule map for one preset (one column).
2. `index.ts` adds every `all` to a `RulesDb` with `addRules`, then adds each preset as a column with `addConfig(rules, columnName)`. Columns appear in the order of the `addConfig` calls.
3. `Utils.ts` `generateMarkdown` writes the header, the package versions, and the table. The table starts with enabled/turned-off count rows and ends with an `effective` column: the value a rule ends up with when the presets are applied left to right (later columns override earlier ones), so column order matters.

## GitHub Pages

`.github/workflows/pages.yml` runs on every push to `master` (Node 24). It installs from the committed `pnpm-lock.yaml`, typechecks, regenerates, and fails if `Comparison.md` differs from the committed copy. Then `pnpm build:site` (`site.ts`) renders `Comparison.md` with `marked` into `site/index.html`, which gets deployed. The page adds sticky headers and a rule-name filter in inline CSS and JS. Rule names link to each rule's `meta.docs.url`.

Bump dependency versions manually and commit the updated lockfile together with the regenerated `Comparison.md`.

## Adding or removing a preset

Look at commit `57b0e66` ("removed airbnb") for the full set of touch points. Adding a preset touches:

- `package.json`: add the preset package as a dependency.
- `config/<source>.ts`: resolve the preset with `new ESLint({ overrideConfigFile: true, overrideConfig: <flat config> }).calculateConfigForFile('dummy.<ext>')`. Use `dummy.ts` for TypeScript presets so config entries scoped to `.ts` files apply.
- `index.ts`: call `addConfig`, and also `addRules` if the source brings new rules.
- `Utils.ts`: add the package to `packages` so its version shows in the header.

## Conventions and gotchas

- The repo uses ESLint 10 flat config. eslintrc (`extends`, `plugin:` strings) is gone; pass flat config objects/arrays such as `@eslint/js` `configs.recommended` or `@typescript-eslint/eslint-plugin` `configs['flat/<name>']`.
- `calculateConfigForFile` returns normalised values such as `[2]` or `[0]`. A cell shows ❌ when the rule level (the value itself, or `value[0]` for arrays) is `0` or `'off'`.
- `typescript` is pinned to the range `typescript-eslint` supports (its peer range, currently `<6.1.0`); don't bump it past that.
- Rows are sorted as if every rule had the `@typescript-eslint/` prefix, which places each TS extension rule next to the core rule it replaces. Keep that ordering.
- Display names are shortened at render time: `recommended` becomes `rec` in column headers, and `@typescript-eslint` becomes `@ts-eslint` in row names. Pass full names to `addConfig`.
- Deprecated core rules are excluded from `all` in `config/eslint.ts`.
- Sources are TypeScript ESM run directly by Node's type stripping, with no build step. Use erasable syntax only (no `enum`, `namespace`, or constructor parameter properties; `erasableSyntaxOnly` enforces this) and import local files with their `.ts` extension. Run `pnpm typecheck` (`tsc`, `noEmit`) after changes.
