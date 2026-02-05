// watasuke.net
// CopyRight (c) 2021-2026 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @watasuke1024
// This software is released under the MIT or MIT SUSHI-WARE License.
import {globalStyle, style} from '@vanilla-extract/css';
import {color} from '@watasuke.net/common/src/css/color';

export const container = style({
  display: 'grid',
  gridTemplateColumns: 'auto 1fr',
  gap: 8,
  width: '100%',
  alignItems: 'center',
});

export const icon = style({
  whiteSpace: 'nowrap',
  width: 20,
});
globalStyle(`${icon} svg`, {
  width: '100%',
  height: '100%',
});

export const tag_list = style({
  display: 'flex',
  gap: '8px 12px',
  flexWrap: 'wrap',
});

const border_radius = 8;
export const link = style({
  display: 'inline-block',
  whiteSpace: 'nowrap',
  fontSize: '0.8em',
  fontWeight: 'bold',
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
