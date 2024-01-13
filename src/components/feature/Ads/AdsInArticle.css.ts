// watasuke.net
// CopyRight (c) 2021-2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import {style} from '@vanilla-extract/css';
import {color} from '@/common/color';

export const wrapper = style({
  zIndex: -1,
  maxWidth: '100%',
  margin: '12px 0',
});

export const dummy = style({
  width: '100%',
  height: 128,
  backgroundColor: color.p0,
  color: color.bg,
  padding: '8px 12px',
  fontSize: '1.3em',
});
