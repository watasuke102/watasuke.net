// watasuke.net
// CopyRight (c) 2021-2026 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @watasuke1024
// This software is released under the MIT or MIT SUSHI-WARE License.
import {style} from '@vanilla-extract/css';
import {easing} from '@watasuke.net/common/style/easing';
import {color} from '@watasuke.net/common/style/color';

export const container = style({
  width: '95%',
  padding: 10,
});

export const list = style({
  display: 'grid',
  gap: 12,
  gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))',
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
  padding: 0,
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

export const card_link = style({
  height: '100%',
  transition: 'background-color 0.3s',
  display: 'grid',
  gridTemplateRows: 'subgrid',
  gridTemplateColumns: 'auto 1fr',
  gridRow: 'span 3',
  gap: 4,
  border: `1px solid ${color.fg}`,
  backgroundColor: `${color.bg}e9`,

  position: 'relative',
  '::before': {
    content: '',
    position: 'absolute',
    top: 0,
    left: 0,
    display: 'block',
    width: 0,
    height: '100%',
    backgroundColor: `${color.p0}`,
    opacity: 0.18,
    transition: `width .3s ${easing.out_circ.cubic_bezier}`,
  },
  '@media': {
    '(hover: hover)': {
      ':hover': {
        color: color.bg,
      },
      selectors: {
        '&:hover::before': {
          width: '100%',
        },
      },
    },
  },
});

export const card_title = style({
  gridRow: 1,
  gridColumn: '1 / -1',
  fontSize: '1.2em',
  marginInline: 8,
  marginBlock: 0,
  paddingTop: 4,
  selectors: {
    [`${container}>a:hover > &`]: {
      textDecoration: 'underline',
    },
  },
});
export const card_date = style({
  display: 'inline-block',
  marginInline: 8,
  padding: 4,
  width: 'fit-content',
  height: 'fit-content',
  marginBlock: 'auto',
  borderRadius: 2,
  whiteSpace: 'nowrap',
  color: color.bg,
  backgroundColor: color.fg,
});
export const card_description = style({
  gridRow: 3,
  gridColumn: '1 / -1',
  wordWrap: 'break-word',
  margin: 0,
  marginInline: 8,
  // virtual marginTop of `tagcontainer_wrapper`
  // give padding to `description` to maximize interaction area of <Link>
  paddingBottom: 8,
});

export const card_tag_container = style({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  gap: 4,
});
export const card_tag = style({
  padding: '2px 4px',
  height: 'fit-content',
  fontSize: '0.8em',
  border: `2px solid ${color.fg}`,
  borderRadius: 2,
});
