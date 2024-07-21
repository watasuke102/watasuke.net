// watasuke.net
// CopyRight (c) 2021-2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import {style} from '@vanilla-extract/css';
import {color} from '@watasuke.net/common/src/css/color';

export const container = style({
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  height: 50,
  padding: 10,
  width: '100%',
  overflow: 'hidden',
  fontSize: '1.1em',
  borderBottom: `dotted 1px ${color.fg}`,

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
