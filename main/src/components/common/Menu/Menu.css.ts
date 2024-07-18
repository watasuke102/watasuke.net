// watasuke.net
// CopyRight (c) 2021-2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import {ComplexStyleRule, style} from '@vanilla-extract/css';
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
});

export const menu = style({
  position: 'absolute',
  minWidth: 440,
  bottom: 32,
  right: 32,
  overflow: 'hidden',
  textAlign: 'center',
  backgroundColor: `${color.bg}e9`,
  borderStyle: 'solid',
  borderWidth: 2,

  '@media': {
    'screen and (width < 550px)': {
      right: -24,
      bottom: -44,
      width: '100dvw',
      borderWidth: '2px 0 0 0',
    },
  },
});
export const menu_inner = style({
  paddingInline: 16,
  paddingTop: 8,
  paddingBottom: 40,

  display: 'grid',
  gridTemplateRows: '1fr repeat(3, auto)',

  '@media': {
    'screen and (width < 550px)': {
      paddingBottom: 120,
    },
  },
});

export const heading = style({
  fontSize: '1.5em',
  marginBottom: 0,
});
export const menu_button = style({
  paddingBlock: 6,
  borderRadius: 4,
  boxShadow: '4px 4px 6px 2px #1a1a1a',
  borderColor: color.fg,
  transitionProperty: 'background-color',
  transitionDuration: '0.2s',
  ':hover': {
    transitionProperty: 'background-color',
    transitionDuration: '0.2s',
    backgroundColor: `${color.p0}33`,
  },
});

const animation: ComplexStyleRule = {
  transitionDuration: '0.4s',
  transitionProperty: 'transform, top, background-color',
  transitionTimingFunction: 'cubic-bezier(0.075, 0.82, 0.165, 1)',
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
    transitionProperty: 'transform, top',
    ...animation,
  },
  '::after': {
    top: 0,
    transform: 'rotate(45deg)',
    transitionProperty: 'transform, top',
    ...animation,
  },
});
