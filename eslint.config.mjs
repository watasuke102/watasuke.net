// watasuke.net > config
// CopyRight (c) 2021-2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @watasuke1024
// This software is released under the MIT or MIT SUSHI-WARE License.
// @ts-check
import headerPlugin from '@tony.ganchev/eslint-plugin-header';
import importPlugin from 'eslint-plugin-import';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import nextTs from 'eslint-config-next/typescript';
import nextVitals from 'eslint-config-next/core-web-vitals';
import prettier from 'eslint-config-prettier/flat';
import unusedImportsPlugin from 'eslint-plugin-unused-imports';
import {defineConfig, globalIgnores} from 'eslint/config';

export default defineConfig(
  ...nextVitals,
  ...nextTs,
  prettier,
  globalIgnores([
    '**/.next/**',
    '**/out/**',
    '**/next-env.d.ts',
    '**/graphql.ts',
  ]),
  {
    files: ['**/*.{j,t}s', '**/*.{j,t}sx'],
    plugins: {
      a11y: jsxA11y,
      'unused-imports': unusedImportsPlugin,
      header: headerPlugin,
      import: importPlugin,
    },
    rules: {
      ...jsxA11y.flatConfigs.strict.rules,
      '@next/next/no-img-element': 'off',
      '@next/next/no-page-custom-font': 'off',
      // without this, warning is shown at the beginning of `npm run lint`
      '@next/next/no-html-link-for-pages': 'off',
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
            { position: 'before', group: 'builtin', pattern: '*config', patternOptions: { matchBase: true } },
            { position: 'before', group: 'builtin', pattern: '*.css', patternOptions: { matchBase: true } },
            { position: 'after', group: 'external', pattern: '@watasuke.net/**' },
            // aliases
            { position: 'before', group: 'internal', pattern: '@pages/**' },
            { position: 'before', group: 'internal', pattern: '@common/**' },
            { position: 'before', group: 'internal', pattern: '@feature/**' },
            { position: 'before', group: 'internal', pattern: '@features/**' },
            { position: 'before', group: 'internal', pattern: '@utils/**' },
            { position: 'before', group: 'type', pattern: '@data/**' },
            { position: 'before', group: 'type', pattern: '@assets/**' },
            { position: 'after', group: 'type', pattern: '@mytypes/**' },
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
      ], // import/order
      'header/header': [
        'warn',
        'line',
        [
          ' watasuke.net',
          ' CopyRight (c) 2021-2026 watasuke',
          '',
          ' Email  : <watasuke102@gmail.com>',
          ' Twitter: @watasuke1024',
          ' This software is released under the MIT or MIT SUSHI-WARE License.',
        ],
      ], // header/header
    },
  },
);
