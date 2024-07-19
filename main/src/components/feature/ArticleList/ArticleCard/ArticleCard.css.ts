// watasuke.net
// CopyRight (c) 2021-2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import {style} from '@vanilla-extract/css';
import {color} from '@watasuke.net/common/src/css/color';

export const container = style({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  padding: '8px 12px',
  border: `1px solid ${color.fg}`,
  transition: 'background-color 0.3s',
  ':hover': {
    backgroundColor: `${color.fg}26`,
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
