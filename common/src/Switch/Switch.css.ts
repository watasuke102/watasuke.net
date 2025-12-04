// watasuke.net
// CopyRight (c) 2021-2025 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @watasuke1024
// This software is released under the MIT or MIT SUSHI-WARE License.
import {globalStyle, style} from '@vanilla-extract/css';
import {color} from '@watasuke.net/common/src/css/color';

export const css = {
  root: style({
    width: 48,
    padding: 0,
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    border: `3px solid ${color.bg}`,
    borderRadius: 512,
    backgroundColor: color.p0,
  }),
  thumb: style({
    gridColumn: '1 / 2',
    display: 'block',
    aspectRatio: '1 / 1',
    borderRadius: '50%',
    border: `3px solid ${color.fg}`,
    backgroundColor: color.bg,
  }),
  switch_bg: style({}),
};

globalStyle(`${css.switch_bg}:not([data-state='checked'])`, {
  backgroundColor: color.fg,
});
globalStyle(`${css.thumb}[data-state='checked']`, {
  gridColumn: '2 / 3',
});
