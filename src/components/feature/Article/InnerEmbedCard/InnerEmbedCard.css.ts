// InnerEmbedCard.css.ts
//
// CopyRight (c) 2021-2023 Watasuke
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import {style} from '@vanilla-extract/css';
import {color} from '@/common/color';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 4,

  width: '95%',
  margin: '20px auto',
  padding: 10,

  textDecoration: 'none',
  color: color.fg,

  wordBreak: 'break-all',
  borderRadius: 4,
  border: `2px solid ${color.p0}`,
  transition: 'transform 0.5s cubic-bezier(0.075, 0.82, 0.165, 1)',
  ':hover': {
    cursor: 'pointer',
    transform: 'translateY(-4px)',
    transition: 'transform 0.5s cubic-bezier(0.075, 0.82, 0.165, 1)',
    color: color.fg,
    textDecoration: 'none',
  },

  // 横幅が十分にあるときは画像とテキストを横並べ
  '@media': {
    'screen and (max-width: 800px)': {
      display: 'block',
    },
  },
});

export const title = style({
  fontSize: '1.2em',
  fontWeight: 'bold',
  selectors: {
    [`${container}:hover > &`]: {
      textDecoration: 'underline',
    },
  },
});

export const url = style({
  // color: color.p0,
  color: `${color.fg}aa`,
  fontSize: '0.9em',
  textDecoration: 'underline',
});

export const description = style({
  fontSize: '0.8em',
});
