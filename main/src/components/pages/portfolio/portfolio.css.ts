// watasuke.net
// CopyRight (c) 2021-2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import {style} from '@vanilla-extract/css';
import {color} from '@watasuke.net/common/src/css/color';

export const header_height = 72;
export const main_container = style({
  paddingTop: header_height,
});
export const header = style({
  zIndex: 512,
  position: 'fixed',
  left: 0,
  top: 0,
  width: '100%',
  height: header_height,
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr',
  alignItems: 'center',
  paddingBlock: 12,
  paddingRight: 8,
  fontSize: '1.2em',
  borderBottom: `dotted 1px ${color.fg}`,
  backgroundColor: `${color.bg}a0`,
  backdropFilter: 'blur(3px)',
  '@media': {
    'screen and (width < 950px)': {
      gridTemplateColumns: 'auto 1fr auto',
    },
  },
});

export const animation_form = style({
  alignSelf: 'center',
  display: 'flex',
  gap: 12,
  alignItems: 'center',
  marginInline: 'auto',
});

export const translate_button = style({
  display: 'grid',
  gridTemplateColumns: 'auto 32px',
  gap: 12,
  alignItems: 'center',
  marginLeft: 'auto',
  border: `1px solid ${color.fg}`,
  boxShadow: '2px 2px 4px 2px #333',
  '@media': {
    'screen and (width < 600px)': {
      gridTemplateColumns: '32px',
      gap: 0,
      width: 'auto',
    },
  },
});
export const button_text = style({
  '@media': {
    'screen and (width < 600px)': {
      display: 'none',
    },
  },
});
