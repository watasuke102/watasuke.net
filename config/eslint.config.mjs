// watasuke.net > config
// CopyRight (c) 2021-2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
// @ts-check
import {fixupConfigRules} from '@eslint/compat';
import {FlatCompat} from '@eslint/eslintrc';
import js from '@eslint/js';
import react from 'eslint-plugin-react';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import reactHooks from 'eslint-plugin-react-hooks';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import tseslint from 'typescript-eslint';

const compat = new FlatCompat({
  baseDirectory: path.dirname(fileURLToPath(import.meta.url)),
});

export default tseslint.config(
  {
    rules: {
      ...js.configs.recommended.rules,
      // appearance
      indent: ['error', 2, {SwitchCase: 1}],
      quotes: ['error', 'single'],
      'linebreak-style': ['error', 'unix'],
      // program
      eqeqeq: ['error', 'always'], // force ===, !==
      'no-undef': 'error',
      'no-unused-vars': 'error',
      'no-invalid-regexp': 'error',
      'no-case-declarations': 'off', // allow declare in case block
    },
  },
  {
    files: ['**/*.js'],
    rules: {
      semi: ['error', 'always'],
    },
  },
  {
    ignores: ['**/graphql.ts'],
  },
  ...tseslint.configs.recommended,
  ...fixupConfigRules(compat.extends('plugin:react/recommended')),
  {
    files: ['**/*.{j,t}sx'],
    plugins: {
      'jsx-a11y': jsxA11y,
      'react-hooks': reactHooks,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      ...react.configs.recommended.rules,
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off',
      ...reactHooks.configs.recommended.rules,
      ...jsxA11y.flatConfigs.strict.rules,
    },
  },
);
