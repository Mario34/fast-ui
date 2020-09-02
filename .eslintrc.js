module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'eslint:recommended',
    '@vue/standard',
    '@vue/typescript/recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    "@typescript-eslint/member-delimiter-style": [
      "error",
      {
        "multiline": {
          "delimiter": "semi",
          "requireLast": true
        },
        "singleline": {
          "delimiter": "semi",
          "requireLast": false
        }
      }
    ],
    '@typescript-eslint/no-unused-vars': [
      1,
      {
        "vars": "all",
        "args": "after-used",
        "ignoreRestSiblings": false
      }
    ],

    // 试验性 🛠
    'react/react-in-jsx-scope': 0,
    'react/no-unknown-property': 0,
    'react/display-name': 0,
    'react/jsx-filename-extension': [
      1,
      { 'extensions': ['.js', '.jsx', '.tsx'] },
    ],
    'react/jsx-filename-extension': [
      1,
      { 'extensions': ['.js', '.jsx', '.tsx'] },
    ],
    'react/jsx-indent-props': [1, 2],
    'react/jsx-indent': [1, 2, {
      'checkAttributes': true,
      'indentLogicalExpressions': true,
    }],
    'react/jsx-wrap-multilines': [1, {
      'declaration': 'parens-new-line',
      'assignment': 'parens-new-line',
      'return': 'parens-new-line',
      'arrow': 'parens-new-line',
      'condition': 'ignore',
      'logical': 'ignore',
      'prop': 'ignore',
    }],
    'react/jsx-closing-bracket-location': [1, {
      'nonEmpty': 'tag-aligned',
      'selfClosing': 'tag-aligned',
    }],
    'jsx-quotes': [2, 'prefer-single'],
    'react/jsx-closing-tag-location': [1],
    'react/sort-comp': [1, {
      'order': [
        'weapp',
        'static-variables',
        'static-methods',
        'lifecycle',
        'everything-else',
        'render',
      ],
      'groups': {
        'weapp': ['config'],
      },
    }],
    'react/jsx-tag-spacing': [1, {
      'closingSlash': 'never',
      'beforeSelfClosing': 'always',
      'afterOpening': 'never',
      'beforeClosing': 'allow',
    }],
    'react/jsx-max-props-per-line': [1, {
      'maximum': 1,
      'when': 'multiline',
    }],
    'react/jsx-first-prop-new-line': [1, 'multiline'],
    'react/jsx-sort-props': [
      1,
      {
        'callbacksLast': true,
        'shorthandFirst': true,
        'ignoreCase': false,
        'noSortAlphabetically': false,
      },
    ],
    'react/jsx-no-duplicate-props': [2, { 'ignoreCase': false }],

    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-tabs': 2,
    'no-mixed-spaces-and-tabs': 2,
    'indent': [1, 2],
    'comma-dangle': [
      'error',
      {
        'arrays': 'always-multiline',
        'objects': 'always-multiline',
        'imports': 'always-multiline',
        'exports': 'always-multiline',
        'functions': 'always-multiline',
      },
    ],
    'comma-spacing': [2, { 'before': false, 'after': true }],
    'comma-style': [2, 'last'],
    'semi': [2, 'always'],
    'semi-spacing': [2, { 'before': false, 'after': true }],
    '@typescript-eslint/explicit-module-boundary-types': [0],
    'quotes': [2, 'single', { 'avoidEscape': true, 'allowTemplateLiterals': true }],
    // 代码风格
    'accessor-pairs': 2,
    'arrow-spacing': [2, { 'before': true, 'after': true }],
    'block-spacing': [2, 'always'],
    'camelcase': [0, { 'properties': 'always' }],
    'dot-location': [2, 'property'],
    'eqeqeq': ['error', 'always', { 'null': 'ignore' }],
    'key-spacing': [2, { 'beforeColon': false, 'afterColon': true }],
    'keyword-spacing': [2, { 'before': true, 'after': true }],
    'new-cap': [2, { 'newIsCap': true, 'capIsNew': false }],
    'no-console': [2, { 'allow': ['warn', 'error'] }],
    'no-eval': 1,
    'no-extend-native': 2, // 禁止扩展原生对象
    'no-floating-decimal': 2,
    'no-implied-eval': 2,
    'no-multi-spaces': 2,
    'no-multiple-empty-lines': [2, { 'max': 1 }],
    'no-return-assign': [0, 'except-parens'],
    'func-call-spacing': 2,
    'no-trailing-spaces': 1,
    'no-unmodified-loop-condition': 2,
    'no-unneeded-ternary': [2, { 'defaultAssignment': false }], // 三元运算符号优化（实验）
    'no-whitespace-before-property': 2,
    'operator-linebreak': [
      2,
      'after',
      { 'overrides': { '?': 'before', ':': 'before' } },
    ],
    'space-before-blocks': [2, 'always'],
    'space-before-function-paren': [2, 'never'],
    'space-infix-ops': 1,
    'space-unary-ops': [2, { 'words': true, 'nonwords': false }],
    'spaced-comment': [
      2,
      'always',
      {
        'markers': [
          'global',
          'globals',
          'eslint',
          'eslint-disable',
          '*package',
          '!',
          ',',
        ],
      },
    ],
    'wrap-iife': [2, 'any'],
    'prefer-const': 2,
    'no-debugger': 0,
    'object-curly-spacing': [2, 'always', { 'objectsInObjects': false }],
    'array-bracket-spacing': [2, 'never'],
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)'
      ],
      env: {
        mocha: true
      }
    }
  ]
}
