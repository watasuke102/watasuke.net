// watasuke.net > common
// CopyRight (c) 2021-2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import {globalStyle, style} from '@vanilla-extract/css';
import {color} from '@watasuke.net/common/src/css/color';

export const css = {
  root: style({
    width: 72,
    height: 36,
    padding: 0,
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    border: `3px solid ${color.fg}`,
    borderRadius: 512,
    backgroundColor: color.fg,
  }),
  thumb: style({
    gridColumn: '1 / 2',
    display: 'block',
    width: '100%',
    height: '100%',
    borderRadius: 512,
    backgroundColor: color.bg,
  }),
};

globalStyle(`${css.root}[data-state='checked']`, {
  backgroundColor: color.p0,
});
globalStyle(`${css.thumb}[data-state='checked']`, {
  gridColumn: '2 / 3',
});
