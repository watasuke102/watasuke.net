// watasuke.net
// CopyRight (c) 2021-2026 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @watasuke1024
// This software is released under the MIT or MIT SUSHI-WARE License.
import {style} from '@vanilla-extract/css';
import {color} from '@watasuke.net/common/src/css/color';

export const heading = style({
  fontSize: '1.5em',
  marginBottom: 0,
});

export const menu_button = style({
  paddingBlock: 0,
  borderRadius: 4,
  boxShadow: '4px 4px 6px 2px #1a1a1a',
  borderColor: color.fg,
  transitionProperty: 'background-color, transform',
  transitionDuration: '0.2s',
  ':active': {
    transitionDuration: '0.2s',
    transform: 'translate(1px, 1px)',
  },
  '@media': {
    '(hover: hover)': {
      ':hover': {
        transitionDuration: '0.2s',
        backgroundColor: `${color.p0}33`,
      },
    },
  },
});
export const menu_button_icon = style({
  display: 'inline-block',
  width: 40,
  height: 40,
});
