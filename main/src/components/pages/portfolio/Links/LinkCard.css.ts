// watasuke.net
// CopyRight (c) 2021-2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import {globalStyle, style} from '@vanilla-extract/css';
import {color} from '@watasuke.net/common';

export const container = style({
  margin: '0 auto',
  padding: '12px 4px',
  borderRadius: 4,
  color: color.fg,
  backgroundColor: `${color.bg}e6`,
  textDecoration: 'none',

  display: 'grid',
  width: '100%',
  gridTemplateRows: 'auto 1fr',
  gridTemplateColumns: '120px 1fr',

  ':hover': {
    textDecoration: 'none',
  },

  '@media': {
    'screen and (max-width: 550px)': {
      gridTemplateColumns: '80px 1fr',
    },
  },
});

export const icon = style({
  position: 'relative',
  gridRow: '1 / 3',
  textAlign: 'center',
  width: '100%',
  height: '100%',

  '@media': {
    'screen and (max-width: 550px)': {
      gridRow: '1 / 2',
    },
  },
});
globalStyle(`${icon} svg`, {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translateY(-50%) translateX(-50%)',
  display: 'block',
  height: 48,
  margin: 'auto',
  '@media': {
    'screen and (max-width: 550px)': {
      width: 32,
      height: 32,
    },
  },
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
  color: `rgba(${color.fg}, 0.8)`,
  '@media': {
    'screen and (max-width: 550px)': {
      gridColumn: '1 / 3',
      padding: '8px 12px',
    },
  },
});
