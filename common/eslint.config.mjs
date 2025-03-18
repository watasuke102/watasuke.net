// watasuke.net > common
// CopyRight (c) 2021-2025 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @watasuke1024
// This software is released under the MIT or MIT SUSHI-WARE License.
import header from 'eslint-plugin-header';
import Config from '@watasuke.net/config/eslint.config.mjs';

// https://github.com/Stuk/eslint-plugin-header/issues/57#issuecomment-2378485611
header.rules.header.meta.schema = false;

export default [
  {
    plugins: {
      header: header,
    },
    rules: {
      'header/header': [
        'warn',
        'line',
        [
          ' watasuke.net > common',
          ' CopyRight (c) 2021-2025 watasuke',
          '',
          ' Email  : <watasuke102@gmail.com>',
          ' Twitter: @watasuke1024',
          ' This software is released under the MIT or MIT SUSHI-WARE License.',
        ],
      ],
    },
  },
  ...Config,
];
