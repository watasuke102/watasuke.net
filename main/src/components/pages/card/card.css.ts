// watasuke.net
// CopyRight (c) 2021-2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import {globalStyle, style} from '@vanilla-extract/css';
import {color} from '@watasuke.net/common';

export const background = style({
  position: 'fixed',
  left: 0,
  top: 0,
  width: '100dvw',
  height: '100dvh',
  overflow: 'hidden',
  backgroundColor: color.p0,
});

export const button_container = style({
  position: 'fixed',
  top: 0,
  left: 0,
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gap: 16,
  padding: '8px 12px',
  backgroundColor: `${color.bg}cc`,
});

export const button = style({
  borderColor: `${color.fg}99`,
  width: 44,
  height: 44,
});
globalStyle(`${button} svg`, {
  width: '100%',
  height: '100%',
});
globalStyle(`${button}:hover:after`, {
  content: 'attr(aria-label)',
  fontFamily: '"M PLUS Rounded 1c", sans-serif',
  fontWeight: 'bold',
  position: 'absolute',
  left: 0,
  top: '100%',
  width: '100%',
  padding: '0',
  backgroundColor: `${color.bg}99`,
});
