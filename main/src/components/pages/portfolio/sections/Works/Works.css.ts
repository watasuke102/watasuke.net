// watasuke.net
// CopyRight (c) 2021-2025 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @watasuke1024
// This software is released under the MIT or MIT SUSHI-WARE License.
import {globalStyle, keyframes, style} from '@vanilla-extract/css';
import {easing} from '@watasuke.net/common/src/easing';
import {color} from '@watasuke.net/common/src/css/color';

export const container = style({
  marginInline: 32,
  marginBottom: 16,
});

export const category_section = style({
  border: 'none !important',
});
globalStyle(`${container} details::details-content`, {
  overflowY: 'clip',
  height: 0,
  transitionProperty: 'height, content-visibility',
  transitionDuration: '0.3s',
  transitionTimingFunction: easing.out_expo.cubic_bezier,
  transitionBehavior: 'allow-discrete',
});
globalStyle(`${container} details[open]::details-content`, {
  height: 'auto',
});

export const grid_view = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
  gap: 12,
  margin: 0,
  width: '100%',
});

export const classname_for_jumped_from_history = 'jumped_from_history';
const target_keyframes = keyframes({
  '0%': {
    borderColor: color.transparent,
  },
  '50%': {
    borderColor: color.p0,
  },
  '100%': {
    borderColor: color.transparent,
  },
});
globalStyle(`${grid_view} .${classname_for_jumped_from_history}`, {
  border: '2px solid',
  animationName: target_keyframes,
  animationDuration: '0.25s',
  animationIterationCount: 3,
  animationTimingFunction: 'step-start',
  animationFillMode: 'forwards',
});

export const item = style({
  display: 'grid',
  gridTemplateRows: '140px auto auto auto',
  padding: 0,
  textAlign: 'left',
  borderRadius: 10,
  border: `2px solid ${color.g0}`,
  backgroundColor: color.g0,
  ':hover': {
    cursor: 'pointer',
  },
});

export const img_wrapper = style({
  borderTopLeftRadius: 10,
  borderTopRightRadius: 10,
  overflow: 'hidden',
});
export const item_thumbnail = style({
  width: '100%',
  objectFit: 'cover',
  userSelect: 'none',
});
export const dummy_img = style({
  width: '100%',
  height: '100%',
  backgroundColor: color.bg,
});

export const properties = style({
  display: 'grid',
  gridRow: '2 / 5',
  gridTemplateRows: 'subgrid',
  paddingInline: 6,
  paddingBottom: 12,
});
export const property_title = style({
  fontSize: '1.2em',
  fontWeight: 'bold',
});

export const multiselect = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '4px',
  marginTop: '4px',
});
export const multiselect_item = style({
  fontSize: '0.8em',
  fontWeight: 'bold',
  padding: '0 4px',
  color: color.g0,
  borderRadius: 3,
});
export const multiselect_green = style({
  backgroundColor: color.p0,
});
export const multiselect_blue = style({
  backgroundColor: color.blue,
});
export const multiselect_cyan = style({
  backgroundColor: color.cyan,
});
export const multiselect_purple = style({
  backgroundColor: color.purple,
});
export const multiselect_gray = style({
  backgroundColor: color.g3,
});
export const multiselect_soundcloud = style({
  backgroundColor: color.brand.soundcloud,
});
