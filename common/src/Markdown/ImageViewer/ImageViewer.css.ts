// watasuke.net > common
// CopyRight (c) 2021-2025 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @watasuke1024
// This software is released under the MIT or MIT SUSHI-WARE License.
import {keyframes, style} from '@vanilla-extract/css';

export const img_wrapper = style({
  width: '100%',
  height: '100%',
});

export const inline_img = style({
  ':hover': {
    cursor: 'zoom-in',
  },
});

const fadein = keyframes({
  from: {
    opacity: 0,
  },
  to: {
    opacity: 1,
  },
});
export const modal_overlay = style({
  zIndex: 40960,
  position: 'fixed',
  inset: 0,
  backgroundColor: '#000000cc',
  animation: `${fadein} 0.2s linear`,
});
export const modal_content = style({
  zIndex: 40961,
  position: 'fixed',
  inset: 0,
  padding: 24,
  ':hover': {
    cursor: 'zoom-out',
  },
  animation: `${fadein} 0.2s linear`,
});

export const dialog_img = style({
  objectFit: 'contain',
  width: '100%',
  height: '100%',
});
