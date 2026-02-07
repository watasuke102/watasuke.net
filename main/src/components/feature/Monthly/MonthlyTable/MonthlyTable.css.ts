// watasuke.net
// CopyRight (c) 2021-2026 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @watasuke1024
// This software is released under the MIT or MIT SUSHI-WARE License.
import {style} from '@vanilla-extract/css';
import {color} from '@watasuke.net/common/src/css/color';

export const root = style({
  marginTop: 12,
});

export const header = style({
  display: 'flex',
  gap: '8px',
  marginBottom: 8,
});
export const header_button = style({
  padding: '0 8px',
  borderRadius: 3,
  borderWidth: 2,
  borderStyle: 'solid',
  borderColor: color.fg,
  fontWeight: 'bold',
});
export const header_button_selected = style({
  color: color.bg,
  backgroundColor: color.p0,
  borderColor: 'transparent',
});

export const container = style({
  display: 'flex',
  gap: 8,
  width: '95vw',
  overflowX: 'scroll',
  scrollbarWidth: 'thin',
  scrollbarGutter: 'stable',
});

export const item = style({
  width: 300,
  flex: '0 0 300px',
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
  padding: 8,
  marginBottom: 8,
  border: `2px solid ${color.fg}`,
  borderRadius: 2,
  textDecoration: 'none',
});
export const item_title = style({
  fontWeight: 'bold',
  fontSize: '1.2em',
  paddingBottom: 1,
  borderBottom: `2px solid ${color.p0}`,
});
export const item_tldr = style({
  color: color.fg,
  textDecorationColor: color.fg,
});
