// watasuke.net
// CopyRight (c) 2021-2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import {style} from '@vanilla-extract/css';
import {color} from '@watasuke.net/common/src/css/color';

export const back_link = style({
  display: 'block',
  marginTop: 8,
});

export const container = style({
  display: 'flex',
});

const middle_margin = 16;

export const blogcontent_wrapper = style({
  width: '75%',
  overflowX: 'hidden',
  borderRight: `1px solid ${color.fg}`,
  marginLeft: 4,
  paddingRight: middle_margin,
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
  marginLeft: middle_margin,
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

export const side_toc = style({
  position: 'sticky',
  top: 60,
  padding: '4px 12px',
  maxHeight: '80vh',
  overflowY: 'scroll',
  border: `solid 2px ${color.fg}`,
  display: 'flex',
  flexDirection: 'column',
});

export const head = style({
  display: 'block',
  fontSize: '1.5em',
  fontWeight: 'bold',
  marginBottom: 16,
  textAlign: 'center',
});
