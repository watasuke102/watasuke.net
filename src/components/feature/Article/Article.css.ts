// Article.css.ts
//
// CopyRight (c) 2021-2023 Watasuke
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import {color} from '@/common/color';
import {style} from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  marginTop: 20,
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
