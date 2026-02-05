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
  bottom: 44,
  // right is not available (why?)
  left: '100%',
  transform: 'translateX(-24px)',
});

export const menu_opener = style({
  position: 'absolute',
  bottom: 0,
  right: 0,
  width: 56,
  height: 56,
  aspectRatio: '1 / 1',
  padding: '12px 12px',
  border: 'none',
  borderRadius: 12,
  color: color.bg,
  backgroundColor: color.p0,
  boxShadow: '2px 3px 16px 4px #111d',
  ':focus': {
    outline: 'none',
  },
  ':active': {
    transitionDuration: '0.2s',
    filter: 'brightness(75%)',
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
