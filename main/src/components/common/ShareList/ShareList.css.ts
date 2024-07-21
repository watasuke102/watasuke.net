// watasuke.net
// CopyRight (c) 2021-2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import {style} from '@vanilla-extract/css';
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
  paddingBlock: 0,
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
