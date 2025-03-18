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
  gridTemplate: `
    'img title' auto
    'img url  ' auto
    'img desc ' 1fr / 1fr 1fr
  `,

  width: '90%',
  margin: '30px auto',
  padding: 10,

  color: color.fg,
  textDecoration: 'none',
  ':hover': {
    textDecoration: 'underline',
  },

  wordBreak: 'break-all',
  borderRadius: 4,
  border: `2px solid ${color.fg}`,
  '@media': {
    '(prefers-reduced-motion: no-preference)': {
      transition: 'transform 0.5s cubic-bezier(0.075, 0.82, 0.165, 1)',
      ':hover': {
        cursor: 'pointer',
        transform: 'translateY(-4px)',
        transition: 'transform 0.5s cubic-bezier(0.075, 0.82, 0.165, 1)',
        color: color.fg,
      },
    },
    // 横幅が十分にあるときは画像とテキストを横並べ
    'screen and (max-width: 800px)': {
      display: 'block',
    },
  },
});

export const img_fallback = style({
  gridArea: 'img',
  display: 'block',
  textAlign: 'center',
  margin: 'auto',
});

export const img_wrapper = style({
  gridArea: 'img',
  display: 'block',
  margin: 'auto',
  width: '90%',
  maxHeight: 260,
  overflowY: 'hidden',
  '@media': {
    'screen and (max-width: 800px)': {
      marginBottom: 15,
    },
  },
});

export const thumbnail = style({
  width: '100%',
  height: '100%',
});

export const text_container = style({
  display: 'flex',
  flexDirection: 'column',
});

export const title = style({
  gridArea: 'title',
  fontSize: '1.3em',
  fontWeight: 'bold',
  selectors: {
    [`${container}:hover > &`]: {
      textDecoration: 'underline',
    },
  },
});

export const url = style({
  gridArea: 'url',
  color: color.p0,
  fontSize: '0.75em',
  margin: '8px 0',
  textDecoration: 'underline',
});

export const description = style({
  gridArea: 'desc',
  fontSize: '0.85em',
});
