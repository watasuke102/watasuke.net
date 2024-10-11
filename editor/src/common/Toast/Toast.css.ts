// watasuke.net > editor
// CopyRight (c) 2021-2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import {globalStyle, keyframes, style} from '@vanilla-extract/css';
import {color} from '@watasuke.net/common/src/css/color';

export const css = {
  viewpoint: style({
    position: 'fixed',
    top: 12,
    left: '50dvw',
    transform: 'translateX(-50%)',
    listStyle: 'none',
  }),
  root: style({
    padding: 8,
    borderRadius: 2,
    opacity: 0.95,
    color: color.bg,
    backgroundColor: color.p0,
    animationDuration: '0.3s',
    animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',

    display: 'grid',
    gridTemplateRows: 'auto auto',
    gridTemplateColumns: 'auto auto',
    gridTemplateAreas: `
      'title close'
      'desc  close'
    `,
  }),
  title: style({
    gridArea: 'title',
    fontSize: '1.3em',
    fontWeight: 'bold',
  }),
  desc: style({
    gridArea: 'desc',
    whiteSpace: 'pre-line',
  }),
  close: style({
    gridArea: 'close',
    border: 'none',
  }),
};

const open = keyframes({
  '0%': {transform: 'translateY(-128%)'},
  '100%': {transform: 'translateY(0%)'},
});
const closed = keyframes({
  '0%': {transform: 'translateY(0%)'},
  '100%': {transform: 'translateY(-128%)'},
});
globalStyle(`${css.root}[data-state='open']`, {
  animationName: open,
});
globalStyle(`${css.root}[data-state='closed']:not([data-swipe='end'])`, {
  animationName: closed,
});
globalStyle(`${css.root}[data-swipe='move']`, {
  transform: 'translateY(var(--radix-toast-swipe-move-y))',
});
