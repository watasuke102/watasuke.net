// card.css.ts
//
// CopyRight (c) 2021-2023 Watasuke
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import {color} from '@/common/color';
import {globalStyle, style} from '@vanilla-extract/css';

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
  fontSize: '1.5em',
  padding: '8px 12px',
  backgroundColor: `${color.bg}cc`,
});

globalStyle(`${button_container} button`, {
  borderColor: `${color.fg}99`,
});

globalStyle(`${button_container} button:hover:after`, {
  content: 'attr(aria-label)',
  fontFamily: '"M PLUS Rounded 1c", sans-serif',
  position: 'absolute',
  left: 0,
  top: '100%',
  width: '100%',
  padding: '4px 0',
  fontSize: '0.6em',
  backgroundColor: `${color.bg}99`,
});
