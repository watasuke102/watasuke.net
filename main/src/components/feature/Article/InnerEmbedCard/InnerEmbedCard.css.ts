// watasuke.net
// CopyRight (c) 2021-2025 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @watasuke1024
// This software is released under the MIT or MIT SUSHI-WARE License.
import {style} from '@vanilla-extract/css';
import {color} from '@watasuke.net/common/src/css/color';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 4,

  width: '95%',
  margin: '20px auto',
  padding: 10,

  wordBreak: 'break-all',
  borderRadius: 4,
  border: `2px solid ${color.p0}`,
  '@media': {
    '(prefers-reduced-motion: no-preference)': {
      transition: 'transform 0.5s cubic-bezier(0.075, 0.82, 0.165, 1)',
      ':hover': {
        cursor: 'pointer',
        transform: 'translateY(-4px)',
        transition: 'transform 0.5s cubic-bezier(0.075, 0.82, 0.165, 1)',
      },
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
