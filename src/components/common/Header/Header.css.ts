// Header.css.ts
//
// CopyRight (c) 2021-2023 Watasuke
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT SUSHI-WARE License.
import {color} from '@/common/color';
import {style} from '@vanilla-extract/css';

export const container = style({
  zIndex: 512,
  display: 'flex',
  justifyContent: 'space-around',
  position: 'fixed',
  alignItems: 'center',
  top: 0,
  left: 0,
  height: 50,
  padding: 10,
  marginBottom: 16,
  width: '100vw',
  fontSize: '1.1em',

  backgroundColor: `${color.bg}80`,
  backdropFilter: 'blur(3px)',
  borderBottom: `dotted 1px ${color.fg}`,

  // a {
  //   color: color.$fg,
  // }
  '@media': {
    'screen and (max-width: 550px)': {
      display: 'block',
      height: 88,
    },
  },
});

export const site_name = style({
  color: color.fg,
  fontWeight: 'bold',
  textDecoration: 'none',
});

export const title = style({
  whiteSpace: 'nowrap',
  fontSize: '1.7em',
  marginLeft: 10,
  '@media': {
    'screen and (max-width: 550px)': {
      width: '100%',
    },
  },
});

export const link_container = style({
  width: '60%',
  display: 'flex',
  justifyContent: 'space-around',
  '@media': {
    'screen and (max-width: 550px)': {
      width: '100%',
    },
  },
});

export const links = style({
  color: color.fg,
  fontSize: '1.1em',
});
