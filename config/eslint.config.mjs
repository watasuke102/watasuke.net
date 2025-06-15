// watasuke.net > config
// CopyRight (c) 2021-2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @watasuke1024
// This software is released under the MIT or MIT SUSHI-WARE License.
// @ts-check
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {fixupConfigRules} from '@eslint/compat';
import {FlatCompat} from '@eslint/eslintrc';
import js from '@eslint/js';
import * as importPlugin from 'eslint-plugin-import';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import tseslint from 'typescript-eslint';
import eslintConfigPrettier from 'eslint-config-prettier';

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
  eslintConfigPrettier,
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
  {
    plugins: {
      import: importPlugin,
    },
    rules: {
      'import/order': [
        'warn',
        {
          // prettier-ignore
          groups: [
            'builtin',
            'external',
            'internal',
            'index',
            'sibling',
            'parent',
            'object',
            'type',
          ],
          // prettier-ignore
          pathGroups: [
            { position: 'before', group: 'builtin',  pattern: '*config', patternOptions: {matchBase: true} },
            { position: 'before', group: 'builtin',  pattern: '*.css', patternOptions: {matchBase: true} },
            { position: 'after',  group: 'external', pattern: '@watasuke.net/**' },
            // aliases
            { position: 'before', group: 'internal', pattern: '@pages/**' },
            { position: 'before', group: 'internal', pattern: '@common/**' },
            { position: 'before', group: 'internal', pattern: '@feature/**' },
            { position: 'before', group: 'internal', pattern: '@features/**' },
            { position: 'before', group: 'internal', pattern: '@utils/**' },
            { position: 'before', group: 'type',     pattern: '@data/**' },
            { position: 'before', group: 'type',     pattern: '@assets/**' },
            { position: 'after',  group: 'type',     pattern: '@mytypes/**' },
          ],
          pathGroupsExcludedImportTypes: [
            '@pages/**',
            '@common/**',
            '@feature/**',
            '@features/**',
            '@utils/**',
            '@assets/**',
            '@mytypes/**',
          ],
          'newlines-between': 'ignore',
        },
      ],
    },
  },
);
