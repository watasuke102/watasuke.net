// Toggle.scss
//
// CopyRight (c) 2021-2023 Watasuke
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT SUSHI-WARE License.
import {style} from '@vanilla-extract/css';
import {color} from '@/common/color';

export const container = style({
  width: '100%',
  margin: 'auto',
  display: 'grid',
  gridTemplateColumns: '50% 50%',
  border: `2px solid ${color.fg}`,
});

export const selected = style({
  fontWeight: 'bold',
  backgroundColor: color.p0,
  color: color.bg,
});

export const item = style({
  display: 'inline-block',
  width: '100%',
  ':hover': {
    cursor: 'pointer',
  },
});
