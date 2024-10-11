// watasuke.net > editor
// CopyRight (c) 2021-2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import {style} from '@vanilla-extract/css';
import {color} from '@watasuke.net/common/src/css/color';

export const css = {
  trigger: style({
    display: 'grid',
    gridTemplateColumns: '1fr auto',
    gap: '12px',
    padding: '4px 8px',
    alignItems: 'center',
    textAlign: 'left',
    border: `1px solid ${color.fg}`,
  }),
  content: style({
    zIndex: 20480,
  }),
  viewport: style({
    backgroundColor: `${color.bg}e0`,
    padding: '4px 8px',
  }),
  item: style({
    display: 'grid',
    gridTemplateColumns: '1fr 20px',
    gap: '4px',
    padding: '8px',
    alignItems: 'center',
    textAlign: 'left',
    borderRadius: '0',
    ':hover': {
      cursor: 'pointer',
    },
  }),
};
