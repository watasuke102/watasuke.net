// watasuke.net
// CopyRight (c) 2021-2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import {globalStyle, style} from '@vanilla-extract/css';
import {color} from '@watasuke.net/common/src/css/color';

export const bio = style({
  position: 'relative',
  display: 'block',
  width: '90dvw',
  textAlign: 'center',
  margin: 'auto',
});
globalStyle(`${bio} p`, {
  marginBottom: 4,
});

export const bio_hidden = style({
  opacity: 0,
});

export const bio_animation = style({
  position: 'absolute',
  left: 0,
  top: 0,
  width: '100%',
  height: '100%',
  backgroundColor: color.p0,
});
