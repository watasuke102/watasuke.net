// watasuke.net
// CopyRight (c) 2021-2026 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @watasuke1024
// This software is released under the MIT or MIT SUSHI-WARE License.
import {style} from '@vanilla-extract/css';
import {easing} from '@watasuke.net/common/style/easing';
import {color} from '@watasuke.net/common/style/color';

export const wrapper = style({
  width: '100%',
  height: '100dvh',
  overflow: 'hidden',
  display: 'flex',
  justifyContent: 'center',
  alignContent: 'center',
  flexWrap: 'wrap', // align-content does not take effect without this
});

export const main_contents = style({
  width: '80%',
  display: 'flex',
  flexDirection: 'column',
  rowGap: 40,
});
export const welcome_area = style({
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'center',
  gap: 4,
});

const hoverAnimationDuration = '.3s';
export const links = style({
  display: 'flex',
  gap: 8,
  flexWrap: 'wrap',
  justifyContent: 'space-around',
  '@media': {
    'screen and (width < 440px)': {
      flexDirection: 'column',
    },
  },
});
const skew_func = 'skewX(-8deg)';
export const links_item = style({
  display: 'grid',
  gridTemplateRows: '100px auto',
  alignItems: 'center',
  textAlign: 'center',
  padding: '4px 8px',
  backgroundColor: `${color.bg}aa`,
  borderRadius: 4,
  boxShadow: `4px 4px 6px 2px #1f1f1f`,

  position: 'relative',
  overflow: 'hidden',
  '::before': {
    zIndex: 4,
    content: '',
    position: 'absolute',
    top: 0,
    left: -26,
    display: 'block',
    width: '132%',
    height: '100%',
    padding: '4px 8px',
    backgroundColor: `${color.fg}`,
    transition: `transform ${hoverAnimationDuration} ${easing.out_circ.cubic_bezier}`,
    transform: `${skew_func} scaleX(0)`,
    transformOrigin: 'right',
  },
  transition: `color ${hoverAnimationDuration}`,
  '@media': {
    '(hover: hover)': {
      ':hover': {
        color: color.bg,
      },
      selectors: {
        '&:hover::before': {
          transform: `${skew_func} scaleX(1)`,
          transformOrigin: 'left',
        },
      },
    },
    'screen and (width < 460px)': {
      gridTemplateRows: '1fr',
      gridTemplateColumns: `48px  1fr`,
    },
  },
});
export const links_item_icon = style({
  zIndex: 4,
  width: '100%',
  height: '100%',
  transition: `color ${hoverAnimationDuration}`,
  color: color.fg,
  '@media': {
    '(hover: hover)': {
      selectors: {
        [`${links_item}:hover &`]: {
          color: color.bg,
        },
      },
    },
  },
});
export const links_item_text = style({
  zIndex: 4,
  fontSize: '1.5em',
});
