// watasuke.net
// CopyRight (c) 2021-2026 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @watasuke1024
// This software is released under the MIT or MIT SUSHI-WARE License.
import {globalStyle, style} from '@vanilla-extract/css';
import {color} from '@watasuke.net/common/style/color';
import {easing} from '@watasuke.net/common/style/easing';

const breakpoint = 'screen and (width > 1300px)';

export const container = style({
  '@media': {
    [breakpoint]: {
      display: 'grid',
      gridTemplateColumns: '1fr auto',
      gap: 20,
    },
  },
});

export const selected = style({
  display: 'flex',
  flexDirection: 'column',
  marginInline: 'auto',
  marginBottom: 24,
  width: 'min(100%, 900px)',
  height: 'fit-content',
  backgroundColor: `${color.bg}ee`,
  '@media': {
    [breakpoint]: {
      width: '100%',
      position: 'sticky',
      top: 16,
    },
  },
});
export const selected_presentation = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: 'min(100%, 900px)',
  aspectRatio: '16 / 9',
  border: `2pt solid ${color.fg}`,
  backgroundColor: `${color.bg}ee`,
  '@media': {
    [breakpoint]: {
      width: '100%',
    },
  },
});
globalStyle(`${selected} iframe`, {
  width: '100%',
  height: '100%',
});
export const selected_desc = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  marginInline: 'auto',
  minHeight: 68,
});

export const item_container = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(500px, 1fr))',
  gap: 24,
  '@media': {
    'screen and (width < 520px)': {
      display: 'flex',
      flexDirection: 'column',
    },
  },
});

export const item = style({
  display: 'flex',
  flexDirection: 'column',
  padding: 8,
  border: `2px solid ${color.p0}`,
  borderRadius: 2,
  textAlign: 'left',
  textDecoration: 'none',
  color: color.fg,
  backgroundColor: `${color.bg}ee`,
  boxShadow: '3px 3px 8px 3px #1117',
  transition: `color 0.2s, background-color 0.2s, transform .1s ${easing.out_circ.cubic_bezier}`,
  '@media': {
    '(hover: hover)': {
      ':hover': {
        transform: 'scale(0.985)',
      },
      ':active': {
        transform: 'scale(0.97)',
      },
    },
  },
});
export const item_active = style({
  color: color.bg,
  backgroundColor: color.p0,
  boxShadow: 'none',
});

export const item_title = style({
  fontSize: '1.4em',
  fontWeight: 'bold',
  textDecoration: 'underline',
});
export const item_desc = style({
  color: color.g3,
  whiteSpace: 'pre-wrap',
});
export const item_desc_selected = style({
  color: color.g0,
});
