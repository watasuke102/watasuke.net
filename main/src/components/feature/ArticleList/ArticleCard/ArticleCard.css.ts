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

  padding: '8px 12px',
  border: `1px solid ${color.fg}`,
  transition: 'background-color 0.3s',
  ':hover': {
    backgroundColor: `${color.fg}26`,
    transition: 'background-color 0.3s',
  },
});

export const inside_link = style({
  height: '100%',
  display: 'grid',
  gridTemplateColumns: 'auto 1fr',
  gridTemplateRows: 'auto 1fr auto',
});

export const tagcontainer_wrapper = style({
  justifySelf: 'right',
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

export const title = style({
  gridColumn: '1 / 3',
  fontSize: '1.2em',
  paddingBottom: 16,
  selectors: {
    [`${container}:hover > &`]: {
      textDecoration: 'underline',
    },
  },
});

export const description = style({
  gridColumn: '1 / 3',
  wordWrap: 'break-word',
  margin: 0,
});
