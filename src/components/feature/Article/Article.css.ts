// watasuke.net
// CopyRight (c) 2021-2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import {style} from '@vanilla-extract/css';
import {color} from '@/common/color';

export const container = style({
  display: 'flex',
  marginTop: 20,
});

export const blogcontent_wrapper = style({
  width: '70%',
  borderRight: `1px solid ${color.fg}`,
  padding: 15,
  '@media': {
    'screen and (max-width: 700px)': {
      width: '100%',
      margin: 'auto',
      padding: 0,
      border: 'none',
    },
  },
});

export const side = style({
  width: '25%',
  marginLeft: 20,
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
