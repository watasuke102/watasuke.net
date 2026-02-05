// watasuke.net
// CopyRight (c) 2021-2026 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @watasuke1024
// This software is released under the MIT or MIT SUSHI-WARE License.
import {style} from '@vanilla-extract/css';
import {color} from '@watasuke.net/common/src/css/color';

export const list_wrapper = style({
  margin: 0,
});

export const item = style({
  listStyleType: 'decimal-leading-zero',
  marginBlock: 4,
  textDecoration: 'underline',
  color: color.p0,
  '::marker': {
    color: color.fg,
  },
  ':hover': {
    cursor: 'pointer',
  },
});

export const toc_list = [
  style({}),
  style({
    fontWeight: 'bold',
  }),
  style({}),
  style({
    marginLeft: 20,
  }),
  style({
    marginLeft: 40,
  }),
  style({
    marginLeft: 60,
  }),
  style({
    marginLeft: 80,
  }),
];
