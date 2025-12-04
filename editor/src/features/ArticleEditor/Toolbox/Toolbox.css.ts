// watasuke.net
// CopyRight (c) 2021-2025 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @watasuke1024
// This software is released under the MIT or MIT SUSHI-WARE License.
import {globalStyle, keyframes, style} from '@vanilla-extract/css';
import {easing} from '@watasuke.net/common/src/easing';

export const css = {
  toolbox_header: style({
    display: 'grid',
    gridTemplateColumns: '32px 100px auto 1fr',
    width: '100%',
    gap: 12,
  }),
  expand_icon: style({
    margin: 'auto',
    width: '100%',
    height: '100%',
    transition: `0.4s ${easing.out_expo.cubic_bezier}`,
  }),
  accordion_content: style({
    overflow: 'hidden',
    animationDuration: '0.3s',
    animationTimingFunction: easing.out_expo.cubic_bezier,
  }),
};

const open = keyframes({
  '0%': {height: 0},
  '100%': {height: 'var(--radix-accordion-content-height)'},
});
const closed = keyframes({
  '0%': {height: 'var(--radix-accordion-content-height)'},
  '100%': {height: 0},
});
globalStyle(`${css.accordion_content}[data-state='open']`, {
  animationName: open,
});
globalStyle(`${css.accordion_content}[data-state='closed']`, {
  animationName: closed,
});
globalStyle(`${css.expand_icon}[data-state='open']`, {
  transform: 'rotate(180deg)',
  transition: `0.4s ${easing.out_expo.cubic_bezier}`,
});
globalStyle(`${css.expand_icon} svg`, {
  width: '100%',
  height: '100%',
});
