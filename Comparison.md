# ESLint Config Comparison

✔️: Rule enabled
❌: Rule turned off

eslint: `8.57.1`

@typescript-eslint/eslint-plugin: `5.62.0`

|   |eslint:rec |@ts/rec |@ts/eslint-rec |
|---|:-:|:-:|:-:|
|accessor-pairs|    |    |    |
|@ts-eslint/adjacent-overload-signatures|    | ✔️  |    |
|array-callback-return|    |    |    |
|@ts-eslint/array-type|    |    |    |
|arrow-body-style|    |    |    |
|@ts-eslint/await-thenable|    |    |    |
|@ts-eslint/ban-ts-comment|    | ✔️  |    |
|@ts-eslint/ban-tslint-comment|    |    |    |
|@ts-eslint/ban-types|    | ✔️  |    |
|block-scoped-var|    |    |    |
|@ts-eslint/block-spacing|    |    |    |
|block-spacing|    |    |    |
|@ts-eslint/brace-style|    |    |    |
|brace-style|    |    |    |
|camelcase|    |    |    |
|capitalized-comments|    |    |    |
|@ts-eslint/class-literal-property-style|    |    |    |
|class-methods-use-this|    |    |    |
|@ts-eslint/comma-dangle|    |    |    |
|comma-dangle|    |    |    |
|@ts-eslint/comma-spacing|    |    |    |
|comma-spacing|    |    |    |
|complexity|    |    |    |
|@ts-eslint/consistent-generic-constructors|    |    |    |
|@ts-eslint/consistent-indexed-object-style|    |    |    |
|consistent-return|    |    |    |
|consistent-this|    |    |    |
|@ts-eslint/consistent-type-assertions|    |    |    |
|@ts-eslint/consistent-type-definitions|    |    |    |
|@ts-eslint/consistent-type-exports|    |    |    |
|@ts-eslint/consistent-type-imports|    |    |    |
|constructor-super| ✔️  | ❌  | ❌  |
|curly|    |    |    |
|default-case|    |    |    |
|default-case-last|    |    |    |
|@ts-eslint/default-param-last|    |    |    |
|default-param-last|    |    |    |
|@ts-eslint/dot-notation|    |    |    |
|dot-notation|    |    |    |
|eqeqeq|    |    |    |
|@ts-eslint/explicit-function-return-type|    |    |    |
|@ts-eslint/explicit-member-accessibility|    |    |    |
|@ts-eslint/explicit-module-boundary-types|    |    |    |
|for-direction| ✔️  |    |    |
|@ts-eslint/func-call-spacing|    |    |    |
|func-call-spacing|    |    |    |
|func-name-matching|    |    |    |
|func-names|    |    |    |
|func-style|    |    |    |
|getter-return| ✔️  | ❌  | ❌  |
|grouped-accessor-pairs|    |    |    |
|guard-for-in|    |    |    |
|id-denylist|    |    |    |
|id-length|    |    |    |
|id-match|    |    |    |
|@ts-eslint/indent|    |    |    |
|indent|    |    |    |
|@ts-eslint/init-declarations|    |    |    |
|init-declarations|    |    |    |
|@ts-eslint/key-spacing|    |    |    |
|key-spacing|    |    |    |
|@ts-eslint/keyword-spacing|    |    |    |
|keyword-spacing|    |    |    |
|line-comment-position|    |    |    |
|@ts-eslint/lines-around-comment|    |    |    |
|lines-around-comment|    |    |    |
|@ts-eslint/lines-between-class-members|    |    |    |
|lines-between-class-members|    |    |    |
|logical-assignment-operators|    |    |    |
|max-classes-per-file|    |    |    |
|max-depth|    |    |    |
|max-lines|    |    |    |
|max-lines-per-function|    |    |    |
|max-nested-callbacks|    |    |    |
|max-params|    |    |    |
|max-statements|    |    |    |
|@ts-eslint/member-delimiter-style|    |    |    |
|@ts-eslint/member-ordering|    |    |    |
|@ts-eslint/method-signature-style|    |    |    |
|multiline-comment-style|    |    |    |
|@ts-eslint/naming-convention|    |    |    |
|new-cap|    |    |    |
|no-alert|    |    |    |
|@ts-eslint/no-array-constructor|    | ✔️  |    |
|no-array-constructor|    | ❌  |    |
|no-async-promise-executor| ✔️  |    |    |
|no-await-in-loop|    |    |    |
|@ts-eslint/no-base-to-string|    |    |    |
|no-bitwise|    |    |    |
|no-caller|    |    |    |
|no-case-declarations| ✔️  |    |    |
|no-class-assign| ✔️  |    |    |
|no-compare-neg-zero| ✔️  |    |    |
|no-cond-assign| ✔️  |    |    |
|@ts-eslint/no-confusing-non-null-assertion|    |    |    |
|@ts-eslint/no-confusing-void-expression|    |    |    |
|no-console|    |    |    |
|no-const-assign| ✔️  | ❌  | ❌  |
|no-constant-binary-expression|    |    |    |
|no-constant-condition| ✔️  |    |    |
|no-constructor-return|    |    |    |
|no-continue|    |    |    |
|no-control-regex| ✔️  |    |    |
|no-debugger| ✔️  |    |    |
|no-delete-var| ✔️  |    |    |
|no-div-regex|    |    |    |
|no-dupe-args| ✔️  | ❌  | ❌  |
|@ts-eslint/no-dupe-class-members|    |    |    |
|no-dupe-class-members| ✔️  | ❌  | ❌  |
|no-dupe-else-if| ✔️  |    |    |
|no-dupe-keys| ✔️  | ❌  | ❌  |
|no-duplicate-case| ✔️  |    |    |
|@ts-eslint/no-duplicate-enum-values|    |    |    |
|no-duplicate-imports|    |    |    |
|@ts-eslint/no-duplicate-type-constituents|    |    |    |
|@ts-eslint/no-dynamic-delete|    |    |    |
|no-else-return|    |    |    |
|no-empty| ✔️  |    |    |
|no-empty-character-class| ✔️  |    |    |
|@ts-eslint/no-empty-function|    | ✔️  |    |
|no-empty-function|    | ❌  |    |
|@ts-eslint/no-empty-interface|    | ✔️  |    |
|no-empty-pattern| ✔️  |    |    |
|no-empty-static-block|    |    |    |
|no-eq-null|    |    |    |
|no-eval|    |    |    |
|no-ex-assign| ✔️  |    |    |
|@ts-eslint/no-explicit-any|    | ✔️  |    |
|no-extend-native|    |    |    |
|no-extra-bind|    |    |    |
|no-extra-boolean-cast| ✔️  |    |    |
|no-extra-label|    |    |    |
|@ts-eslint/no-extra-non-null-assertion|    | ✔️  |    |
|@ts-eslint/no-extra-parens|    |    |    |
|no-extra-parens|    |    |    |
|@ts-eslint/no-extra-semi|    | ✔️  |    |
|no-extra-semi| ✔️  | ❌  |    |
|@ts-eslint/no-extraneous-class|    |    |    |
|no-fallthrough| ✔️  |    |    |
|@ts-eslint/no-floating-promises|    |    |    |
|@ts-eslint/no-for-in-array|    |    |    |
|no-func-assign| ✔️  | ❌  | ❌  |
|no-global-assign| ✔️  |    |    |
|no-implicit-coercion|    |    |    |
|no-implicit-globals|    |    |    |
|@ts-eslint/no-implied-eval|    |    |    |
|no-implied-eval|    |    |    |
|no-import-assign| ✔️  | ❌  | ❌  |
|@ts-eslint/no-import-type-side-effects|    |    |    |
|@ts-eslint/no-inferrable-types|    | ✔️  |    |
|no-inline-comments|    |    |    |
|no-inner-declarations| ✔️  |    |    |
|no-invalid-regexp| ✔️  |    |    |
|@ts-eslint/no-invalid-this|    |    |    |
|no-invalid-this|    |    |    |
|@ts-eslint/no-invalid-void-type|    |    |    |
|no-irregular-whitespace| ✔️  |    |    |
|no-iterator|    |    |    |
|no-label-var|    |    |    |
|no-labels|    |    |    |
|no-lone-blocks|    |    |    |
|no-lonely-if|    |    |    |
|@ts-eslint/no-loop-func|    |    |    |
|no-loop-func|    |    |    |
|@ts-eslint/no-loss-of-precision|    | ✔️  |    |
|no-loss-of-precision| ✔️  | ❌  |    |
|@ts-eslint/no-magic-numbers|    |    |    |
|no-magic-numbers|    |    |    |
|@ts-eslint/no-meaningless-void-operator|    |    |    |
|no-misleading-character-class| ✔️  |    |    |
|@ts-eslint/no-misused-new|    | ✔️  |    |
|@ts-eslint/no-misused-promises|    |    |    |
|@ts-eslint/no-mixed-enums|    |    |    |
|no-mixed-spaces-and-tabs| ✔️  |    |    |
|no-multi-assign|    |    |    |
|no-multi-str|    |    |    |
|@ts-eslint/no-namespace|    | ✔️  |    |
|no-negated-condition|    |    |    |
|no-nested-ternary|    |    |    |
|no-new|    |    |    |
|no-new-func|    |    |    |
|no-new-native-nonconstructor|    |    |    |
|no-new-symbol| ✔️  | ❌  | ❌  |
|no-new-wrappers|    |    |    |
|@ts-eslint/no-non-null-asserted-nullish-coalescing|    |    |    |
|@ts-eslint/no-non-null-asserted-optional-chain|    | ✔️  |    |
|@ts-eslint/no-non-null-assertion|    | ✔️  |    |
|no-nonoctal-decimal-escape| ✔️  |    |    |
|no-obj-calls| ✔️  | ❌  | ❌  |
|no-object-constructor|    |    |    |
|no-octal| ✔️  |    |    |
|no-octal-escape|    |    |    |
|no-param-reassign|    |    |    |
|no-plusplus|    |    |    |
|no-promise-executor-return|    |    |    |
|no-proto|    |    |    |
|no-prototype-builtins| ✔️  |    |    |
|@ts-eslint/no-redeclare|    |    |    |
|no-redeclare| ✔️  | ❌  | ❌  |
|@ts-eslint/no-redundant-type-constituents|    |    |    |
|no-regex-spaces| ✔️  |    |    |
|@ts-eslint/no-require-imports|    |    |    |
|no-restricted-exports|    |    |    |
|no-restricted-globals|    |    |    |
|@ts-eslint/no-restricted-imports|    |    |    |
|no-restricted-imports|    |    |    |
|no-restricted-properties|    |    |    |
|no-restricted-syntax|    |    |    |
|no-return-assign|    |    |    |
|no-return-await|    |    |    |
|no-script-url|    |    |    |
|no-self-assign| ✔️  |    |    |
|no-self-compare|    |    |    |
|no-sequences|    |    |    |
|no-setter-return| ✔️  | ❌  | ❌  |
|@ts-eslint/no-shadow|    |    |    |
|no-shadow|    |    |    |
|no-shadow-restricted-names| ✔️  |    |    |
|no-sparse-arrays| ✔️  |    |    |
|no-template-curly-in-string|    |    |    |
|no-ternary|    |    |    |
|@ts-eslint/no-this-alias|    | ✔️  |    |
|no-this-before-super| ✔️  | ❌  | ❌  |
|@ts-eslint/no-throw-literal|    |    |    |
|no-throw-literal|    |    |    |
|@ts-eslint/no-type-alias|    |    |    |
|no-undef| ✔️  | ❌  | ❌  |
|no-undef-init|    |    |    |
|no-undefined|    |    |    |
|no-underscore-dangle|    |    |    |
|no-unexpected-multiline| ✔️  |    |    |
|no-unmodified-loop-condition|    |    |    |
|@ts-eslint/no-unnecessary-boolean-literal-compare|    |    |    |
|@ts-eslint/no-unnecessary-condition|    |    |    |
|@ts-eslint/no-unnecessary-qualifier|    |    |    |
|@ts-eslint/no-unnecessary-type-arguments|    |    |    |
|@ts-eslint/no-unnecessary-type-assertion|    |    |    |
|@ts-eslint/no-unnecessary-type-constraint|    | ✔️  |    |
|no-unneeded-ternary|    |    |    |
|no-unreachable| ✔️  | ❌  | ❌  |
|no-unreachable-loop|    |    |    |
|@ts-eslint/no-unsafe-argument|    |    |    |
|@ts-eslint/no-unsafe-assignment|    |    |    |
|@ts-eslint/no-unsafe-call|    |    |    |
|@ts-eslint/no-unsafe-declaration-merging|    |    |    |
|@ts-eslint/no-unsafe-enum-comparison|    |    |    |
|no-unsafe-finally| ✔️  |    |    |
|@ts-eslint/no-unsafe-member-access|    |    |    |
|no-unsafe-negation| ✔️  | ❌  | ❌  |
|no-unsafe-optional-chaining| ✔️  |    |    |
|@ts-eslint/no-unsafe-return|    |    |    |
|@ts-eslint/no-unused-expressions|    |    |    |
|no-unused-expressions|    |    |    |
|no-unused-labels| ✔️  |    |    |
|no-unused-private-class-members|    |    |    |
|@ts-eslint/no-unused-vars|    | ✔️  |    |
|no-unused-vars| ✔️  | ❌  |    |
|@ts-eslint/no-use-before-define|    |    |    |
|no-use-before-define|    |    |    |
|no-useless-backreference| ✔️  |    |    |
|no-useless-call|    |    |    |
|no-useless-catch| ✔️  |    |    |
|no-useless-computed-key|    |    |    |
|no-useless-concat|    |    |    |
|@ts-eslint/no-useless-constructor|    |    |    |
|no-useless-constructor|    |    |    |
|@ts-eslint/no-useless-empty-export|    |    |    |
|no-useless-escape| ✔️  |    |    |
|no-useless-rename|    |    |    |
|no-useless-return|    |    |    |
|no-var|    | ✔️  | ✔️  |
|@ts-eslint/no-var-requires|    | ✔️  |    |
|no-void|    |    |    |
|no-warning-comments|    |    |    |
|no-with| ✔️  |    |    |
|@ts-eslint/non-nullable-type-assertion-style|    |    |    |
|@ts-eslint/object-curly-spacing|    |    |    |
|object-curly-spacing|    |    |    |
|object-shorthand|    |    |    |
|one-var|    |    |    |
|operator-assignment|    |    |    |
|@ts-eslint/padding-line-between-statements|    |    |    |
|padding-line-between-statements|    |    |    |
|@ts-eslint/parameter-properties|    |    |    |
|prefer-arrow-callback|    |    |    |
|@ts-eslint/prefer-as-const|    | ✔️  |    |
|prefer-const|    | ✔️  | ✔️  |
|prefer-destructuring|    |    |    |
|@ts-eslint/prefer-enum-initializers|    |    |    |
|prefer-exponentiation-operator|    |    |    |
|@ts-eslint/prefer-for-of|    |    |    |
|@ts-eslint/prefer-function-type|    |    |    |
|@ts-eslint/prefer-includes|    |    |    |
|@ts-eslint/prefer-literal-enum-member|    |    |    |
|prefer-named-capture-group|    |    |    |
|@ts-eslint/prefer-namespace-keyword|    | ✔️  |    |
|@ts-eslint/prefer-nullish-coalescing|    |    |    |
|prefer-numeric-literals|    |    |    |
|prefer-object-has-own|    |    |    |
|prefer-object-spread|    |    |    |
|@ts-eslint/prefer-optional-chain|    |    |    |
|prefer-promise-reject-errors|    |    |    |
|@ts-eslint/prefer-readonly|    |    |    |
|@ts-eslint/prefer-readonly-parameter-types|    |    |    |
|@ts-eslint/prefer-reduce-type-parameter|    |    |    |
|prefer-regex-literals|    |    |    |
|@ts-eslint/prefer-regexp-exec|    |    |    |
|prefer-rest-params|    | ✔️  | ✔️  |
|@ts-eslint/prefer-return-this-type|    |    |    |
|prefer-spread|    | ✔️  | ✔️  |
|@ts-eslint/prefer-string-starts-ends-with|    |    |    |
|prefer-template|    |    |    |
|@ts-eslint/prefer-ts-expect-error|    |    |    |
|@ts-eslint/promise-function-async|    |    |    |
|@ts-eslint/quotes|    |    |    |
|quotes|    |    |    |
|radix|    |    |    |
|@ts-eslint/require-array-sort-compare|    |    |    |
|require-atomic-updates|    |    |    |
|@ts-eslint/require-await|    |    |    |
|require-await|    |    |    |
|require-unicode-regexp|    |    |    |
|require-yield| ✔️  |    |    |
|@ts-eslint/restrict-plus-operands|    |    |    |
|@ts-eslint/restrict-template-expressions|    |    |    |
|@ts-eslint/return-await|    |    |    |
|@ts-eslint/semi|    |    |    |
|semi|    |    |    |
|sort-imports|    |    |    |
|sort-keys|    |    |    |
|@ts-eslint/sort-type-constituents|    |    |    |
|sort-vars|    |    |    |
|@ts-eslint/space-before-blocks|    |    |    |
|space-before-blocks|    |    |    |
|@ts-eslint/space-before-function-paren|    |    |    |
|space-before-function-paren|    |    |    |
|@ts-eslint/space-infix-ops|    |    |    |
|space-infix-ops|    |    |    |
|strict|    |    |    |
|@ts-eslint/strict-boolean-expressions|    |    |    |
|@ts-eslint/switch-exhaustiveness-check|    |    |    |
|symbol-description|    |    |    |
|@ts-eslint/triple-slash-reference|    | ✔️  |    |
|@ts-eslint/type-annotation-spacing|    |    |    |
|@ts-eslint/typedef|    |    |    |
|@ts-eslint/unbound-method|    |    |    |
|unicode-bom|    |    |    |
|@ts-eslint/unified-signatures|    |    |    |
|use-isnan| ✔️  |    |    |
|valid-typeof| ✔️  | ❌  | ❌  |
|vars-on-top|    |    |    |
|yoda|    |    |    |
