// watasuke.net
// CopyRight (c) 2021-2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import {globalStyle, style} from '@vanilla-extract/css';
import {color} from '@watasuke.net/common/src/css/color';

export const outer = style({
  borderRadius: 4,
  color: color.fg,
  backgroundColor: `${color.bg}e6`,
  textDecoration: 'none',
  border: `3px solid ${color.yellow}`,
  ':hover': {
    textDecoration: 'none',
  },
});

export const inner = style({
  height: '100%',
  paddingBlock: 8,
  display: 'grid',
  gridTemplateRows: 'auto 1fr',
  gridTemplateColumns: '92px auto',
});

export const icon = style({
  position: 'relative',
  gridRow: '1 / 3',
  textAlign: 'center',
  width: '100%',
  height: '100%',
});
globalStyle(`${icon} svg`, {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translateY(-50%) translateX(-50%)',
  display: 'block',
  height: 48,
  margin: 'auto',
});

export const head = style({
  gridColumn: 2,
  fontSize: '1.3em',
  fontWeight: 'bold',
  textDecoration: 'underline',
});

export const desc = style({
  gridRow: 2,
  gridColumn: 2,
  whiteSpace: 'pre-wrap',
  color: `rgba(${color.fg}, 0.8)`,
});
