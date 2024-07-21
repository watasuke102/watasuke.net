// watasuke.net
// CopyRight (c) 2021-2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import {header_height} from '../portfolio.css';
import {globalStyle, keyframes, style} from '@vanilla-extract/css';
import {color} from '@watasuke.net/common/src/css/color';

export const container = style({
  width: '100%',
  minHeight: `calc(100dvh - ${header_height}px)`,
  color: color.bg,
  backgroundColor: color.p0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const greeting = style({
  textAlign: 'center',
  marginBottom: 16,
});

export const avatar_and_name = style({
  display: 'grid',
  gridTemplateColumns: 'auto auto',
  gap: 24,
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: 64,

  '@media': {
    'screen and (max-width: 600px)': {
      position: 'static',
      transform: 'none',
      display: 'flex',
      gap: 0,
      flexDirection: 'column',
    },
  },
});
export const avatar = style({
  '@media': {
    'screen and (max-width: 600px)': {
      margin: 'auto',
    },
  },
});

export const name_main = style({
  fontWeight: 'bold',
  fontSize: '3.5em',
  marginBottom: -12,
  marginLeft: -4,
});
export const name_sub = style({
  fontSize: '1.5em',
});
export const icon_and_text = style({
  display: 'grid',
  gridTemplateColumns: '24px 1fr',
  gap: 12,
  marginBottom: 4,
  fontSize: '1.1em',
});

export const next_page = style({
  position: 'absolute',
  left: '50%',
  bottom: 48,
  textAlign: 'center',
  transform: 'translateX(-50%)',

  '::after': {
    content: '',
    display: 'block',
    width: 50,
    height: 50,
    borderRight: `2px solid ${color.bg}`,
    borderBottom: ` 2px solid ${color.bg}`,
    transform: 'rotate(45deg)',
  },
  animation: '5s infinite ease-in-out',
  // transform is already used; use `bottom` instead
  animationName: keyframes({
    '0%': {
      bottom: 32,
    },
    '50%': {
      bottom: 44,
      opacity: 0.5,
    },
    '100%': {
      bottom: 32,
    },
  }),
});
globalStyle(`${next_page} > span`, {
  marginTop: 30,
});
