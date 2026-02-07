// watasuke.net
// CopyRight (c) 2021-2026 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @watasuke1024
// This software is released under the MIT or MIT SUSHI-WARE License.
import {style} from '@vanilla-extract/css';
import {color} from '@watasuke.net/common/src/css/color';

export const container = style({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
});

export const page_title = style({
  display: 'inline',
  paddingLeft: 8,
  borderLeft: `8px solid ${color.p0}`,
  borderRadius: 4,
});

export const heading = style({
  marginTop: 16,
  borderBottom: `3px solid ${color.p0}`,
});

export const feed_icon = style({
  display: 'inline-block',
  width: 28,
  height: 28,
  marginLeft: 8,
  color: color.fg,
});
