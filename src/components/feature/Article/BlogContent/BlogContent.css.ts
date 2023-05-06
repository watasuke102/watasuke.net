// BlogContent.css.ts
//
// CopyRight (c) 2021-2023 Watasuke
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import {color} from '@/common/color';
import {globalStyle, style} from '@vanilla-extract/css';

export const title = style({
  marginLeft: 4,
  borderBottom: `solid 5px ${color.p0}`,
});

export const date_container = style({
  display: 'flex',
  gap: 24,
  margin: '12px 0',
});

export const date = style({
  position: 'relative',
  display: 'flex',
  margin: 0,
  gap: 6,
  alignItems: 'center',
  ':hover': {
    cursor: 'pointer',
  },
});
globalStyle(`${date}:hover:after`, {
  content: 'attr(aria-label)',
  position: 'absolute',
  left: 0,
  bottom: '100%',
  minWidth: '100%',
  textAlign: 'center',
  padding: 4,
  backgroundColor: `${color.bg}aa`,
});
