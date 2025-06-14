// watasuke.net
// CopyRight (c) 2021-2025 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @watasuke1024
// This software is released under the MIT or MIT SUSHI-WARE License.
import {globalStyle, style} from '@vanilla-extract/css';
import {easing} from '@watasuke.net/common/src/easing';

export const container = style({});

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
