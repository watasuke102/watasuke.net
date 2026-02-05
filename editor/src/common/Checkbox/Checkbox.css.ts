// watasuke.net
// CopyRight (c) 2021-2026 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @watasuke1024
// This software is released under the MIT or MIT SUSHI-WARE License.
import {style} from '@vanilla-extract/css';
import {color} from '@watasuke.net/common/src/css/color';

export const css = {
  checkbox_wrapper: style({
    display: 'flex',
    alignItems: 'center',
    gap: 8,
  }),
  check_icon: style({
    width: 32,
    height: 32,
    padding: 0,
    border: `1px solid ${color.fg}`,
    borderRadius: 4,
  }),
};
