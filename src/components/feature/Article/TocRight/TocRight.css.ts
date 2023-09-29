// TocRight.css.ts
//
// CopyRight (c) 2021-2023 Watasuke
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import {color} from '@/common/color';
import {style} from '@vanilla-extract/css';

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
