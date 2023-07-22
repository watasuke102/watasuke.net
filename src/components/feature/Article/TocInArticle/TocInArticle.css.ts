// TocInArticle.css.ts
//
// CopyRight (c) 2021-2023 Watasuke
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import {color} from '@/common/color';
import {style} from '@vanilla-extract/css';

export const container = style({
  margin: '28px 0',
  // padding: '12px 20px',
  backgroundColor: color.bg,
  fontSize: '1.2em',
});

export const top_items = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  '::after': {
    content: '',
  },
});

const button_size = 40;
export const close_button = style({
  width: button_size,
  height: button_size,
  color: color.bg,
  backgroundColor: color.fg,
  textAlign: 'center',
  ':hover': {
    cursor: 'pointer',
  },
});

export const heading = style({
  fontSize: '1.9em',
  margin: '8px 0',
  textAlign: 'center',
});

export const toc = style({
  paddingLeft: '12px',
  border: '1px solid',
});

const padding = 8;
export const list_wrapper = style({
  paddingTop: padding,
  paddingBottom: padding,
  margin: 0,
});
