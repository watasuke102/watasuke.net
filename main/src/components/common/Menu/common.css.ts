// watasuke.net
// CopyRight (c) 2021-2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import {style} from '@vanilla-extract/css';
import {color} from '@watasuke.net/common/src/css/color';

export const menu_button = style({
  paddingBlock: 0,
  borderRadius: 4,
  boxShadow: '4px 4px 6px 2px #1a1a1a',
  borderColor: color.fg,
  transitionProperty: 'background-color, transform',
  transitionDuration: '0.2s',
  ':hover': {
    transitionDuration: '0.2s',
    backgroundColor: `${color.p0}33`,
  },
  ':active': {
    transitionDuration: '0.2s',
    transform: 'translate(1px, 1px)',
  },
});
