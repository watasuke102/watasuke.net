// watasuke.net
// CopyRight (c) 2021-2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import {style, globalStyle} from '@vanilla-extract/css';
import {color} from '@watasuke.net/common/src/css/color';

globalStyle('.gatsby-image-wrapper [data-main-image]', {
  transition: 'none !important',
});

export const container = style({
  width: '95%',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translateX(-50%) translateY(-50%)',
});

export const icon_and_name = style({
  width: 350,
  margin: 'auto',
  textAlign: 'center',
});

export const welcome = style({
  margin: 0,
});

export const menu = style({
  display: 'flex',
  justifyContent: 'space-around',
  marginTop: '10%',

  '@media': {
    'screen and (max-width: 750px)': {
      display: 'grid',
      width: '100%',
      // MenuCardのwidthが180px
      gridTemplateColumns: '180px 180px',
      justifyContent: 'space-around',
    },
  },
});

const translate_time = 0.2;
export const menu_card = style({
  width: 180,
  padding: '16px 24px',
  border: `2px solid ${color.transparent}`,
  borderRadius: 0,
  textAlign: 'center',
  textDecoration: 'none',

  ':hover': {
    color: color.p0,
  },
  ':focus': {
    outline: 'none',
    borderColor: color.fg,
  },

  '@media': {
    '(prefers-reduced-motion: no-preference)': {
      transition: `transform ${translate_time}s`,
      ':hover': {
        textDecoration: 'underline',
        transform: 'scale(111%)',
        transition: `transform ${translate_time}s`,
      },
    },
  },
});

export const menu_card_text = style({
  display: 'block',
  fontSize: '1.8em',
  fontWeight: 'bold',
  color: color.p0,
  wordBreak: 'keep-all',
});

export const menu_card_icon = style({
  color: color.fg,
  width: 80,
  margin: 'auto',
  paddingBottom: 12,
  transition: `color ${translate_time}s`,

  selectors: {
    [`${menu_card}:hover > &`]: {
      color: '#ffffff',
      transition: `color ${translate_time}`,
    },
  },
});
globalStyle(`${menu_card_icon} svg`, {
  width: '100%',
  height: '100%',
});
