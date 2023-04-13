// ImageViewer.css.ts
//
// CopyRight (c) 2021-2023 Watasuke
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT SUSHI-WARE License.
import {style} from '@vanilla-extract/css';

export const img_wrapper = style({
  width: '100%',
  height: '100%',
});

export const inline_img = style({
  ':hover': {
    cursor: 'zoom-in',
  },
});

export const dialog_img = style({
  objectFit: 'contain',
  width: '95%',
  height: '95%',

  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translateY(-50%) translateX(-50%)',
});

export const modal = style({
  zIndex: 9999,
  position: 'fixed',
  left: 0,
  top: 0,
  width: '100%',
  height: '100%',

  // reset
  border: 'none',
  padding: 'none !important',
  margin: 'none !important',

  backgroundColor: '#000000cc',

  ':hover': {
    cursor: 'zoom-out',
  },
});
