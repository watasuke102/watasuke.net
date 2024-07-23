// watasuke.net
// CopyRight (c) 2021-2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import {globalStyle, style} from '@vanilla-extract/css';
import {color} from '@watasuke.net/common/src/css/color';

export const skillcard = style({
  padding: '8px 16px',
  color: color.fg,
  backgroundColor: color.bg,
  border: `3px solid ${color.blue}`,
  borderRadius: 2,

  display: 'grid',
  gridTemplateColumns: '1fr auto',
  gridTemplateRows: 'auto 1fr',
  '@media': {
    'screen and (max-width: 550px)': {
      gridTemplateColumns: 'auto auto',
      gridTemplateRows: 'auto auto 1fr',
    },
  },
});

export const name = style({
  fontSize: '1.5em',
  fontWeight: 'bold',
  marginBottom: '8px',
  '@media': {
    'screen and (max-width: 550px)': {
      gridRow: '1 / 2',
      marginBottom: 0,
    },
  },
});

export const right = style({
  margin: 'auto',
  '@media': {
    'screen and (max-width: 550px)': {
      gridRow: '2 / 3',
      margin: '4px 0',
    },
  },
});

export const category = style({
  border: `1px solid ${color.fg}`,
  padding: '2px 8px',
  margin: '0 12px',
  '@media': {
    'screen and (max-width: 550px)': {
      marginLeft: 0,
    },
  },
});

export const tier = style({
  fontSize: '1.2em',
  fontWeight: 'bold',
  '::before': {
    fontSize: '0.7em',
    color: `rgba(${color.fg}, 0.8)`,
    content: 'tier ',
  },
});

export const desc = style({
  whiteSpace: 'pre-wrap',
  fontSize: '0.9em',
  color: `rgba(${color.fg}, 0.7)`,
  '@media': {
    'screen and (max-width: 550px)': {
      gridColumn: '1 / 3',
    },
  },
});

export const icon = style({
  padding: 8,
  marginLeft: 'auto',
  width: 80,
  height: 80,
  '@media': {
    'screen and (max-width: 550px)': {
      width: 64,
      height: 64,
      gridRow: '1 / 3',
      gridColumn: '2 / 3',
    },
  },
});
globalStyle(`${icon} svg`, {
  width: '100%',
  height: '100%',
});
