// watasuke.net
// CopyRight (c) 2021-2026 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @watasuke1024
// This software is released under the MIT or MIT SUSHI-WARE License.
import {globalStyle, style} from '@vanilla-extract/css';
import {color} from '@watasuke.net/common/src/css/color';

export const container = style({
  marginInline: 32,
  marginBottom: 20,
});
export const tier_desc_item = style({
  display: 'grid',
  gridTemplateColumns: '56px auto',
});
export const tier_desc_label = style({
  fontWeight: 'bold',
});

export const switch_container = style({
  display: 'flex',
  gap: 12,
  alignItems: 'center',
  textAlign: 'left',
  marginBlock: 12,
  padding: '4px 8px',
  border: `2px solid ${color.fg}`,
  borderRadius: 2,
});
export const switch_label = style({
  fontSize: '1.2em',
  fontWeight: 'bold',
});

export const group = style({
  fontSize: '1.2em',
  fontWeight: 'bold',
  borderLeft: '9px double',
  paddingLeft: 8,
});
export const skill_grid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
  gap: 12,
  marginBottom: 28,
});

export const item = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 4,
  padding: 8,
  columnGap: 12,
  borderRadius: 10,
  backgroundColor: color.g0,
});
export const title_area = style({
  display: 'flex',
  alignItems: 'center',
  gap: 8,
});

export const icon = style({
  gridArea: 'icon',
  width: 28,
  height: 28,
});
globalStyle(`${icon} svg`, {
  height: '100%',
  width: 'auto',
});
export const title = style({
  gridArea: 'title',
  fontWeight: 'bold',
  fontSize: '1.1em',
  margin: 0,
});
export const desc = style({
  gridArea: 'desc',
  whiteSpace: 'pre-wrap',
  margin: 0,
  marginBottom: 'auto',
  fontSize: '0.9em',
});
