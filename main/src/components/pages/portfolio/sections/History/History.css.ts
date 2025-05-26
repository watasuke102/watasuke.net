// watasuke.net
// CopyRight (c) 2021-2025 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @watasuke1024
// This software is released under the MIT or MIT SUSHI-WARE License.
import {style} from '@vanilla-extract/css';
import {color} from '@watasuke.net/common/src/css/color';

export const heading = style({
  textAlign: 'center',
});

export const year_container = style({
  position: 'relative',
  width: 120,
  margin: 'auto',
  marginBlock: -12,
});
export const year = style({
  position: 'absolute',
  left: '50%',
  top: '50%',
  margin: 0,
  transform: 'translate(-50%, -50%)',
  display: 'inline-block',
  textAlign: 'center',
});

export const history_item = style({
  width: '90%',
  margin: 'auto',
  display: 'grid',
  gridTemplate: `
    'item_l .        line_v .        item_r' auto
    'item_l line_h_l line_v line_h_r item_r' 4px
    'item_l .        line_v .        item_r' auto / 1fr 20px 2px 20px 1fr
  `,
});
const left_selector = `${history_item}:nth-child(odd) &`;
export const history_line_vertical = style({
  backgroundColor: color.fg,
  gridArea: 'line_v',
});
export const history_line_horizontal = style({
  backgroundColor: color.fg,
  gridArea: 'line_h_r',
  selectors: {
    [left_selector]: {
      gridArea: 'line_h_l',
    },
  },
});
export const history_info_container = style({
  padding: '4px 8px',
  marginBlock: 8,
  border: `3px solid ${color.p0}`,
  borderRadius: 4,

  gridArea: 'item_r',
  selectors: {
    [left_selector]: {
      gridArea: 'item_l',
    },
  },
});
export const history_title = style({
  margin: 0,
});
export const history_subtitle = style({
  color: `${color.fg}b0`,
});
