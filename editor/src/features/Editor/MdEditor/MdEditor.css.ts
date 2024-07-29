// watasuke.net > editor
// CopyRight (c) 2021-2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import {globalStyle, keyframes, style} from '@vanilla-extract/css';
import {color} from '@watasuke.net/common/src/css/color';

export const css = {
  editor: style({
    display: 'grid',
    gridTemplateRows: 'auto 1fr',
    height: '100%',
  }),
  toolbox: style({
    width: '100%',
    padding: '8px 12px',
    border: `2px solid ${color.fg}`,
    borderBottom: 'none',
  }),
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
    transition: '0.4s cubic-bezier(0.16, 1, 0.3, 1)',
  }),
  accordion_content: style({
    overflow: 'hidden',
    animationDuration: '0.3s',
    animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
  }),
  textarea: style({
    resize: 'none',
    height: '100%',
    border: `2px solid ${color.p0}`,
    scrollbarGutter: 'stable',
    scrollbarWidth: 'thin',
    ':focus-visible': {
      outline: 'none',
    },
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
  transition: '0.4s cubic-bezier(0.16, 1, 0.3, 1)',
});
globalStyle(`${css.expand_icon} svg`, {
  width: '100%',
  height: '100%',
});
