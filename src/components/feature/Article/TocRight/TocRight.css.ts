// watasuke.net
// CopyRight (c) 2021-2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import {style} from '@vanilla-extract/css';
import {color} from '@/common/color';

export const side_toc = style({
  position: 'sticky',
  top: 60,
  padding: 10,
  maxHeight: '80vh',
  overflowY: 'scroll',
  border: `solid 2px ${color.fg}`,
  display: 'flex',
  flexDirection: 'column',
});

export const item = style({
  padding: '4px 8px',
  marginTop: 4,
  marginBottom: 4,
  display: 'block',
  width: 'auto',
  borderRadius: 3,

  backgroundColor: `${color.fg}36`,
  ':hover': {
    backgroundColor: `${color.fg}66`,
  },
});
