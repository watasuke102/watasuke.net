// watasuke.net
// CopyRight (c) 2021-2025 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @watasuke1024
// This software is released under the MIT or MIT SUSHI-WARE License.
import {style} from '@vanilla-extract/css';
import {color} from '@watasuke.net/common/src/css/color';

export const container = style({
  width: '100%',
  marginTop: 64,
  padding: 12,
  backgroundColor: `${color.bg}dd`,
  borderTop: `dotted 1px ${color.fg}`,

  display: 'grid',
  gap: 12,
  gridTemplateColumns: 'auto 1fr',
  gridTemplateRows: 'repeat(2, auto)',
  gridTemplateAreas: `
    'sitename  icons'
    'buildinfo links'
  `,
  '@media': {
    'screen and (500px < width < 800px)': {
      gridTemplateColumns: 'auto auto',
      gridTemplateRows: 'repeat(3, auto)',
      gridTemplateAreas: `
      'sitename  icons'
      'buildinfo buildinfo'
      'links     links'
      `,
      rowGap: 4,
      textAlign: 'center',
    },
    'screen and (width <= 500px)': {
      gridTemplateColumns: 'auto',
      gridTemplateRows: 'repeat(4, auto)',
      gridTemplateAreas: `
      'sitename'
      'icons'
      'buildinfo'
      'links'
      `,
      rowGap: 4,
      textAlign: 'center',
    },
  },
});

export const sitename = style({
  gridArea: 'sitename',
  margin: 0,
  fontSize: '2.0em',
  fontWeight: 'bold',
  justifySelf: 'start',
  '@media': {
    'screen and (max-width: 500px)': {
      justifySelf: 'center',
    },
  },
});

export const buildinfo = style({
  gridArea: 'buildinfo',
  alignSelf: 'end',
  color: color.g3,
  '@media': {
    'screen and (width <= 800px)': {
      fontSize: '0.85em',
    },
    'screen and (width > 800px)': {
      fontSize: '1.0em',
      justifySelf: 'end',
    },
  },
});
// disable link color (only when not hovered)
export const githash = style({
  color: color.g3,
});

export const icon_container = style({
  display: 'flex',
  gap: 24,
  placeSelf: 'center',
  justifySelf: 'right',
  height: 28,
  '@media': {
    'screen and (width <= 500px)': {
      justifySelf: 'center',
      marginBlock: 4,
    },
  },
});
export const icon = style({
  aspectRatio: '1 / 1',
  height: '100%',
  color: color.fg,
});
export const twitter_icon = style({
  ':hover': {
    color: color.brand.twitter,
  },
});
export const soundcloud_icon = style({
  ':hover': {
    color: color.brand.soundcloud,
  },
});

export const link_container = style({
  gridArea: 'links',
  width: '100%',
  placeSelf: 'center',
  display: 'grid',
  '@media': {
    'screen and (width >= 800px)': {
      gridTemplateRows: 'auto auto',
      alignItems: 'end',
      textAlign: 'right',
    },
    'screen and (500px < width < 800px)': {
      gridTemplateColumns: 'auto 1fr auto',
    },
    'screen and (width <= 500px)': {
      gridTemplateRows: 'auto auto',
      justifyContent: 'center',
    },
  },
});
export const link_head = style({
  display: 'inline-block',
  margin: 0,
  fontSize: '1.5rem',
});
