// watasuke.net
// CopyRight (c) 2021-2025 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @watasuke1024
// This software is released under the MIT or MIT SUSHI-WARE License.
import {globalStyle, style} from '@vanilla-extract/css';
import {color} from '@watasuke.net/common/src/css/color';

export const container = style({
  margin: '28px 0',
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
  position: 'relative',
  width: button_size,
  height: button_size,
  border: 'none',
  color: color.bg,
  backgroundColor: color.fg,
  textAlign: 'center',
  ':hover': {
    cursor: 'pointer',
  },
});
export const button_icon = style({
  // prevent outline size change
  position: 'absolute',
  left: 0,
  top: 0,
  width: button_size,
  height: button_size,
});

export const heading = style({
  fontSize: '1.9em',
  margin: '8px 0',
  textAlign: 'center',
});

export const toc = style({
  padding: '8px 20px',
  border: '1px solid',
});

const padding = 8;
export const list_wrapper = style({
  paddingTop: padding,
  paddingBottom: padding,
  margin: 0,
});
globalStyle(`${list_wrapper} li`, {
  listStyleType: 'decimal',
});
