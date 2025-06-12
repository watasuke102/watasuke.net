// watasuke.net
// CopyRight (c) 2021-2025 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @watasuke1024
// This software is released under the MIT or MIT SUSHI-WARE License.
import {style} from '@vanilla-extract/css';

export const heading = style({
  textAlign: 'center',
});

export const year_container = style({
  position: 'relative',
  width: 120,
  margin: 'auto',
  marginBlock: -12,
  zIndex: 8,
});
export const year = style({
  position: 'absolute',
  left: '50%',
  top: '50%',
  margin: 0,
  transform: 'translate(-50%, -50%)',
  display: 'inline-block',
  textAlign: 'center',
});
