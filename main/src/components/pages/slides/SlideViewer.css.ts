// watasuke.net
// CopyRight (c) 2021-2026 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @watasuke1024
// This software is released under the MIT or MIT SUSHI-WARE License.
import {globalStyle, style} from '@vanilla-extract/css';
import {color} from '@watasuke.net/common/style/color';

export const container = style({
  display: 'grid',
  gridTemplateRows: '1fr 32px',
  width: '100%',
  height: '100%',
});

export const svg_viewer = style({
  position: 'relative',
});
globalStyle(`${svg_viewer} img`, {
  position: 'absolute',
  top: 0,
  left: 0,
  userSelect: 'none',
  width: '100%',
  height: '100%',
});

export const bottom = style({
  display: 'flex',
  alignItems: 'center',
  gap: 12,
  color: color.bg,
  backgroundColor: color.fg,
});
export const index_text = style({
  fontWeight: 'bold',
});
export const button = style({
  height: '100%',
  border: 'none',
  ':disabled': {
    color: color.g2,
  },
});
