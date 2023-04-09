// ArticleCard.css.ts
//
// CopyRight (c) 2021-2023 Watasuke
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT SUSHI-WARE License.
import {style} from '@vanilla-extract/css';
import {color} from '@/common/color';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  margin: 8,
  padding: '8px 12px',

  color: 'inherit',
  textDecoration: 'none',
  border: `1px solid ${color.fg}`,
  transition: 'background-color 0.3s',
  ':hover': {
    color: 'inherit',
    textDecoration: 'none',
    backgroundColor: `rgba(${color.fg}, 0.15)`,
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
});

export const title = style({
  fontSize: '1.2em',
  paddingBottom: 16,
  selectors: {
    [`${container}:hover > &`]: {
      textDecoration: 'underline',
    },
  },
});

// export const thumbnail = style({
//   height: 150,
//   img {
//     height: 150px !important,
//     width: 100%,
//     margin: auto,
//     object-fit: cover,
//   }
// });

export const info = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: 8,
});

export const date = style({
  position: 'relative',
  padding: 4,
  marginRight: 12,
  whiteSpace: 'nowrap',
  color: color.bg,
  backgroundColor: color.fg,
});

export const text = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  width: '100%',
  height: '100%',
});

export const description = style({
  position: 'relative',
  wordWrap: 'break-word',
  margin: 0,
});
