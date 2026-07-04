// watasuke.net
// CopyRight (c) 2021-2026 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @watasuke1024
// This software is released under the MIT or MIT SUSHI-WARE License.
import {style} from '@vanilla-extract/css';
import {easing} from '@watasuke.net/common/style/easing';
import {color} from '@watasuke.net/common/style/color';

export const root = style({
  marginTop: 12,
});

export const header = style({
  display: 'flex',
  gap: '8px',
  marginBottom: 8,
});
export const header_button = style({
  padding: '0 8px',
  borderRadius: 3,
  borderWidth: 2,
  borderStyle: 'solid',
  borderColor: color.fg,
  fontWeight: 'bold',
});
export const header_button_selected = style({
  color: color.bg,
  backgroundColor: color.p0,
  borderColor: 'transparent',
});

export const container = style({
  display: 'flex',
  gap: 8,
  width: '95vw',
  overflowX: 'scroll',
  scrollbarWidth: 'thin',
  scrollbarGutter: 'stable',
});

export const item = style({
  width: 300,
  flex: '0 0 300px',
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
  padding: 8,
  marginBottom: 8,
  border: `2px solid ${color.fg}`,
  borderRadius: 2,
  textDecoration: 'none',
  ':hover': {
    textDecoration: 'none',
  },

  position: 'relative',
  '::before': {
    content: '',
    position: 'absolute',
    top: 0,
    left: 0,
    display: 'block',
    width: '100%',
    height: '100%',
    backgroundColor: `${color.fg}`,
    opacity: 0.1,
    transition: `transform .4s ${easing.out_circ.cubic_bezier}`,
    transform: 'scaleY(0)',
    transformOrigin: 'top',
  },
  '@media': {
    '(hover: hover)': {
      selectors: {
        '&:hover::before': {
          transform: 'scaleY(1)',
          transformOrigin: 'bottom',
        },
      },
    },
  },
});
export const item_title = style({
  fontWeight: 'bold',
  fontSize: '1.2em',
  paddingBottom: 1,
  borderBottom: `2px solid ${color.p0}`,
  '@media': {
    '(hover: hover)': {
      selectors: {
        [`${item}:hover > &`]: {
          textDecoration: 'underline',
        },
      },
    },
  },
});
export const item_tldr = style({
  color: color.fg,
  textDecoration: 'none',
});
