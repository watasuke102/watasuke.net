// watasuke.net
// CopyRight (c) 2021-2025 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @watasuke1024
// This software is released under the MIT or MIT SUSHI-WARE License.
import {style} from '@vanilla-extract/css';
import {color} from '@watasuke.net/common/src/css/color';

export const container = style({
  width: '100%',
  margin: 'auto',
  display: 'grid',
  gridTemplateColumns: '50% 50%',
  border: `2px solid ${color.fg}`,
});

export const selected = style({
  fontWeight: 'bold',
  backgroundColor: color.blue,
  color: color.bg,
});

export const item = style({
  display: 'inline-block',
  width: '100%',
  ':hover': {
    cursor: 'pointer',
  },
});
