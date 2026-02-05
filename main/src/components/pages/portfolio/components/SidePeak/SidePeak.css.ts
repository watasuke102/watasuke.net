// watasuke.net
// CopyRight (c) 2021-2026 watasuke
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
  zIndex: 64,
  height: '100dvh',
  padding: '8px 12px',
  paddingBottom: 60, // for floating button
  overflowX: 'hidden',
  overflowY: 'scroll',
  backgroundColor: `${color.bg}f6`,
  borderLeft: `1px solid ${color.fg}88`,

  width: 'min(500px, 95dvw)',
});
export const sidepeak_top = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  marginBottom: 4,
});

export const sidepeak_close_icon = style({
  padding: 0,
  width: 40,
  height: 40,
  transform: 'rotate(-90deg)',
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
