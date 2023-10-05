// PortfolioContainer.css.ts
//
// CopyRight (c) 2021-2023 Watasuke
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import {style} from '@vanilla-extract/css';
import {color} from '@/common/color';

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

export const page_indicator = style({
  textAlign: 'right',
  position: 'fixed',
  right: 12,
  top: '50%',
  transform: 'translateY(-50%)',

  color: color.bg,
  fontSize: '0.7em',
});

export const indicator_item_wrapper = style({
  overflow: 'hidden',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '20px',
  width: '20px',
  margin: '16px 0',
  marginLeft: 'auto',
  border: `1px solid ${color.fg}`,
  borderRadius: 40,
  color: 'transparent',
  backgroundColor: color.bg,
  opacity: 0.4,
  transitionDuration: '0.4s',
  transitionProperty: 'width, color, opacity',
  transitionTimingFunction: 'cubic-bezier(0.075, 0.82, 0.165, 1)',
  ':hover': {
    cursor: 'pointer',
    width: '100px',
    color: color.fg,
    opacity: 0.9,
  },
});

export const current = style({
  opacity: 0.9,
});

export const name = style({
  userSelect: 'none',
  fontWeight: 'bold',
});
