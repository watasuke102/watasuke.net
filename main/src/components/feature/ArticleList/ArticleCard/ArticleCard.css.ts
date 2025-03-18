// watasuke.net
// CopyRight (c) 2021-2025 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @watasuke1024
// This software is released under the MIT or MIT SUSHI-WARE License.
import {style} from '@vanilla-extract/css';
import {color} from '@watasuke.net/common/src/css/color';

// container (<Link>) cannot have padding
// because it limits the interaction area
export const container = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '100%',
  border: `1px solid ${color.fg}`,
});
export const link = style({
  height: '100%',
  transition: 'background-color 0.3s',
  ':hover': {
    backgroundColor: `${color.fg}26`,
    transition: 'background-color 0.3s',
  },
});

export const date = style({
  display: 'inline-block',
  margin: 8,
  padding: 4,
  whiteSpace: 'nowrap',
  color: color.bg,
  backgroundColor: color.fg,
});
export const title = style({
  fontSize: '1.2em',
  marginInline: 8,
  paddingBottom: 8,
  selectors: {
    [`${container}>a:hover > &`]: {
      textDecoration: 'underline',
    },
  },
});
export const description = style({
  wordWrap: 'break-word',
  margin: 0,
  marginInline: 8,
  // virtual marginTop of `tagcontainer_wrapper`
  // give padding to `description` to maximize interaction area of <Link>
  paddingBottom: 8,
});

export const tagcontainer_wrapper = style({
  padding: 8,
  borderTop: `2px dotted ${color.fg}`,
});
