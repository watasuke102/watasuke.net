// ArticleList.css.ts
//
// CopyRight (c) 2021-2023 Watasuke
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import {style} from '@vanilla-extract/css';
import {color} from '@/common/color';

export const container = style({
  width: '95%',
  padding: 10,
});

export const list = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
  '@media': {
    'screen and (max-width: 700px)': {
      justifyContent: 'center',
    },
  },
});

// ボタン
export const button_container = style({
  margin: '15px 0',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const button = style({
  display: 'flex',
  border: `solid 3px ${color.fg}`,
  backgroundColor: 'none',
  color: color.fg,
  transitionProperty: 'background-color, color',
  transitionDuration: '0.2s',
  ':hover': {
    backgroundColor: color.fg,
    color: color.bg,
    transitionProperty: 'background-color, color',
    transitionDuration: '0.2s',
    cursor: 'pointer',
  },
});

export const button_icon = style({
  fontSize: 30,
  padding: 10,
  color: 'inherit',
  transition: 'color 0.5s',
  selectors: {
    [`${button}:hover > &`]: {
      color: color.bg,
      transition: 'color 0.5s',
    },
  },
});

export const empty = style({
  width: 50,
  height: 50,
});
