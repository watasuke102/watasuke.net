// watasuke.net
// CopyRight (c) 2021-2025 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @watasuke1024
// This software is released under the MIT or MIT SUSHI-WARE License.
import {globalStyle, style} from '@vanilla-extract/css';
import {color} from '@watasuke.net/common/src/css/color';

const tabbar_height = 30;
export const container = style({
  position: 'relative',
  width: '90%',
  padding: 12,
  paddingTop: tabbar_height + 4,
  marginTop: 24,
  marginBottom: 64,
  marginInline: 'auto',
  borderRadius: 4,
  backgroundColor: color.code_bg,
  filter: `drop-shadow(1px 1px 4px ${color.fg}88)`,
});
globalStyle(`${container} p`, {
  margin: 0,
});

export const tabbar = style({
  position: 'absolute',
  left: 0,
  top: 0,
  width: '100%',
  height: tabbar_height,
  paddingInline: 8,
  display: 'flex',
  justifyContent: 'left',
  alignItems: 'center',
  gap: 12,
  border: `1px solid ${color.fg}`,
  fontSize: '0.9em',
});
export const tabbar_button = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '60%',
  aspectRatio: '1 / 1',
  padding: 1,
  borderRadius: '60%',
  color: color.bg,
  ':hover': {
    cursor: 'not-allowed',
  },
});
export const tabbar_close_button = style({
  backgroundColor: color.red,
});
export const tabbar_minimize_button = style({
  backgroundColor: color.yellow,
});
export const tabbar_expand_button = style({
  backgroundColor: color.p0,
});
export const minimize_button_icon = style({
  width: '70%',
  height: 1.6,
  backgroundColor: color.bg,
});

export const host = style({
  color: color.blue,
});
export const command = style({
  color: color.p0,
  fontWeight: 'bold',
});
