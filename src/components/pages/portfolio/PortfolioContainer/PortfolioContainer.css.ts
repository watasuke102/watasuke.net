// PortfolioContainer.scss
//
// CopyRight (c) 2021-2023 Watasuke
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import {color} from '@/common/color';
import {style} from '@vanilla-extract/css';

export const view_full = style({
  position: 'fixed',
  top: 0,
  left: 0,
  height: '100dvh',
  width: '100dvw',
  padding: 0,
  overflowX: 'hidden',
});

export const container = style({
  // スクロールバー関連
  overflowY: 'scroll',
  scrollbarWidth: 'none',
  '::-webkit-scrollbar': {
    display: 'none',
  },
});

export const scroll_bar = style({
  position: 'fixed',
  top: 0,
  right: 0,
  width: 4,
  backgroundColor: color.bg,
});

export const container_mobile = style({
  position: 'fixed',
  top: 0,
  left: 0,
  height: '100dvh',
  overflowX: 'hidden',
});

const font_size = 13;
export const page_indicator = style({
  textAlign: 'right',
  position: 'fixed',
  right: 16,
  top: '50%',
  transform: 'translateY(-50%)',

  color: color.bg,
  fontSize: font_size,
});

export const indicator_item = style({
  overflow: 'hidden',
  width: font_size,
  padding: `0 ${font_size - 4}px`,
  margin: '16px 0',
  marginLeft: 'auto',
  border: `1px solid ${color.fg}`,
  borderRadius: font_size,
  backgroundColor: `${color.bg}77`,
  color: color.fg,
  ':hover': {
    cursor: 'pointer',
    width: 'auto',
    backgroundColor: `${color.bg}ee`,
  },
});

export const current = style({
  backgroundColor: `${color.bg}ee`,
});

export const name = style({
  userSelect: 'none',
  padding: `0 ${font_size}px`,
  fontWeight: 'bold',
});
