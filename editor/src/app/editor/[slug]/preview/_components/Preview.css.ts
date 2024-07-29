// watasuke.net > editor
// CopyRight (c) 2021-2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import {style} from '@vanilla-extract/css';
import {color} from '@watasuke.net/common/src/css/color';

export const css = {
  container: style({
    margin: 8,
  }),
  toc: style({
    marginBlock: 8,
    maxHeight: 300,
    overflowY: 'scroll',
    border: `2px solid ${color.fg}`,
    scrollbarWidth: 'thin',
    scrollbarGutter: 'stable',
  }),
};
