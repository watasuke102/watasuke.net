// watasuke.net
// CopyRight (c) 2021-2026 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @watasuke1024
// This software is released under the MIT or MIT SUSHI-WARE License.
import {style} from '@vanilla-extract/css';
import {color} from '@watasuke.net/common/src/css/color';

export const list_ol = style({
  listStyleType: 'none',
  paddingLeft: 0,
});

export const list_item = style({
  display: 'inline-block',
  selectors: {
    '&:not(:last-child)::after': {
      content: ' ',
      display: 'inline-block',
      width: 3,
      height: '1em',
      marginInline: 10,
      borderRadius: 1,
      backgroundColor: color.fg,
      fontWeight: 'bold',
      opacity: '0.7',
      transform: 'rotate(20deg) translateY(3px)',
    },
  },
});
