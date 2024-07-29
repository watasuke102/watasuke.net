// watasuke.net
// CopyRight (c) 2021-2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import header from 'eslint-plugin-header';
import Config from '@watasuke.net/config/eslint.config.mjs';

export default [
  {
    ignores: ['.cache', 'public'],
  },
  {
    plugins: {
      header: header,
    },
    rules: {
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
