module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'unused-imports'],
  rules: {
    indent: [
      'error',
      2,
      {
        SwitchCase: 1,
      },
    ],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: 'off',
    '@typescript-eslint/semi': ['error'],
    '@typescript-eslint/explicit-module-boundary-types': [
      'warn',
      {
        allowDirectConstAssertionInArrowFunctions: false,
      },
    ],
    'unused-imports/no-unused-imports': 'error',
    // 割り当てる前に～のエラーが出るのが嫌なので
    '@typescript-eslint/no-inferrable-types': 'off',
    // case内の宣言は許してほしい
    'no-case-declarations': 'off',
    // 正規表現の確認
    'no-invalid-regexp': 'error',
    // ===と!==を強制
    eqeqeq: 'error',
    'header/header': [
      'warn',
      'line',
      [
        ' watasuke.net',
        ' CopyRight (c) 2021-2024 watasuke',
        '',
        ' Email  : <watasuke102@gmail.com>',
        ' Twitter: @Watasuke102',
        ' This software is released under the MIT or MIT SUSHI-WARE License.',
      ],
    ],
  },
};
