// watasuke.net
// CopyRight (c) 2021-2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import {style} from '@vanilla-extract/css';
import {color} from '@/common/color';

export const footnote_body = style({
  lineHeight: 'normal',
  // headerよりは上であってほしい
  zIndex: 1024,
  maxWidth: 'min(95dvw, 512px)',
  display: 'inline-block',
  position: 'fixed',
  padding: '4px 8px',
  color: color.fg,
  backgroundColor: color.bg,
  border: `1px solid ${color.fg}`,
  // initial (will be overrided)
  left: 0,
  top: 0,
  opacity: 0,
  transform: 'translateY(-1024px)',
});

export const displayed = style({
  transition: 'opacity 0.2s',
  transitionDelay: '0.3s',
  opacity: 1,
  transform: 'none',
});
