// watasuke.net
// CopyRight (c) 2021-2025 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @watasuke1024
// This software is released under the MIT or MIT SUSHI-WARE License.
import {style} from '@vanilla-extract/css';
import {color} from '@watasuke.net/common/src/css/color';

export const container = style({
  width: '100dvw',
  overflowX: 'hidden',
  height: '100dvh',
  backgroundColor: color.p0,
});

export const cutin_animation = style({
  zIndex: 65535,
  position: 'fixed',
  width: '100dvw',
  height: '100dvh',
  top: 0,
  left: 0,
  backgroundColor: color.bg,
});
