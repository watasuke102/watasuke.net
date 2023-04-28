// ProfileCard.css.ts
//
// CopyRight (c) 2021-2023 Watasuke
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import {color} from '@/common/color';
import {style} from '@vanilla-extract/css';

export const container = style({
  textAlign: 'center',
  border: `solid 2px ${color.fg}`,
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
