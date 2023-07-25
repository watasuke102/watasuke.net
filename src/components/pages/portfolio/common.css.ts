// PortfolioCommon.css.ts
//
// CopyRight (c) 2021-2023 Watasuke
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import {color} from '@/common/color';
import {globalStyle, keyframes, style} from '@vanilla-extract/css';

export const container = style({
  position: 'relative',
  width: '100dvw',
  minHeight: '100dvh',
  color: color.bg,
});

globalStyle(`${container} > h2`, {
  marginTop: 0,
  fontSize: '4em',
  textAlign: 'center',
});

export const next_page = style({
  position: 'absolute',
  left: '50%',
  bottom: 32,
  marginTop: 'auto',
  textAlign: 'center',
  transform: 'translateX(-50%)',

  '::after': {
    content: '',
    display: 'block',
    width: 50,
    height: 50,
    borderRight: `2px solid ${color.bg}`,
    borderBottom: ` 2px solid ${color.bg}`,
    transform: 'rotate(45deg)',
  },
  animation: '5s infinite ease-in-out',
  animationName: keyframes({
    '0%': {
      bottom: 20,
    },
    '50%': {
      bottom: 32,
      opacity: 0.5,
    },
    '100%': {
      bottom: 20,
    },
  }),

  // @keyframes moving_arrow {
  // }
});

globalStyle(`${next_page} > span`, {
  marginTop: 30,
});
