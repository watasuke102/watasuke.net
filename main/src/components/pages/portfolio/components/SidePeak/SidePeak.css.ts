// watasuke.net
// CopyRight (c) 2021-2025 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @watasuke1024
// This software is released under the MIT or MIT SUSHI-WARE License.
import {globalStyle, style} from '@vanilla-extract/css';
import {color} from '@watasuke.net/common/src/css/color';

export const sidepeak = style({
  position: 'fixed',
  top: 0,
  right: 0,
  height: '100dvh',
  padding: '8px 12px',
  overflowX: 'hidden',
  overflowY: 'scroll',
  backgroundColor: `${color.bg}f6`,

  width: 'min(500px, 95dvw)',
});
export const sidepeak_top = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'start',
  marginBottom: 4,
});

export const sidepeak_close_icon = style({
  padding: 0,
  width: 24,
  height: 24,
  border: 'none',
  borderRadius: 2,
  outline: 'none',
  '@media': {
    '(hover: hover)': {
      ':hover': {
        transitionDuration: '0.2s',
        backgroundColor: `${color.fg}33`,
      },
    },
  },
});
globalStyle(`${sidepeak_close_icon}>svg`, {
  verticalAlign: 'initial !important',
});
