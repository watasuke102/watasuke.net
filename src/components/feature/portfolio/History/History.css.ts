// History.css.ts
//
// CopyRight (c) 2021-2023 Watasuke
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT SUSHI-WARE License.
import {globalStyle, style} from '@vanilla-extract/css';
import {color} from '@/common/color';

export const container_wrapper = style({
  position: 'relative',
  display: 'block',
  paddingBottom: 64,
});

export const container = style({
  '::before': {
    content: '',
    zIndex: 0,
    display: 'block',
    width: 4,
    height: '100%',
    backgroundColor: color.bg,

    position: 'absolute',
    top: 0,
    left: '50%',
    transform: 'translateX(-50%)',
  },
});

export const year_bg = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  position: 'relative',
  padding: 80,
});
globalStyle(`${year_bg}:nth-child(1)`, {
  paddingTop: 0,
});

export const year = style({
  zIndex: 1,
  position: 'relative',
  fontSize: '1.6em',
  fontWeight: 'bold',
  color: color.fg,
  '::after': {
    content: '',
    zIndex: -1,
    display: 'block',
    width: 100,
    height: 100,
    border: `2px solid ${color.fg}`,
    backgroundColor: color.bg,

    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translateX(-50%) translateY(-50%) rotate(45deg)',
  },
});
