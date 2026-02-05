// watasuke.net
// CopyRight (c) 2021-2026 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @watasuke1024
// This software is released under the MIT or MIT SUSHI-WARE License.
import {globalStyle, style} from '@vanilla-extract/css';
import {color} from '@watasuke.net/common/src/css/color';

export const share_container = style({
  display: 'flex',
  justifyContent: 'center',
  gap: 20,
  flexWrap: 'wrap',
  height: 40,
  marginTop: 4,
  marginBottom: 16,
});
export const share_icon = style({
  aspectRatio: '1 / 1',
  height: '100%',
  color: color.fg,
});
export const twitter_icon = style({
  ':hover': {
    color: color.brand.twitter,
  },
});
export const hatena_icon = style({
  aspectRatio: '1 / 1',
  height: '100%',
  // https://brand.hatena.co.jp/hatenabookmark#guide-symbolmark
  color: '#00a4de',
  backgroundColor: '#fff',
});

export const menu_button = style({
  // FIXME: padding is too wide
  borderRadius: 4,
  boxShadow: '4px 4px 6px 2px #1a1a1a',
  borderColor: color.fg,
  transitionProperty: 'background-color, transform',
  transitionDuration: '0.2s',
  ':hover': {
    transitionDuration: '0.2s',
    backgroundColor: `${color.p0}33`,
  },
  ':active': {
    transitionDuration: '0.2s',
    transform: 'translate(1px, 1px)',
  },
});
globalStyle(`${menu_button} svg`, {
  width: '100%',
  height: '100%',
});
