// watasuke.net
// CopyRight (c) 2021-2025 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @watasuke1024
// This software is released under the MIT or MIT SUSHI-WARE License.
import {style} from '@vanilla-extract/css';
import {color} from '@watasuke.net/common/src/css/color';

export const container = style({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translateX(-50%) translateY(-50%)',
  maxWidth: 'calc(100% - 64px)',

  display: 'inline-grid',
  gridTemplateRows: '1fr auto',
  gap: 8,
});

export const qrcode_wrapper = style({
  position: 'relative',
  maxHeight: '60dvh',
  width: '100%',
  objectFit: 'contain',
});
export const qrcode_bg = style({
  position: 'absolute',
  left: '50%',
  transform: 'translateX(-50%)',
  display: 'block',
  height: '100%',
});
export const qrcode_img = style({
  position: 'relative',
  display: 'block',
  height: '100%',
  margin: 'auto',
  padding: 'min(10vw, 9vh)',
});

export const text = style({
  textAlign: 'center',
  fontSize: '2.9cqw',
  color: color.bg,
});
