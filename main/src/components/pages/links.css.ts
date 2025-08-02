// watasuke.net
// CopyRight (c) 2021-2025 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @watasuke1024
// This software is released under the MIT or MIT SUSHI-WARE License.
import {style} from '@vanilla-extract/css';
import {color} from '@watasuke.net/common/src/css/color';

export const container = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(480px, 1fr))',
  gap: 24,
  '@media': {
    'screen and (width < 520px)': {
      display: 'flex',
      flexDirection: 'column',
    },
  },
});

export const link_item = style({
  display: 'grid',
  gridTemplate: `
    'icon title' auto
    'desc desc'  1fr  / 40px 1fr
  `,
  alignItems: 'center',
  rowGap: 4,
  columnGap: 12,
  padding: 8,
  border: `3px solid ${color.p0}`,
  borderRadius: 2,
  textDecoration: 'none',
  color: color.fg,
  backgroundColor: `${color.bg}aa`,
  boxShadow: `5px 5px 7px 2px #212121`,
});

export const link_item_icon = style({
  gridArea: 'icon',
});
export const link_item_title = style({
  gridArea: 'title',
  margin: 0,
  fontSize: '1.7em',
  textDecoration: 'underline',
});
export const link_item_desc = style({
  gridArea: 'desc',
  whiteSpace: 'pre-wrap',
});
