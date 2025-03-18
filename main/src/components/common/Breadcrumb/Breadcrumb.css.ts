// watasuke.net
// CopyRight (c) 2021-2025 watasuke
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
});
export const list_link = style({
  // FIXME: why should I use `!important`?
  color: `${color.p0} !important`,
  // '::after': {
  //   content: '>',
  //   marginInline: 6,
  //   textDecoration: 'none',
  //   color: color.fg,
  //   fontWeight: 'bold',
  //   opacity: '0.7',
  // },
});
export const list_separator = style({
  marginInline: 6,
  fontWeight: 'bold',
  opacity: '0.7',
});
