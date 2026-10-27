# typescript-eslint vs Rslint Comparison

✔️: Rule enabled
❌: Rule turned off
💀: Rule deprecated
✅: Rule implemented in Rslint
🚫: Rule not implemented in Rslint

@typescript-eslint/eslint-plugin: `8.72.0`

@rslint/core: `0.9.5`

|   |ts/rec |rslint:ts/rec |@ts/tc-only |rslint:ts/tc-only |**rslint impl.** |
|---|:-:|:-:|:-:|:-:|:-:|
|**✔️ enabled**| **24** | **24** | **27** | **27** | |
|**❌ turned off**| **22** | **22** | **23** | **23** | |
|[@ts-eslint/await-thenable](https://typescript-eslint.io/rules/await-thenable)|    |    | ✔️  | ✔️  | ✅  |
|[@ts-eslint/ban-ts-comment](https://typescript-eslint.io/rules/ban-ts-comment)| ✔️  | ✔️  |    |    | ✅  |
|[constructor-super](https://eslint.org/docs/latest/rules/constructor-super)| ❌  | ❌  | ❌  | ❌  | ✅  |
|[getter-return](https://eslint.org/docs/latest/rules/getter-return)| ❌  | ❌  | ❌  | ❌  | ✅  |
|[@ts-eslint/no-array-constructor](https://typescript-eslint.io/rules/no-array-constructor)| ✔️  | ✔️  |    |    | ✅  |
|[no-array-constructor](https://eslint.org/docs/latest/rules/no-array-constructor)| ❌  | ❌  |    |    | ✅  |
|[@ts-eslint/no-array-delete](https://typescript-eslint.io/rules/no-array-delete)|    |    | ✔️  | ✔️  | ✅  |
|[@ts-eslint/no-base-to-string](https://typescript-eslint.io/rules/no-base-to-string)|    |    | ✔️  | ✔️  | ✅  |
|[no-class-assign](https://eslint.org/docs/latest/rules/no-class-assign)| ❌  | ❌  | ❌  | ❌  | ✅  |
|[no-const-assign](https://eslint.org/docs/latest/rules/no-const-assign)| ❌  | ❌  | ❌  | ❌  | ✅  |
|[no-dupe-args](https://eslint.org/docs/latest/rules/no-dupe-args)| ❌  | ❌  | ❌  | ❌  | ✅  |
|[no-dupe-class-members](https://eslint.org/docs/latest/rules/no-dupe-class-members)| ❌  | ❌  | ❌  | ❌  | ✅  |
|[no-dupe-keys](https://eslint.org/docs/latest/rules/no-dupe-keys)| ❌  | ❌  | ❌  | ❌  | ✅  |
|[@ts-eslint/no-duplicate-enum-values](https://typescript-eslint.io/rules/no-duplicate-enum-values)| ✔️  | ✔️  |    |    | ✅  |
|[@ts-eslint/no-duplicate-type-constituents](https://typescript-eslint.io/rules/no-duplicate-type-constituents)|    |    | ✔️  | ✔️  | ✅  |
|[@ts-eslint/no-empty-object-type](https://typescript-eslint.io/rules/no-empty-object-type)| ✔️  | ✔️  |    |    | ✅  |
|[@ts-eslint/no-explicit-any](https://typescript-eslint.io/rules/no-explicit-any)| ✔️  | ✔️  |    |    | ✅  |
|[@ts-eslint/no-extra-non-null-assertion](https://typescript-eslint.io/rules/no-extra-non-null-assertion)| ✔️  | ✔️  |    |    | ✅  |
|[@ts-eslint/no-floating-promises](https://typescript-eslint.io/rules/no-floating-promises)|    |    | ✔️  | ✔️  | ✅  |
|[@ts-eslint/no-for-in-array](https://typescript-eslint.io/rules/no-for-in-array)|    |    | ✔️  | ✔️  | ✅  |
|[no-func-assign](https://eslint.org/docs/latest/rules/no-func-assign)| ❌  | ❌  | ❌  | ❌  | ✅  |
|[@ts-eslint/no-implied-eval](https://typescript-eslint.io/rules/no-implied-eval)|    |    | ✔️  | ✔️  | ✅  |
|[no-implied-eval](https://eslint.org/docs/latest/rules/no-implied-eval)|    |    | ❌  | ❌  | ✅  |
|[no-import-assign](https://eslint.org/docs/latest/rules/no-import-assign)| ❌  | ❌  | ❌  | ❌  | ✅  |
|[@ts-eslint/no-misused-new](https://typescript-eslint.io/rules/no-misused-new)| ✔️  | ✔️  |    |    | ✅  |
|[@ts-eslint/no-misused-promises](https://typescript-eslint.io/rules/no-misused-promises)|    |    | ✔️  | ✔️  | ✅  |
|[@ts-eslint/no-namespace](https://typescript-eslint.io/rules/no-namespace)| ✔️  | ✔️  |    |    | ✅  |
|[no-new-native-nonconstructor](https://eslint.org/docs/latest/rules/no-new-native-nonconstructor)| ❌  | ❌  | ❌  | ❌  | ✅  |
|[no-new-symbol](https://eslint.org/docs/latest/rules/no-new-symbol) 💀| ❌  | ❌  | ❌  | ❌  | 🚫  |
|[@ts-eslint/no-non-null-asserted-optional-chain](https://typescript-eslint.io/rules/no-non-null-asserted-optional-chain)| ✔️  | ✔️  |    |    | ✅  |
|[no-obj-calls](https://eslint.org/docs/latest/rules/no-obj-calls)| ❌  | ❌  | ❌  | ❌  | ✅  |
|[no-redeclare](https://eslint.org/docs/latest/rules/no-redeclare)| ❌  | ❌  | ❌  | ❌  | ✅  |
|[@ts-eslint/no-redundant-type-constituents](https://typescript-eslint.io/rules/no-redundant-type-constituents)|    |    | ✔️  | ✔️  | ✅  |
|[@ts-eslint/no-require-imports](https://typescript-eslint.io/rules/no-require-imports)| ✔️  | ✔️  |    |    | ✅  |
|[no-setter-return](https://eslint.org/docs/latest/rules/no-setter-return)| ❌  | ❌  | ❌  | ❌  | ✅  |
|[@ts-eslint/no-this-alias](https://typescript-eslint.io/rules/no-this-alias)| ✔️  | ✔️  |    |    | ✅  |
|[no-this-before-super](https://eslint.org/docs/latest/rules/no-this-before-super)| ❌  | ❌  | ❌  | ❌  | ✅  |
|[no-throw-literal](https://eslint.org/docs/latest/rules/no-throw-literal)|    |    | ❌  | ❌  | ✅  |
|[no-undef](https://eslint.org/docs/latest/rules/no-undef)| ❌  | ❌  | ❌  | ❌  | ✅  |
|[@ts-eslint/no-unnecessary-type-assertion](https://typescript-eslint.io/rules/no-unnecessary-type-assertion)|    |    | ✔️  | ✔️  | ✅  |
|[@ts-eslint/no-unnecessary-type-constraint](https://typescript-eslint.io/rules/no-unnecessary-type-constraint)| ✔️  | ✔️  |    |    | ✅  |
|[no-unreachable](https://eslint.org/docs/latest/rules/no-unreachable)| ❌  | ❌  | ❌  | ❌  | ✅  |
|[@ts-eslint/no-unsafe-argument](https://typescript-eslint.io/rules/no-unsafe-argument)|    |    | ✔️  | ✔️  | ✅  |
|[@ts-eslint/no-unsafe-assignment](https://typescript-eslint.io/rules/no-unsafe-assignment)|    |    | ✔️  | ✔️  | ✅  |
|[@ts-eslint/no-unsafe-call](https://typescript-eslint.io/rules/no-unsafe-call)|    |    | ✔️  | ✔️  | ✅  |
|[@ts-eslint/no-unsafe-declaration-merging](https://typescript-eslint.io/rules/no-unsafe-declaration-merging)| ✔️  | ✔️  |    |    | ✅  |
|[@ts-eslint/no-unsafe-enum-comparison](https://typescript-eslint.io/rules/no-unsafe-enum-comparison)|    |    | ✔️  | ✔️  | ✅  |
|[@ts-eslint/no-unsafe-function-type](https://typescript-eslint.io/rules/no-unsafe-function-type)| ✔️  | ✔️  |    |    | ✅  |
|[@ts-eslint/no-unsafe-member-access](https://typescript-eslint.io/rules/no-unsafe-member-access)|    |    | ✔️  | ✔️  | ✅  |
|[no-unsafe-negation](https://eslint.org/docs/latest/rules/no-unsafe-negation)| ❌  | ❌  | ❌  | ❌  | ✅  |
|[@ts-eslint/no-unsafe-return](https://typescript-eslint.io/rules/no-unsafe-return)|    |    | ✔️  | ✔️  | ✅  |
|[@ts-eslint/no-unsafe-unary-minus](https://typescript-eslint.io/rules/no-unsafe-unary-minus)|    |    | ✔️  | ✔️  | ✅  |
|[@ts-eslint/no-unused-expressions](https://typescript-eslint.io/rules/no-unused-expressions)| ✔️  | ✔️  |    |    | ✅  |
|[no-unused-expressions](https://eslint.org/docs/latest/rules/no-unused-expressions)| ❌  | ❌  |    |    | ✅  |
|[@ts-eslint/no-unused-vars](https://typescript-eslint.io/rules/no-unused-vars)| ✔️  | ✔️  |    |    | ✅  |
|[no-unused-vars](https://eslint.org/docs/latest/rules/no-unused-vars)| ❌  | ❌  |    |    | ✅  |
|[no-var](https://eslint.org/docs/latest/rules/no-var)| ✔️  | ✔️  | ✔️  | ✔️  | ✅  |
|[no-with](https://eslint.org/docs/latest/rules/no-with)| ❌  | ❌  | ❌  | ❌  | ✅  |
|[@ts-eslint/no-wrapper-object-types](https://typescript-eslint.io/rules/no-wrapper-object-types)| ✔️  | ✔️  |    |    | ✅  |
|[@ts-eslint/only-throw-error](https://typescript-eslint.io/rules/only-throw-error)|    |    | ✔️  | ✔️  | ✅  |
|[@ts-eslint/prefer-as-const](https://typescript-eslint.io/rules/prefer-as-const)| ✔️  | ✔️  |    |    | ✅  |
|[prefer-const](https://eslint.org/docs/latest/rules/prefer-const)| ✔️  | ✔️  | ✔️  | ✔️  | ✅  |
|[@ts-eslint/prefer-namespace-keyword](https://typescript-eslint.io/rules/prefer-namespace-keyword)| ✔️  | ✔️  |    |    | ✅  |
|[@ts-eslint/prefer-promise-reject-errors](https://typescript-eslint.io/rules/prefer-promise-reject-errors)|    |    | ✔️  | ✔️  | ✅  |
|[prefer-promise-reject-errors](https://eslint.org/docs/latest/rules/prefer-promise-reject-errors)|    |    | ❌  | ❌  | ✅  |
|[prefer-rest-params](https://eslint.org/docs/latest/rules/prefer-rest-params)| ✔️  | ✔️  | ✔️  | ✔️  | ✅  |
|[prefer-spread](https://eslint.org/docs/latest/rules/prefer-spread)| ✔️  | ✔️  | ✔️  | ✔️  | ✅  |
|[@ts-eslint/require-await](https://typescript-eslint.io/rules/require-await)|    |    | ✔️  | ✔️  | ✅  |
|[require-await](https://eslint.org/docs/latest/rules/require-await)|    |    | ❌  | ❌  | ✅  |
|[@ts-eslint/restrict-plus-operands](https://typescript-eslint.io/rules/restrict-plus-operands)|    |    | ✔️  | ✔️  | ✅  |
|[@ts-eslint/restrict-template-expressions](https://typescript-eslint.io/rules/restrict-template-expressions)|    |    | ✔️  | ✔️  | ✅  |
|[@ts-eslint/triple-slash-reference](https://typescript-eslint.io/rules/triple-slash-reference)| ✔️  | ✔️  |    |    | ✅  |
|[@ts-eslint/unbound-method](https://typescript-eslint.io/rules/unbound-method)|    |    | ✔️  | ✔️  | ✅  |
