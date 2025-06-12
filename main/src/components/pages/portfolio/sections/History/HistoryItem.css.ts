// watasuke.net
// CopyRight (c) 2021-2025 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @watasuke1024
// This software is released under the MIT or MIT SUSHI-WARE License.
import {style} from '@vanilla-extract/css';
import {color} from '@watasuke.net/common/src/css/color';

export const container = style({
  position: 'relative',
  width: '90%',
  margin: 'auto',
  display: 'grid',
  gridTemplate: `
    'item_l .        line_v_u .        item_r' auto
    'item_l line_h_l period   line_h_r item_r' 4px
    'item_l .        line_v_b .        item_r' auto / 1fr 32px 2px 32px 1fr
  `,
});
const left_selector = `${container}:nth-child(odd) &`;
export const line_vertical = style({
  backgroundColor: color.fg,
  gridArea: 'line_v_u',
  selectors: {
    '&:nth-child(odd)': {
      gridArea: 'line_v_b',
    },
  },
});
export const line_horizontal = style({
  backgroundColor: color.fg,
  gridArea: 'line_h_r',
  selectors: {
    [left_selector]: {
      gridArea: 'line_h_l',
    },
  },
});

export const period = style({
  position: 'absolute',
  transform: 'translateX(-50%) translateY(-50%)',
  gridArea: 'period',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '0 4px',
  fontSize: '0.85em',
  border: `1px solid ${color.fg}`,
  borderRadius: 2,
  backgroundColor: color.bg,
});
export const empty_period = style({
  gridArea: 'period',
  width: '100%',
  height: '100%',
  backgroundColor: color.fg,
});
const weight = 2;
const length = 12;
export const range_separator = style({
  width: weight,
  height: length,
  margin: 'auto',
  backgroundColor: color.fg,
});

export const info_area = style({
  padding: '4px 8px',
  marginBlock: 8,
  textAlign: 'left',
  border: `3px solid ${color.p0}`,
  borderRadius: 4,
  ':focus': {
    outline: `2px dashed ${color.fg}`,
  },

  gridArea: 'item_r',
  selectors: {
    [left_selector]: {
      gridArea: 'item_l',
    },
    '&:disabled': {
      cursor: 'initial',
    },
  },
});
export const info_row = style({
  display: 'flex',
  justifyContent: 'space-between',
  columnGap: 8,
});
export const info_title = style({
  margin: 0,
});
export const info_subtitle = style({
  color: `${color.fg}b0`,
});
export const info_tag = style({
  padding: '0 4px',
  border: `1px solid ${color.fg}`,
  borderRadius: 2,
});
export const info_icon = style({
  display: 'block',
  marginTop: 'auto',
  marginLeft: 'auto',
  width: 24,
  height: 24,
  aspectRatio: '1 / 1',
});
