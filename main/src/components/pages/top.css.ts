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
const breakpoint = 'screen and (width < 430px)';
export const links = style({
  display: 'grid',
  columnGap: 12,
  rowGap: 16,
  gridTemplateColumns: 'repeat(auto-fit, minmax(164px, 1fr))',
  justifyContent: 'space-around',
});
export const primary_links = style({
  '@media': {
    [breakpoint]: {
      width: 'fit-content',
      margin: 'auto',
      gridTemplateColumns: '1fr',
    },
  },
});
const skew_func = 'skewX(-8deg)';
export const links_item = style({
  display: 'grid',
  gridTemplateRows: '1fr',
  gridTemplateColumns: `48px 1fr`,
  alignItems: 'center',
  textAlign: 'center',
  padding: '4px 8px',
  backgroundColor: `${color.bg}aa`,
  borderRadius: 4,
  boxShadow: `4px 4px 6px 2px #1f1f1f`,
  border: `1px solid ${color.fg}1b`,

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
  // base.css sets only color to a:hover.transition
  transition: `color ${hoverAnimationDuration}, transform .1s ${easing.out_circ.cubic_bezier} !important`,
  '@media': {
    [breakpoint]: {
      textAlign: 'left',
    },
    '(hover: hover)': {
      ':hover': {
        color: color.bg,
        transform: 'scale(0.97)',
      },
      ':active': {
        transform: 'scale(0.94)',
      },
      selectors: {
        '&:hover::before': {
          transform: `${skew_func} scaleX(1)`,
          transformOrigin: 'left',
        },
      },
    },
  },
});
export const primary_item = style({
  gridTemplateRows: '120px auto',
  gridTemplateColumns: '1fr',
  gap: 4,
  '@media': {
    [breakpoint]: {
      gridTemplateRows: '1fr',
      gridTemplateColumns: `56px 1fr`,
      gap: 16,
    },
  },
});
export const secondary_item = style({
  gridTemplateRows: '1fr',
  gridTemplateColumns: `36px 1fr`,
  gap: 12,
  '@media': {
    [breakpoint]: {
      gridTemplateRows: '1fr',
      gridTemplateColumns: `28px 1fr`,
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
});
export const primary_item_text = style({
  fontSize: '2.1em',
  fontWeight: 'bold',
  '@media': {
    [breakpoint]: {
      fontSize: '2.0em',
    },
  },
});
export const secondary_item_text = style({
  fontSize: '1.5em',
  '@media': {
    [breakpoint]: {
      fontSize: '1.25em',
    },
  },
});
