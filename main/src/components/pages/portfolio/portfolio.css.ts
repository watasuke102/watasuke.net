// watasuke.net
// CopyRight (c) 2021-2025 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @watasuke1024
// This software is released under the MIT or MIT SUSHI-WARE License.
import {style} from '@vanilla-extract/css';

export const container = style({
  padding: 12,
  width: '100%',
  overflowX: 'hidden',
  minHeight: '100dvh',
});

export const cutin_animation = style({
  zIndex: 65535,
  position: 'fixed',
  width: '100dvw',
  height: '100dvh',
  top: 0,
  left: 0,
});
