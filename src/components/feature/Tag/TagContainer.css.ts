// TagContainer.css.ts
//
// CopyRight (c) 2021-2023 Watasuke
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT SUSHI-WARE License.
import {style} from '@vanilla-extract/css';
import {color} from '@/common/color';

export const container = style({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
});

export const icon = style({
  whiteSpace: 'nowrap',
  fontSize: '1.1em',
  marginRight: 5,
  marginBottom: 5,
});

const border_radius = 8;
export const link = style({
  display: 'inline-block',
  whiteSpace: 'nowrap',
  fontSize: '0.8em',
  fontWeight: 'bold',
  marginRight: 10,
  marginBottom: 5,
  padding: '2px 10px 2px 5px',

  borderTopRightRadius: border_radius,
  borderBottomRightRadius: border_radius,

  color: color.fg,
  border: `1px solid ${color.fg}`,
  ':hover': {
    color: color.p0,
    transition: 'color 0.3s',
  },
});
