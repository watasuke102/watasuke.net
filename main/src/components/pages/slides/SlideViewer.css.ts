// watasuke.net
// CopyRight (c) 2021-2026 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @watasuke1024
// This software is released under the MIT or MIT SUSHI-WARE License.
import {globalStyle, style} from '@vanilla-extract/css';
import {color} from '@watasuke.net/common/style/color';

export const container = style({
  position: 'relative',
  display: 'grid',
  gridTemplateRows: '1fr 32px',
  width: '100%',
  height: '100%',
});

export const svg_viewer = style({
  position: 'relative',
  backgroundColor: '#000',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
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

export const jump_to_overlay = style({
  position: 'absolute',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: `${color.fg}88`,
});
export const jump_to = style({
  paddingInline: 12,
  fontSize: '3.5em',
  fontWeight: 'bold',
  backgroundColor: `${color.bg}`,
  boxShadow: '0px 0px 10px 4px #0005',
});
