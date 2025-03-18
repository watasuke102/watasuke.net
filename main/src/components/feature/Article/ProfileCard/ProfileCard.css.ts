// watasuke.net
// CopyRight (c) 2021-2025 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @watasuke1024
// This software is released under the MIT or MIT SUSHI-WARE License.
import {style} from '@vanilla-extract/css';
import {color} from '@watasuke.net/common/src/css/color';

export const container = style({
  textAlign: 'center',
  border: `solid 2px ${color.fg}`,
  borderRadius: 2,
  padding: '10px 10px',
  marginBottom: 30,
});

export const avatar = style({
  borderRadius: 1000,
  boxShadow: '1px',
});

export const body = style({
  margin: '15px 10px',
  textAlign: 'left',
});
