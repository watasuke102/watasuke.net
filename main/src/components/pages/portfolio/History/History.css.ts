// watasuke.net
// CopyRight (c) 2021-2025 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @watasuke1024
// This software is released under the MIT or MIT SUSHI-WARE License.
import {style} from '@vanilla-extract/css';
import {color} from '@watasuke.net/common/src/css/color';

export const timeline_middle_line = style({
  position: 'relative',
  paddingBottom: 60,
  marginBottom: 20,
  '::before': {
    content: '',
    zIndex: 0,
    display: 'block',
    width: 4,
    height: '100%',
    backgroundColor: color.fg,

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
  paddingBottom: 80,
});
export const year_bg_padding_top = style({
  paddingTop: 80,
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
