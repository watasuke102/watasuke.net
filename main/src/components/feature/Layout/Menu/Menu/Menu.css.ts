// watasuke.net
// CopyRight (c) 2021-2026 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @watasuke1024
// This software is released under the MIT or MIT SUSHI-WARE License.
import {ComplexStyleRule, style} from '@vanilla-extract/css';
import {easing} from '@watasuke.net/common/src/easing';
import {color} from '@watasuke.net/common/src/css/color';

export const container = style({
  zIndex: 4096,
  display: 'inline-block',
  position: 'sticky',
  bottom: 52,
  // right is not available (why?)
  left: '98%',
  transform: 'translateX(-24px)',
});

export const menu_opener = style({
  position: 'absolute',
  bottom: 0,
  right: 0,
  width: '4rem',
  height: '4rem',
  aspectRatio: '1 / 1',
  padding: '12px 12px',
  border: 'none',
  borderRadius: 8,
  color: color.bg,
  backgroundColor: color.p0,
  boxShadow: '2px 3px 16px 4px #111d',
  ':focus': {
    outline: 'none',
  },

  overflow: 'hidden',
  transition: `transform 0.3s ${easing.out_expo.cubic_bezier}, filter 0.5s ease-out, box-shadow 0.4s ease-out`,
  '::before': {
    content: '',
    display: 'block',
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: 0,
    height: 0,
    borderRadius: '100%',
    backgroundColor: '#fff',
    opacity: 0.3,
    transform: 'translate(-50%, -50%)',
    transitionProperty: 'width, height',
    transitionDuration: '.4s',
    transitionTimingFunction: easing.out_circ.cubic_bezier,
  },
  '@media': {
    '(hover: hover)': {
      ':hover': {
        transform: 'scale(1.15)',
      },
      selectors: {
        '&:hover::before': {
          width: '130%',
          height: '130%',
          transform: 'translate(-50%, -50%)',
        },
      },
      // when button is being pressed on desktop
      // scale() is already applied by :hover, so `!important` is needed to override it
      ':active': {
        transform: 'scale(1.05) !important',
      },
    },
  },
  ':active': {
    filter: 'brightness(75%)',
    boxShadow: 'none',
    // when button is being pressed on smartphone
    transform: 'scale(0.9)',
  },
});

export const menu = style({
  position: 'absolute',
  minWidth: 440,
  maxHeight: '80dvh',
  bottom: 32,
  right: 32,
  overflow: 'hidden',
  textAlign: 'center',
  backgroundColor: `${color.bg}e9`,
  borderStyle: 'solid',
  borderWidth: 2,

  display: 'grid',
  // use grid as padding
  // because using padding normally cause weird animation
  gridTemplateColumns: '16px 1fr 16px',
  gridTemplateRows: '8px auto 1fr repeat(6, auto) 40px',

  '@media': {
    'screen and (width < 550px)': {
      gridTemplateRows: '16px auto 1fr repeat(6, auto) 140px',
      right: -24,
      bottom: -64,
      width: '100dvw',
      borderWidth: '2px 0 0 0',
    },
  },
});
export const padding_top = style({
  gridColumn: '1 / 4',
  gridRow: '1 / 2',
});
export const padding_left = style({
  gridColumn: '1 / 2',
  gridRow: '1 / 10',
});
export const padding_right = style({
  gridColumn: '3 / 4',
  gridRow: '1 / 10',
});

const animation: ComplexStyleRule = {
  transitionDuration: '0.4s',
  transitionProperty: 'transform, top, background-color',
  transitionTimingFunction: `${easing.out_circ.cubic_bezier}`,
};
const bar_style: ComplexStyleRule = {
  content: '',
  display: 'block',
  width: '100%',
  height: 5,
  backgroundColor: color.bg,
  ...animation,
};
export const icon = style({
  ...bar_style,
  position: 'relative',
  '::before': {
    ...bar_style,
    position: 'absolute',
    top: -14,
  },
  '::after': {
    ...bar_style,
    position: 'absolute',
    top: 14,
  },
});
export const icon_opening = style({
  background: `${color.bg}00`,
  ...animation,
  '::before': {
    top: 0,
    transform: 'rotate(-45deg)',
    ...animation,
  },
  '::after': {
    top: 0,
    transform: 'rotate(45deg)',
    ...animation,
  },
});
