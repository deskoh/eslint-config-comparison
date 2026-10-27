# typescript-eslint vs Rslint Comparison

✔️: Rule enabled
❌: Rule turned off
💀: Rule deprecated
✅: Rule implemented in Rslint
🚫: Rule not implemented in Rslint

@typescript-eslint/eslint-plugin: `8.72.0`

@rslint/core: `0.9.5`

|   |@ts/rec |rslint:@ts/rec |@ts/tc-only |rslint:@ts/tc-only |**rslint impl.** |
|---|:-:|:-:|:-:|:-:|:-:|
|**✔️ enabled**| **24** | **24** | **27** | **27** | |
|**❌ turned off**| **22** | **22** | **23** | **23** | |
|[accessor-pairs](https://eslint.org/docs/latest/rules/accessor-pairs)|    |    |    |    | ✅  |
|[@ts-eslint/adjacent-overload-signatures](https://typescript-eslint.io/rules/adjacent-overload-signatures)|    |    |    |    | ✅  |
|[array-callback-return](https://eslint.org/docs/latest/rules/array-callback-return)|    |    |    |    | ✅  |
|[@ts-eslint/array-type](https://typescript-eslint.io/rules/array-type)|    |    |    |    | ✅  |
|[arrow-body-style](https://eslint.org/docs/latest/rules/arrow-body-style)|    |    |    |    | ✅  |
|[@ts-eslint/await-thenable](https://typescript-eslint.io/rules/await-thenable)|    |    | ✔️  | ✔️  | ✅  |
|[@ts-eslint/ban-ts-comment](https://typescript-eslint.io/rules/ban-ts-comment)| ✔️  | ✔️  |    |    | ✅  |
|[@ts-eslint/ban-tslint-comment](https://typescript-eslint.io/rules/ban-tslint-comment)|    |    |    |    | ✅  |
|[block-scoped-var](https://eslint.org/docs/latest/rules/block-scoped-var)|    |    |    |    | ✅  |
|[camelcase](https://eslint.org/docs/latest/rules/camelcase)|    |    |    |    | ✅  |
|[capitalized-comments](https://eslint.org/docs/latest/rules/capitalized-comments)|    |    |    |    | ✅  |
|[@ts-eslint/class-literal-property-style](https://typescript-eslint.io/rules/class-literal-property-style)|    |    |    |    | ✅  |
|[@ts-eslint/class-methods-use-this](https://typescript-eslint.io/rules/class-methods-use-this)|    |    |    |    | ✅  |
|[class-methods-use-this](https://eslint.org/docs/latest/rules/class-methods-use-this)|    |    |    |    | ✅  |
|[complexity](https://eslint.org/docs/latest/rules/complexity)|    |    |    |    | ✅  |
|[@ts-eslint/consistent-generic-constructors](https://typescript-eslint.io/rules/consistent-generic-constructors)|    |    |    |    | ✅  |
|[@ts-eslint/consistent-indexed-object-style](https://typescript-eslint.io/rules/consistent-indexed-object-style)|    |    |    |    | ✅  |
|[@ts-eslint/consistent-return](https://typescript-eslint.io/rules/consistent-return)|    |    |    |    | ✅  |
|[consistent-return](https://eslint.org/docs/latest/rules/consistent-return)|    |    |    |    | ✅  |
|[consistent-this](https://eslint.org/docs/latest/rules/consistent-this)|    |    |    |    | ✅  |
|[@ts-eslint/consistent-type-assertions](https://typescript-eslint.io/rules/consistent-type-assertions)|    |    |    |    | ✅  |
|[@ts-eslint/consistent-type-definitions](https://typescript-eslint.io/rules/consistent-type-definitions)|    |    |    |    | ✅  |
|[@ts-eslint/consistent-type-exports](https://typescript-eslint.io/rules/consistent-type-exports)|    |    |    |    | ✅  |
|[@ts-eslint/consistent-type-imports](https://typescript-eslint.io/rules/consistent-type-imports)|    |    |    |    | ✅  |
|[constructor-super](https://eslint.org/docs/latest/rules/constructor-super)| ❌  | ❌  | ❌  | ❌  | ✅  |
|[curly](https://eslint.org/docs/latest/rules/curly)|    |    |    |    | ✅  |
|[default-case](https://eslint.org/docs/latest/rules/default-case)|    |    |    |    | ✅  |
|[default-case-last](https://eslint.org/docs/latest/rules/default-case-last)|    |    |    |    | ✅  |
|[@ts-eslint/default-param-last](https://typescript-eslint.io/rules/default-param-last)|    |    |    |    | ✅  |
|[default-param-last](https://eslint.org/docs/latest/rules/default-param-last)|    |    |    |    | ✅  |
|[@ts-eslint/dot-notation](https://typescript-eslint.io/rules/dot-notation)|    |    |    |    | ✅  |
|[dot-notation](https://eslint.org/docs/latest/rules/dot-notation)|    |    |    |    | ✅  |
|[eqeqeq](https://eslint.org/docs/latest/rules/eqeqeq)|    |    |    |    | ✅  |
|[@ts-eslint/explicit-function-return-type](https://typescript-eslint.io/rules/explicit-function-return-type)|    |    |    |    | ✅  |
|[@ts-eslint/explicit-member-accessibility](https://typescript-eslint.io/rules/explicit-member-accessibility)|    |    |    |    | ✅  |
|[@ts-eslint/explicit-module-boundary-types](https://typescript-eslint.io/rules/explicit-module-boundary-types)|    |    |    |    | ✅  |
|[for-direction](https://eslint.org/docs/latest/rules/for-direction)|    |    |    |    | ✅  |
|[func-name-matching](https://eslint.org/docs/latest/rules/func-name-matching)|    |    |    |    | ✅  |
|[func-names](https://eslint.org/docs/latest/rules/func-names)|    |    |    |    | ✅  |
|[func-style](https://eslint.org/docs/latest/rules/func-style)|    |    |    |    | ✅  |
|[getter-return](https://eslint.org/docs/latest/rules/getter-return)| ❌  | ❌  | ❌  | ❌  | ✅  |
|[grouped-accessor-pairs](https://eslint.org/docs/latest/rules/grouped-accessor-pairs)|    |    |    |    | ✅  |
|[guard-for-in](https://eslint.org/docs/latest/rules/guard-for-in)|    |    |    |    | ✅  |
|[id-denylist](https://eslint.org/docs/latest/rules/id-denylist)|    |    |    |    | ✅  |
|[id-length](https://eslint.org/docs/latest/rules/id-length)|    |    |    |    | ✅  |
|[id-match](https://eslint.org/docs/latest/rules/id-match)|    |    |    |    | ✅  |
|[@ts-eslint/init-declarations](https://typescript-eslint.io/rules/init-declarations)|    |    |    |    | ✅  |
|[init-declarations](https://eslint.org/docs/latest/rules/init-declarations)|    |    |    |    | ✅  |
|[logical-assignment-operators](https://eslint.org/docs/latest/rules/logical-assignment-operators)|    |    |    |    | ✅  |
|[max-classes-per-file](https://eslint.org/docs/latest/rules/max-classes-per-file)|    |    |    |    | ✅  |
|[max-depth](https://eslint.org/docs/latest/rules/max-depth)|    |    |    |    | ✅  |
|[max-lines](https://eslint.org/docs/latest/rules/max-lines)|    |    |    |    | ✅  |
|[max-lines-per-function](https://eslint.org/docs/latest/rules/max-lines-per-function)|    |    |    |    | ✅  |
|[max-nested-callbacks](https://eslint.org/docs/latest/rules/max-nested-callbacks)|    |    |    |    | ✅  |
|[@ts-eslint/max-params](https://typescript-eslint.io/rules/max-params)|    |    |    |    | ✅  |
|[max-params](https://eslint.org/docs/latest/rules/max-params)|    |    |    |    | ✅  |
|[max-statements](https://eslint.org/docs/latest/rules/max-statements)|    |    |    |    | ✅  |
|[@ts-eslint/member-ordering](https://typescript-eslint.io/rules/member-ordering)|    |    |    |    | ✅  |
|[@ts-eslint/method-signature-style](https://typescript-eslint.io/rules/method-signature-style)|    |    |    |    | ✅  |
|[@ts-eslint/naming-convention](https://typescript-eslint.io/rules/naming-convention)|    |    |    |    | ✅  |
|[new-cap](https://eslint.org/docs/latest/rules/new-cap)|    |    |    |    | ✅  |
|[no-alert](https://eslint.org/docs/latest/rules/no-alert)|    |    |    |    | ✅  |
|[@ts-eslint/no-array-constructor](https://typescript-eslint.io/rules/no-array-constructor)| ✔️  | ✔️  |    |    | ✅  |
|[no-array-constructor](https://eslint.org/docs/latest/rules/no-array-constructor)| ❌  | ❌  |    |    | ✅  |
|[@ts-eslint/no-array-delete](https://typescript-eslint.io/rules/no-array-delete)|    |    | ✔️  | ✔️  | ✅  |
|[no-async-promise-executor](https://eslint.org/docs/latest/rules/no-async-promise-executor)|    |    |    |    | ✅  |
|[no-await-in-loop](https://eslint.org/docs/latest/rules/no-await-in-loop)|    |    |    |    | ✅  |
|[@ts-eslint/no-base-to-string](https://typescript-eslint.io/rules/no-base-to-string)|    |    | ✔️  | ✔️  | ✅  |
|[no-bitwise](https://eslint.org/docs/latest/rules/no-bitwise)|    |    |    |    | ✅  |
|[no-caller](https://eslint.org/docs/latest/rules/no-caller)|    |    |    |    | ✅  |
|[no-case-declarations](https://eslint.org/docs/latest/rules/no-case-declarations)|    |    |    |    | ✅  |
|[no-class-assign](https://eslint.org/docs/latest/rules/no-class-assign)| ❌  | ❌  | ❌  | ❌  | ✅  |
|[no-compare-neg-zero](https://eslint.org/docs/latest/rules/no-compare-neg-zero)|    |    |    |    | ✅  |
|[no-cond-assign](https://eslint.org/docs/latest/rules/no-cond-assign)|    |    |    |    | ✅  |
|[@ts-eslint/no-confusing-non-null-assertion](https://typescript-eslint.io/rules/no-confusing-non-null-assertion)|    |    |    |    | ✅  |
|[@ts-eslint/no-confusing-void-expression](https://typescript-eslint.io/rules/no-confusing-void-expression)|    |    |    |    | ✅  |
|[no-console](https://eslint.org/docs/latest/rules/no-console)|    |    |    |    | ✅  |
|[no-const-assign](https://eslint.org/docs/latest/rules/no-const-assign)| ❌  | ❌  | ❌  | ❌  | ✅  |
|[no-constant-binary-expression](https://eslint.org/docs/latest/rules/no-constant-binary-expression)|    |    |    |    | ✅  |
|[no-constant-condition](https://eslint.org/docs/latest/rules/no-constant-condition)|    |    |    |    | ✅  |
|[no-constructor-return](https://eslint.org/docs/latest/rules/no-constructor-return)|    |    |    |    | ✅  |
|[no-continue](https://eslint.org/docs/latest/rules/no-continue)|    |    |    |    | ✅  |
|[no-control-regex](https://eslint.org/docs/latest/rules/no-control-regex)|    |    |    |    | ✅  |
|[no-debugger](https://eslint.org/docs/latest/rules/no-debugger)|    |    |    |    | ✅  |
|[no-delete-var](https://eslint.org/docs/latest/rules/no-delete-var)|    |    |    |    | ✅  |
|[@ts-eslint/no-deprecated](https://typescript-eslint.io/rules/no-deprecated)|    |    |    |    | ✅  |
|[no-div-regex](https://eslint.org/docs/latest/rules/no-div-regex)|    |    |    |    | ✅  |
|[no-dupe-args](https://eslint.org/docs/latest/rules/no-dupe-args)| ❌  | ❌  | ❌  | ❌  | ✅  |
|[@ts-eslint/no-dupe-class-members](https://typescript-eslint.io/rules/no-dupe-class-members)|    |    |    |    | ✅  |
|[no-dupe-class-members](https://eslint.org/docs/latest/rules/no-dupe-class-members)| ❌  | ❌  | ❌  | ❌  | ✅  |
|[no-dupe-else-if](https://eslint.org/docs/latest/rules/no-dupe-else-if)|    |    |    |    | ✅  |
|[no-dupe-keys](https://eslint.org/docs/latest/rules/no-dupe-keys)| ❌  | ❌  | ❌  | ❌  | ✅  |
|[no-duplicate-case](https://eslint.org/docs/latest/rules/no-duplicate-case)|    |    |    |    | ✅  |
|[@ts-eslint/no-duplicate-enum-values](https://typescript-eslint.io/rules/no-duplicate-enum-values)| ✔️  | ✔️  |    |    | ✅  |
|[no-duplicate-imports](https://eslint.org/docs/latest/rules/no-duplicate-imports)|    |    |    |    | ✅  |
|[@ts-eslint/no-duplicate-type-constituents](https://typescript-eslint.io/rules/no-duplicate-type-constituents)|    |    | ✔️  | ✔️  | ✅  |
|[@ts-eslint/no-dynamic-delete](https://typescript-eslint.io/rules/no-dynamic-delete)|    |    |    |    | ✅  |
|[no-else-return](https://eslint.org/docs/latest/rules/no-else-return)|    |    |    |    | ✅  |
|[no-empty](https://eslint.org/docs/latest/rules/no-empty)|    |    |    |    | ✅  |
|[no-empty-character-class](https://eslint.org/docs/latest/rules/no-empty-character-class)|    |    |    |    | ✅  |
|[@ts-eslint/no-empty-function](https://typescript-eslint.io/rules/no-empty-function)|    |    |    |    | ✅  |
|[no-empty-function](https://eslint.org/docs/latest/rules/no-empty-function)|    |    |    |    | ✅  |
|[@ts-eslint/no-empty-object-type](https://typescript-eslint.io/rules/no-empty-object-type)| ✔️  | ✔️  |    |    | ✅  |
|[no-empty-pattern](https://eslint.org/docs/latest/rules/no-empty-pattern)|    |    |    |    | ✅  |
|[no-empty-static-block](https://eslint.org/docs/latest/rules/no-empty-static-block)|    |    |    |    | ✅  |
|[no-eq-null](https://eslint.org/docs/latest/rules/no-eq-null)|    |    |    |    | ✅  |
|[no-eval](https://eslint.org/docs/latest/rules/no-eval)|    |    |    |    | ✅  |
|[no-ex-assign](https://eslint.org/docs/latest/rules/no-ex-assign)|    |    |    |    | ✅  |
|[@ts-eslint/no-explicit-any](https://typescript-eslint.io/rules/no-explicit-any)| ✔️  | ✔️  |    |    | ✅  |
|[no-extend-native](https://eslint.org/docs/latest/rules/no-extend-native)|    |    |    |    | ✅  |
|[no-extra-bind](https://eslint.org/docs/latest/rules/no-extra-bind)|    |    |    |    | ✅  |
|[no-extra-boolean-cast](https://eslint.org/docs/latest/rules/no-extra-boolean-cast)|    |    |    |    | ✅  |
|[no-extra-label](https://eslint.org/docs/latest/rules/no-extra-label)|    |    |    |    | ✅  |
|[@ts-eslint/no-extra-non-null-assertion](https://typescript-eslint.io/rules/no-extra-non-null-assertion)| ✔️  | ✔️  |    |    | ✅  |
|[@ts-eslint/no-extraneous-class](https://typescript-eslint.io/rules/no-extraneous-class)|    |    |    |    | ✅  |
|[no-fallthrough](https://eslint.org/docs/latest/rules/no-fallthrough)|    |    |    |    | ✅  |
|[@ts-eslint/no-floating-promises](https://typescript-eslint.io/rules/no-floating-promises)|    |    | ✔️  | ✔️  | ✅  |
|[@ts-eslint/no-for-in-array](https://typescript-eslint.io/rules/no-for-in-array)|    |    | ✔️  | ✔️  | ✅  |
|[no-func-assign](https://eslint.org/docs/latest/rules/no-func-assign)| ❌  | ❌  | ❌  | ❌  | ✅  |
|[@ts-eslint/no-generated-empty-object-type](https://typescript-eslint.io/rules/no-generated-empty-object-type)|    |    |    |    | 🚫  |
|[no-global-assign](https://eslint.org/docs/latest/rules/no-global-assign)|    |    |    |    | ✅  |
|[no-implicit-coercion](https://eslint.org/docs/latest/rules/no-implicit-coercion)|    |    |    |    | ✅  |
|[no-implicit-globals](https://eslint.org/docs/latest/rules/no-implicit-globals)|    |    |    |    | ✅  |
|[@ts-eslint/no-implied-eval](https://typescript-eslint.io/rules/no-implied-eval)|    |    | ✔️  | ✔️  | ✅  |
|[no-implied-eval](https://eslint.org/docs/latest/rules/no-implied-eval)|    |    | ❌  | ❌  | ✅  |
|[no-import-assign](https://eslint.org/docs/latest/rules/no-import-assign)| ❌  | ❌  | ❌  | ❌  | ✅  |
|[@ts-eslint/no-import-type-side-effects](https://typescript-eslint.io/rules/no-import-type-side-effects)|    |    |    |    | ✅  |
|[@ts-eslint/no-inferrable-types](https://typescript-eslint.io/rules/no-inferrable-types)|    |    |    |    | ✅  |
|[no-inline-comments](https://eslint.org/docs/latest/rules/no-inline-comments)|    |    |    |    | ✅  |
|[no-inner-declarations](https://eslint.org/docs/latest/rules/no-inner-declarations)|    |    |    |    | ✅  |
|[no-invalid-regexp](https://eslint.org/docs/latest/rules/no-invalid-regexp)|    |    |    |    | ✅  |
|[@ts-eslint/no-invalid-this](https://typescript-eslint.io/rules/no-invalid-this)|    |    |    |    | ✅  |
|[no-invalid-this](https://eslint.org/docs/latest/rules/no-invalid-this)|    |    |    |    | ✅  |
|[@ts-eslint/no-invalid-void-type](https://typescript-eslint.io/rules/no-invalid-void-type)|    |    |    |    | ✅  |
|[no-irregular-whitespace](https://eslint.org/docs/latest/rules/no-irregular-whitespace)|    |    |    |    | ✅  |
|[no-iterator](https://eslint.org/docs/latest/rules/no-iterator)|    |    |    |    | ✅  |
|[no-label-var](https://eslint.org/docs/latest/rules/no-label-var)|    |    |    |    | ✅  |
|[no-labels](https://eslint.org/docs/latest/rules/no-labels)|    |    |    |    | ✅  |
|[no-lone-blocks](https://eslint.org/docs/latest/rules/no-lone-blocks)|    |    |    |    | ✅  |
|[no-lonely-if](https://eslint.org/docs/latest/rules/no-lonely-if)|    |    |    |    | ✅  |
|[no-loop-func](https://eslint.org/docs/latest/rules/no-loop-func)|    |    |    |    | ✅  |
|[no-loss-of-precision](https://eslint.org/docs/latest/rules/no-loss-of-precision)|    |    |    |    | ✅  |
|[@ts-eslint/no-magic-numbers](https://typescript-eslint.io/rules/no-magic-numbers)|    |    |    |    | ✅  |
|[no-magic-numbers](https://eslint.org/docs/latest/rules/no-magic-numbers)|    |    |    |    | ✅  |
|[@ts-eslint/no-meaningless-void-operator](https://typescript-eslint.io/rules/no-meaningless-void-operator)|    |    |    |    | ✅  |
|[no-misleading-character-class](https://eslint.org/docs/latest/rules/no-misleading-character-class)|    |    |    |    | ✅  |
|[@ts-eslint/no-misused-new](https://typescript-eslint.io/rules/no-misused-new)| ✔️  | ✔️  |    |    | ✅  |
|[@ts-eslint/no-misused-promises](https://typescript-eslint.io/rules/no-misused-promises)|    |    | ✔️  | ✔️  | ✅  |
|[@ts-eslint/no-misused-spread](https://typescript-eslint.io/rules/no-misused-spread)|    |    |    |    | ✅  |
|[@ts-eslint/no-mixed-enums](https://typescript-eslint.io/rules/no-mixed-enums)|    |    |    |    | ✅  |
|[no-multi-assign](https://eslint.org/docs/latest/rules/no-multi-assign)|    |    |    |    | ✅  |
|[no-multi-str](https://eslint.org/docs/latest/rules/no-multi-str)|    |    |    |    | ✅  |
|[@ts-eslint/no-namespace](https://typescript-eslint.io/rules/no-namespace)| ✔️  | ✔️  |    |    | ✅  |
|[no-negated-condition](https://eslint.org/docs/latest/rules/no-negated-condition)|    |    |    |    | ✅  |
|[no-nested-ternary](https://eslint.org/docs/latest/rules/no-nested-ternary)|    |    |    |    | ✅  |
|[no-new](https://eslint.org/docs/latest/rules/no-new)|    |    |    |    | ✅  |
|[no-new-func](https://eslint.org/docs/latest/rules/no-new-func)|    |    |    |    | ✅  |
|[no-new-native-nonconstructor](https://eslint.org/docs/latest/rules/no-new-native-nonconstructor)| ❌  | ❌  | ❌  | ❌  | ✅  |
|[no-new-symbol](https://eslint.org/docs/latest/rules/no-new-symbol) 💀| ❌  | ❌  | ❌  | ❌  | 🚫  |
|[no-new-wrappers](https://eslint.org/docs/latest/rules/no-new-wrappers)|    |    |    |    | ✅  |
|[@ts-eslint/no-non-null-asserted-nullish-coalescing](https://typescript-eslint.io/rules/no-non-null-asserted-nullish-coalescing)|    |    |    |    | ✅  |
|[@ts-eslint/no-non-null-asserted-optional-chain](https://typescript-eslint.io/rules/no-non-null-asserted-optional-chain)| ✔️  | ✔️  |    |    | ✅  |
|[@ts-eslint/no-non-null-assertion](https://typescript-eslint.io/rules/no-non-null-assertion)|    |    |    |    | ✅  |
|[no-nonoctal-decimal-escape](https://eslint.org/docs/latest/rules/no-nonoctal-decimal-escape)|    |    |    |    | ✅  |
|[no-obj-calls](https://eslint.org/docs/latest/rules/no-obj-calls)| ❌  | ❌  | ❌  | ❌  | ✅  |
|[no-object-constructor](https://eslint.org/docs/latest/rules/no-object-constructor)|    |    |    |    | ✅  |
|[no-octal](https://eslint.org/docs/latest/rules/no-octal)|    |    |    |    | ✅  |
|[no-octal-escape](https://eslint.org/docs/latest/rules/no-octal-escape)|    |    |    |    | ✅  |
|[no-param-reassign](https://eslint.org/docs/latest/rules/no-param-reassign)|    |    |    |    | ✅  |
|[no-plusplus](https://eslint.org/docs/latest/rules/no-plusplus)|    |    |    |    | ✅  |
|[no-promise-executor-return](https://eslint.org/docs/latest/rules/no-promise-executor-return)|    |    |    |    | ✅  |
|[no-proto](https://eslint.org/docs/latest/rules/no-proto)|    |    |    |    | ✅  |
|[no-prototype-builtins](https://eslint.org/docs/latest/rules/no-prototype-builtins)|    |    |    |    | ✅  |
|[@ts-eslint/no-redeclare](https://typescript-eslint.io/rules/no-redeclare)|    |    |    |    | ✅  |
|[no-redeclare](https://eslint.org/docs/latest/rules/no-redeclare)| ❌  | ❌  | ❌  | ❌  | ✅  |
|[@ts-eslint/no-redundant-type-constituents](https://typescript-eslint.io/rules/no-redundant-type-constituents)|    |    | ✔️  | ✔️  | ✅  |
|[no-regex-spaces](https://eslint.org/docs/latest/rules/no-regex-spaces)|    |    |    |    | ✅  |
|[@ts-eslint/no-require-imports](https://typescript-eslint.io/rules/no-require-imports)| ✔️  | ✔️  |    |    | ✅  |
|[no-restricted-exports](https://eslint.org/docs/latest/rules/no-restricted-exports)|    |    |    |    | ✅  |
|[no-restricted-globals](https://eslint.org/docs/latest/rules/no-restricted-globals)|    |    |    |    | ✅  |
|[no-restricted-imports](https://eslint.org/docs/latest/rules/no-restricted-imports)|    |    |    |    | ✅  |
|[no-restricted-properties](https://eslint.org/docs/latest/rules/no-restricted-properties)|    |    |    |    | ✅  |
|[no-restricted-syntax](https://eslint.org/docs/latest/rules/no-restricted-syntax)|    |    |    |    | ✅  |
|[@ts-eslint/no-restricted-types](https://typescript-eslint.io/rules/no-restricted-types)|    |    |    |    | ✅  |
|[no-return-assign](https://eslint.org/docs/latest/rules/no-return-assign)|    |    |    |    | ✅  |
|[no-return-await](https://eslint.org/docs/latest/rules/no-return-await) 💀|    |    |    |    | 🚫  |
|[no-script-url](https://eslint.org/docs/latest/rules/no-script-url)|    |    |    |    | ✅  |
|[no-self-assign](https://eslint.org/docs/latest/rules/no-self-assign)|    |    |    |    | ✅  |
|[no-self-compare](https://eslint.org/docs/latest/rules/no-self-compare)|    |    |    |    | ✅  |
|[no-sequences](https://eslint.org/docs/latest/rules/no-sequences)|    |    |    |    | ✅  |
|[no-setter-return](https://eslint.org/docs/latest/rules/no-setter-return)| ❌  | ❌  | ❌  | ❌  | ✅  |
|[@ts-eslint/no-shadow](https://typescript-eslint.io/rules/no-shadow)|    |    |    |    | ✅  |
|[no-shadow](https://eslint.org/docs/latest/rules/no-shadow)|    |    |    |    | ✅  |
|[no-shadow-restricted-names](https://eslint.org/docs/latest/rules/no-shadow-restricted-names)|    |    |    |    | ✅  |
|[no-sparse-arrays](https://eslint.org/docs/latest/rules/no-sparse-arrays)|    |    |    |    | ✅  |
|[no-template-curly-in-string](https://eslint.org/docs/latest/rules/no-template-curly-in-string)|    |    |    |    | ✅  |
|[no-ternary](https://eslint.org/docs/latest/rules/no-ternary)|    |    |    |    | ✅  |
|[@ts-eslint/no-this-alias](https://typescript-eslint.io/rules/no-this-alias)| ✔️  | ✔️  |    |    | ✅  |
|[no-this-before-super](https://eslint.org/docs/latest/rules/no-this-before-super)| ❌  | ❌  | ❌  | ❌  | ✅  |
|[no-throw-literal](https://eslint.org/docs/latest/rules/no-throw-literal)|    |    | ❌  | ❌  | ✅  |
|[no-unassigned-vars](https://eslint.org/docs/latest/rules/no-unassigned-vars)|    |    |    |    | ✅  |
|[no-undef](https://eslint.org/docs/latest/rules/no-undef)| ❌  | ❌  | ❌  | ❌  | ✅  |
|[no-undef-init](https://eslint.org/docs/latest/rules/no-undef-init)|    |    |    |    | ✅  |
|[no-undefined](https://eslint.org/docs/latest/rules/no-undefined)|    |    |    |    | ✅  |
|[no-underscore-dangle](https://eslint.org/docs/latest/rules/no-underscore-dangle)|    |    |    |    | ✅  |
|[no-unexpected-multiline](https://eslint.org/docs/latest/rules/no-unexpected-multiline)|    |    |    |    | ✅  |
|[no-unmodified-loop-condition](https://eslint.org/docs/latest/rules/no-unmodified-loop-condition)|    |    |    |    | ✅  |
|[@ts-eslint/no-unnecessary-boolean-literal-compare](https://typescript-eslint.io/rules/no-unnecessary-boolean-literal-compare)|    |    |    |    | ✅  |
|[@ts-eslint/no-unnecessary-condition](https://typescript-eslint.io/rules/no-unnecessary-condition)|    |    |    |    | ✅  |
|[@ts-eslint/no-unnecessary-parameter-property-assignment](https://typescript-eslint.io/rules/no-unnecessary-parameter-property-assignment)|    |    |    |    | ✅  |
|[@ts-eslint/no-unnecessary-qualifier](https://typescript-eslint.io/rules/no-unnecessary-qualifier)|    |    |    |    | ✅  |
|[@ts-eslint/no-unnecessary-template-expression](https://typescript-eslint.io/rules/no-unnecessary-template-expression)|    |    |    |    | ✅  |
|[@ts-eslint/no-unnecessary-type-arguments](https://typescript-eslint.io/rules/no-unnecessary-type-arguments)|    |    |    |    | ✅  |
|[@ts-eslint/no-unnecessary-type-assertion](https://typescript-eslint.io/rules/no-unnecessary-type-assertion)|    |    | ✔️  | ✔️  | ✅  |
|[@ts-eslint/no-unnecessary-type-constraint](https://typescript-eslint.io/rules/no-unnecessary-type-constraint)| ✔️  | ✔️  |    |    | ✅  |
|[@ts-eslint/no-unnecessary-type-conversion](https://typescript-eslint.io/rules/no-unnecessary-type-conversion)|    |    |    |    | ✅  |
|[@ts-eslint/no-unnecessary-type-parameters](https://typescript-eslint.io/rules/no-unnecessary-type-parameters)|    |    |    |    | ✅  |
|[no-unneeded-ternary](https://eslint.org/docs/latest/rules/no-unneeded-ternary)|    |    |    |    | ✅  |
|[no-unreachable](https://eslint.org/docs/latest/rules/no-unreachable)| ❌  | ❌  | ❌  | ❌  | ✅  |
|[no-unreachable-loop](https://eslint.org/docs/latest/rules/no-unreachable-loop)|    |    |    |    | ✅  |
|[@ts-eslint/no-unsafe-argument](https://typescript-eslint.io/rules/no-unsafe-argument)|    |    | ✔️  | ✔️  | ✅  |
|[@ts-eslint/no-unsafe-assignment](https://typescript-eslint.io/rules/no-unsafe-assignment)|    |    | ✔️  | ✔️  | ✅  |
|[@ts-eslint/no-unsafe-call](https://typescript-eslint.io/rules/no-unsafe-call)|    |    | ✔️  | ✔️  | ✅  |
|[@ts-eslint/no-unsafe-declaration-merging](https://typescript-eslint.io/rules/no-unsafe-declaration-merging)| ✔️  | ✔️  |    |    | ✅  |
|[@ts-eslint/no-unsafe-enum-assignment](https://typescript-eslint.io/rules/no-unsafe-enum-assignment)|    |    |    |    | 🚫  |
|[@ts-eslint/no-unsafe-enum-comparison](https://typescript-eslint.io/rules/no-unsafe-enum-comparison)|    |    | ✔️  | ✔️  | ✅  |
|[no-unsafe-finally](https://eslint.org/docs/latest/rules/no-unsafe-finally)|    |    |    |    | ✅  |
|[@ts-eslint/no-unsafe-function-type](https://typescript-eslint.io/rules/no-unsafe-function-type)| ✔️  | ✔️  |    |    | ✅  |
|[@ts-eslint/no-unsafe-member-access](https://typescript-eslint.io/rules/no-unsafe-member-access)|    |    | ✔️  | ✔️  | ✅  |
|[no-unsafe-negation](https://eslint.org/docs/latest/rules/no-unsafe-negation)| ❌  | ❌  | ❌  | ❌  | ✅  |
|[no-unsafe-optional-chaining](https://eslint.org/docs/latest/rules/no-unsafe-optional-chaining)|    |    |    |    | ✅  |
|[@ts-eslint/no-unsafe-return](https://typescript-eslint.io/rules/no-unsafe-return)|    |    | ✔️  | ✔️  | ✅  |
|[@ts-eslint/no-unsafe-type-assertion](https://typescript-eslint.io/rules/no-unsafe-type-assertion)|    |    |    |    | ✅  |
|[@ts-eslint/no-unsafe-unary-minus](https://typescript-eslint.io/rules/no-unsafe-unary-minus)|    |    | ✔️  | ✔️  | ✅  |
|[@ts-eslint/no-unused-expressions](https://typescript-eslint.io/rules/no-unused-expressions)| ✔️  | ✔️  |    |    | ✅  |
|[no-unused-expressions](https://eslint.org/docs/latest/rules/no-unused-expressions)| ❌  | ❌  |    |    | ✅  |
|[no-unused-labels](https://eslint.org/docs/latest/rules/no-unused-labels)|    |    |    |    | ✅  |
|[@ts-eslint/no-unused-private-class-members](https://typescript-eslint.io/rules/no-unused-private-class-members)|    |    |    |    | ✅  |
|[no-unused-private-class-members](https://eslint.org/docs/latest/rules/no-unused-private-class-members)|    |    |    |    | ✅  |
|[@ts-eslint/no-unused-vars](https://typescript-eslint.io/rules/no-unused-vars)| ✔️  | ✔️  |    |    | ✅  |
|[no-unused-vars](https://eslint.org/docs/latest/rules/no-unused-vars)| ❌  | ❌  |    |    | ✅  |
|[@ts-eslint/no-use-before-define](https://typescript-eslint.io/rules/no-use-before-define)|    |    |    |    | ✅  |
|[no-use-before-define](https://eslint.org/docs/latest/rules/no-use-before-define)|    |    |    |    | ✅  |
|[no-useless-assignment](https://eslint.org/docs/latest/rules/no-useless-assignment)|    |    |    |    | ✅  |
|[no-useless-backreference](https://eslint.org/docs/latest/rules/no-useless-backreference)|    |    |    |    | ✅  |
|[no-useless-call](https://eslint.org/docs/latest/rules/no-useless-call)|    |    |    |    | ✅  |
|[no-useless-catch](https://eslint.org/docs/latest/rules/no-useless-catch)|    |    |    |    | ✅  |
|[no-useless-computed-key](https://eslint.org/docs/latest/rules/no-useless-computed-key)|    |    |    |    | ✅  |
|[no-useless-concat](https://eslint.org/docs/latest/rules/no-useless-concat)|    |    |    |    | ✅  |
|[@ts-eslint/no-useless-constructor](https://typescript-eslint.io/rules/no-useless-constructor)|    |    |    |    | ✅  |
|[no-useless-constructor](https://eslint.org/docs/latest/rules/no-useless-constructor)|    |    |    |    | ✅  |
|[@ts-eslint/no-useless-default-assignment](https://typescript-eslint.io/rules/no-useless-default-assignment)|    |    |    |    | ✅  |
|[@ts-eslint/no-useless-empty-export](https://typescript-eslint.io/rules/no-useless-empty-export)|    |    |    |    | ✅  |
|[no-useless-escape](https://eslint.org/docs/latest/rules/no-useless-escape)|    |    |    |    | ✅  |
|[no-useless-rename](https://eslint.org/docs/latest/rules/no-useless-rename)|    |    |    |    | ✅  |
|[no-useless-return](https://eslint.org/docs/latest/rules/no-useless-return)|    |    |    |    | ✅  |
|[no-var](https://eslint.org/docs/latest/rules/no-var)| ✔️  | ✔️  | ✔️  | ✔️  | ✅  |
|[no-void](https://eslint.org/docs/latest/rules/no-void)|    |    |    |    | ✅  |
|[no-warning-comments](https://eslint.org/docs/latest/rules/no-warning-comments)|    |    |    |    | ✅  |
|[no-with](https://eslint.org/docs/latest/rules/no-with)| ❌  | ❌  | ❌  | ❌  | ✅  |
|[@ts-eslint/no-wrapper-object-types](https://typescript-eslint.io/rules/no-wrapper-object-types)| ✔️  | ✔️  |    |    | ✅  |
|[@ts-eslint/non-nullable-type-assertion-style](https://typescript-eslint.io/rules/non-nullable-type-assertion-style)|    |    |    |    | ✅  |
|[object-shorthand](https://eslint.org/docs/latest/rules/object-shorthand)|    |    |    |    | ✅  |
|[one-var](https://eslint.org/docs/latest/rules/one-var)|    |    |    |    | ✅  |
|[@ts-eslint/only-throw-error](https://typescript-eslint.io/rules/only-throw-error)|    |    | ✔️  | ✔️  | ✅  |
|[operator-assignment](https://eslint.org/docs/latest/rules/operator-assignment)|    |    |    |    | ✅  |
|[@ts-eslint/parameter-properties](https://typescript-eslint.io/rules/parameter-properties)|    |    |    |    | ✅  |
|[prefer-arrow-callback](https://eslint.org/docs/latest/rules/prefer-arrow-callback)|    |    |    |    | ✅  |
|[@ts-eslint/prefer-as-const](https://typescript-eslint.io/rules/prefer-as-const)| ✔️  | ✔️  |    |    | ✅  |
|[prefer-const](https://eslint.org/docs/latest/rules/prefer-const)| ✔️  | ✔️  | ✔️  | ✔️  | ✅  |
|[@ts-eslint/prefer-destructuring](https://typescript-eslint.io/rules/prefer-destructuring)|    |    |    |    | ✅  |
|[prefer-destructuring](https://eslint.org/docs/latest/rules/prefer-destructuring)|    |    |    |    | ✅  |
|[@ts-eslint/prefer-enum-initializers](https://typescript-eslint.io/rules/prefer-enum-initializers)|    |    |    |    | ✅  |
|[prefer-exponentiation-operator](https://eslint.org/docs/latest/rules/prefer-exponentiation-operator)|    |    |    |    | ✅  |
|[@ts-eslint/prefer-find](https://typescript-eslint.io/rules/prefer-find)|    |    |    |    | ✅  |
|[@ts-eslint/prefer-for-of](https://typescript-eslint.io/rules/prefer-for-of)|    |    |    |    | ✅  |
|[@ts-eslint/prefer-function-type](https://typescript-eslint.io/rules/prefer-function-type)|    |    |    |    | ✅  |
|[@ts-eslint/prefer-includes](https://typescript-eslint.io/rules/prefer-includes)|    |    |    |    | ✅  |
|[@ts-eslint/prefer-literal-enum-member](https://typescript-eslint.io/rules/prefer-literal-enum-member)|    |    |    |    | ✅  |
|[prefer-named-capture-group](https://eslint.org/docs/latest/rules/prefer-named-capture-group)|    |    |    |    | ✅  |
|[@ts-eslint/prefer-namespace-keyword](https://typescript-eslint.io/rules/prefer-namespace-keyword)| ✔️  | ✔️  |    |    | ✅  |
|[@ts-eslint/prefer-nullish-coalescing](https://typescript-eslint.io/rules/prefer-nullish-coalescing)|    |    |    |    | ✅  |
|[prefer-numeric-literals](https://eslint.org/docs/latest/rules/prefer-numeric-literals)|    |    |    |    | ✅  |
|[prefer-object-has-own](https://eslint.org/docs/latest/rules/prefer-object-has-own)|    |    |    |    | ✅  |
|[prefer-object-spread](https://eslint.org/docs/latest/rules/prefer-object-spread)|    |    |    |    | ✅  |
|[@ts-eslint/prefer-optional-chain](https://typescript-eslint.io/rules/prefer-optional-chain)|    |    |    |    | ✅  |
|[@ts-eslint/prefer-promise-reject-errors](https://typescript-eslint.io/rules/prefer-promise-reject-errors)|    |    | ✔️  | ✔️  | ✅  |
|[prefer-promise-reject-errors](https://eslint.org/docs/latest/rules/prefer-promise-reject-errors)|    |    | ❌  | ❌  | ✅  |
|[@ts-eslint/prefer-readonly](https://typescript-eslint.io/rules/prefer-readonly)|    |    |    |    | ✅  |
|[@ts-eslint/prefer-readonly-parameter-types](https://typescript-eslint.io/rules/prefer-readonly-parameter-types)|    |    |    |    | ✅  |
|[@ts-eslint/prefer-reduce-type-parameter](https://typescript-eslint.io/rules/prefer-reduce-type-parameter)|    |    |    |    | ✅  |
|[prefer-regex-literals](https://eslint.org/docs/latest/rules/prefer-regex-literals)|    |    |    |    | ✅  |
|[@ts-eslint/prefer-regexp-exec](https://typescript-eslint.io/rules/prefer-regexp-exec)|    |    |    |    | ✅  |
|[prefer-rest-params](https://eslint.org/docs/latest/rules/prefer-rest-params)| ✔️  | ✔️  | ✔️  | ✔️  | ✅  |
|[@ts-eslint/prefer-return-this-type](https://typescript-eslint.io/rules/prefer-return-this-type)|    |    |    |    | ✅  |
|[prefer-spread](https://eslint.org/docs/latest/rules/prefer-spread)| ✔️  | ✔️  | ✔️  | ✔️  | ✅  |
|[@ts-eslint/prefer-string-starts-ends-with](https://typescript-eslint.io/rules/prefer-string-starts-ends-with)|    |    |    |    | ✅  |
|[prefer-template](https://eslint.org/docs/latest/rules/prefer-template)|    |    |    |    | ✅  |
|[preserve-caught-error](https://eslint.org/docs/latest/rules/preserve-caught-error)|    |    |    |    | ✅  |
|[@ts-eslint/promise-function-async](https://typescript-eslint.io/rules/promise-function-async)|    |    |    |    | ✅  |
|[radix](https://eslint.org/docs/latest/rules/radix)|    |    |    |    | ✅  |
|[@ts-eslint/related-getter-setter-pairs](https://typescript-eslint.io/rules/related-getter-setter-pairs)|    |    |    |    | ✅  |
|[@ts-eslint/require-array-sort-compare](https://typescript-eslint.io/rules/require-array-sort-compare)|    |    |    |    | ✅  |
|[require-atomic-updates](https://eslint.org/docs/latest/rules/require-atomic-updates)|    |    |    |    | ✅  |
|[@ts-eslint/require-await](https://typescript-eslint.io/rules/require-await)|    |    | ✔️  | ✔️  | ✅  |
|[require-await](https://eslint.org/docs/latest/rules/require-await)|    |    | ❌  | ❌  | ✅  |
|[require-unicode-regexp](https://eslint.org/docs/latest/rules/require-unicode-regexp)|    |    |    |    | ✅  |
|[require-yield](https://eslint.org/docs/latest/rules/require-yield)|    |    |    |    | ✅  |
|[@ts-eslint/restrict-plus-operands](https://typescript-eslint.io/rules/restrict-plus-operands)|    |    | ✔️  | ✔️  | ✅  |
|[@ts-eslint/restrict-template-expressions](https://typescript-eslint.io/rules/restrict-template-expressions)|    |    | ✔️  | ✔️  | ✅  |
|[@ts-eslint/return-await](https://typescript-eslint.io/rules/return-await)|    |    |    |    | ✅  |
|[sort-imports](https://eslint.org/docs/latest/rules/sort-imports)|    |    |    |    | ✅  |
|[sort-keys](https://eslint.org/docs/latest/rules/sort-keys)|    |    |    |    | ✅  |
|[sort-vars](https://eslint.org/docs/latest/rules/sort-vars)|    |    |    |    | ✅  |
|[strict](https://eslint.org/docs/latest/rules/strict)|    |    |    |    | ✅  |
|[@ts-eslint/strict-boolean-expressions](https://typescript-eslint.io/rules/strict-boolean-expressions)|    |    |    |    | ✅  |
|[@ts-eslint/strict-void-return](https://typescript-eslint.io/rules/strict-void-return)|    |    |    |    | ✅  |
|[@ts-eslint/switch-exhaustiveness-check](https://typescript-eslint.io/rules/switch-exhaustiveness-check)|    |    |    |    | ✅  |
|[symbol-description](https://eslint.org/docs/latest/rules/symbol-description)|    |    |    |    | ✅  |
|[@ts-eslint/triple-slash-reference](https://typescript-eslint.io/rules/triple-slash-reference)| ✔️  | ✔️  |    |    | ✅  |
|[@ts-eslint/unbound-method](https://typescript-eslint.io/rules/unbound-method)|    |    | ✔️  | ✔️  | ✅  |
|[unicode-bom](https://eslint.org/docs/latest/rules/unicode-bom)|    |    |    |    | ✅  |
|[@ts-eslint/unified-signatures](https://typescript-eslint.io/rules/unified-signatures)|    |    |    |    | ✅  |
|[use-isnan](https://eslint.org/docs/latest/rules/use-isnan)|    |    |    |    | ✅  |
|[@ts-eslint/use-unknown-in-catch-callback-variable](https://typescript-eslint.io/rules/use-unknown-in-catch-callback-variable)|    |    |    |    | ✅  |
|[valid-typeof](https://eslint.org/docs/latest/rules/valid-typeof)|    |    |    |    | ✅  |
|[vars-on-top](https://eslint.org/docs/latest/rules/vars-on-top)|    |    |    |    | ✅  |
|[yoda](https://eslint.org/docs/latest/rules/yoda)|    |    |    |    | ✅  |
