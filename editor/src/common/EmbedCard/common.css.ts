// watasuke.net > editor
// CopyRight (c) 2021-2025 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @watasuke1024
// This software is released under the MIT or MIT SUSHI-WARE License.
import {style} from '@vanilla-extract/css';
import {color} from '@watasuke.net/common/src/css/color';

export const embed_card = style({
  display: 'block',
  color: color.bg,
  backgroundColor: color.fg,
  padding: 4,
  maxWidth: '100%',
  wordBreak: 'break-all',
});

export const inner_embed = style({
  border: `4px solid ${color.p0}`,
  color: color.fg,
  backgroundColor: color.bg,
});
