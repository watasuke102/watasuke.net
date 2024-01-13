// watasuke.net
// CopyRight (c) 2021-2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import {style} from '@vanilla-extract/css';
import {color} from '@/common/color';

export const container = style({
  display: 'grid',
  gridTemplateColumns: '1fr auto',
  gap: 16,
  '@media': {
    'screen and (max-width: 700px)': {
      display: 'flex',
    },
  },
});

export const blogcontent_wrapper = style({
  borderRight: `1px solid ${color.fg}`,
  paddingRight: 16,
  '@media': {
    'screen and (max-width: 700px)': {
      margin: 'auto',
      padding: 0,
      border: 'none',
    },
  },
});

export const side = style({
  width: '25dvw',
  '@media': {
    'screen and (max-width: 700px)': {
      display: 'none',
    },
  },
});

export const side_tag = style({
  border: `solid 2px ${color.fg}`,
  borderRadius: 2,
  padding: '5px 10px',
  paddingBottom: 20,
  marginBottom: 30,
});

export const head = style({
  display: 'block',
  fontSize: '1.5em',
  fontWeight: 'bold',
  marginBottom: 16,
  textAlign: 'center',
});
