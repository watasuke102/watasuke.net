// End.css.ts
//
// CopyRight (c) 2021-2023 Watasuke
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import {color} from '@/common/color';
import {style} from '@vanilla-extract/css';

export const container = style({
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  color: `${color.fg} !important`,
});

export const greet = style({
  fontSize: '2em !important',
  width: '95%',
  margin: 'auto',
});

export const link_container = style({
  fontSize: '1.2em',
  display: 'flex',
  justifyContent: 'center',
});

export const link = style({
  margin: '0 5px',
});
