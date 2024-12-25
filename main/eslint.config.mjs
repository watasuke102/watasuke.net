// watasuke.net
// CopyRight (c) 2021-2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import header from 'eslint-plugin-header';
import next from '@next/eslint-plugin-next';
import Config from '@watasuke.net/config/eslint.config.mjs';

// https://github.com/Stuk/eslint-plugin-header/issues/57#issuecomment-2378485611
header.rules.header.meta.schema = false;

export default [
  {
    ignores: ['.next', 'out'],
  },
  {
    plugins: {
      header: header,
      '@next/next': next,
    },
    rules: {
      ...next.configs.recommended.rules,
      '@next/next/no-img-element': 'off',
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
  },
  ...Config,
];
