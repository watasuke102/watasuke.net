// watasuke.net
// CopyRight (c) 2021-2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import {globalStyle, style} from '@vanilla-extract/css';
import {color} from '@watasuke.net/common/src/css/color';

const h_connector_len = 60;
const connector_weight = 4;

export const container = style({
  position: 'relative',
  zIndex: 128,
  display: 'grid',
  gridTemplate: `
    'left blank_0  blank_0   right' 1fr
    'left left_con right_con right' ${connector_weight}px
    'left blank_1  blank_1   right' 1fr
  / 1fr ${h_connector_len}px ${h_connector_len}px 1fr
  `,
  width: '95dvw',
  marginInline: 'auto',

  '@media': {
    'screen and (width < 800px)': {
      display: 'flex',
      flexDirection: 'column',
      width: '85dvw',
    },
  },
});
export const h_connector = style({
  gridArea: 'right_con',
  margin: 'auto',
  width: '100%',
  height: '100%',
  backgroundColor: color.fg,
  '@media': {
    'screen and (width < 800px)': {
      display: 'none',
    },
  },
});
globalStyle(`${container}:nth-child(odd) ${h_connector}`, {
  '@media': {
    'screen and (width >= 800px)': {
      gridArea: 'left_con',
    },
  },
});

export const day = style({
  display: 'flex',
  gap: 8,
  marginInline: 'auto',
  marginBottom: 8,
  paddingInline: 8,
  paddingBlock: 4,
  textAlign: 'center',
  fontSize: '1.1em',
  border: `1px solid ${color.fg}`,
  borderRadius: 4,
  backgroundColor: color.bg,
  '@media': {
    'screen and (width >= 800px)': {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translateY(-50%) translateX(-50%)',
      gap: 0,
      flexDirection: 'column',
      margin: 0,
      maxWidth: 88,
    },
  },
});

const weight = 2;
const length = 12;
export const range_separator = style({
  width: length,
  height: weight,
  margin: 'auto',
  backgroundColor: color.fg,
  '@media': {
    'screen and (width >= 800px)': {
      width: weight,
      height: length,
    },
  },
});

export const card = style({
  gridArea: 'right',
  paddingBlock: 8,
  paddingInline: 12,
  border: `3px solid ${color.purple}`,
  borderRadius: 4,
  backgroundColor: color.bg,
  '@media': {
    'screen and (width < 800px)': {
      marginBottom: 40,
    },
  },
});
globalStyle(`${container}:nth-child(odd) ${card}`, {
  '@media': {
    'screen and (width >= 800px)': {
      gridArea: 'left',
    },
  },
});

export const header = style({
  padding: 0,
  width: '100%',
  textAlign: 'left',
  display: 'grid',
  gridTemplate: `
    'title    category' auto
    'subtitle blank'    1fr
    'subtitle button'   auto
  /  1fr      auto
  `,
  gap: '0 8px',
  border: 'none',
  ':focus': {
    outline: 'none',
  },
  ':hover': {
    cursor: 'pointer',
  },
});
globalStyle(`${container}:nth-child(odd) ${header}`, {
  '@media': {
    'screen and (width >= 800px)': {
      textAlign: 'right',
      gridTemplate: `
        'category title'    auto
        'blank    subtitle' 1fr
        'button   subtitle' auto
      /  auto     1fr
      `,
    },
  },
});

export const title = style({
  gridArea: 'title',
  display: 'block',
  margin: 'auto 0',
  fontSize: '1.5em',
  fontWeight: 'bold',
});
globalStyle(`${container}:nth-child(odd) ${title}`, {
  '@media': {
    'screen and (width >= 800px)': {
      gridColumn: '2 / 3',
    },
  },
});

export const subtitle = style({
  gridArea: 'subtitle',
  display: 'block',
  marginTop: 'auto',
  fontSize: '1em',
  color: `${color.fg}bb`,
});
globalStyle(`${container}:nth-child(odd) ${subtitle}`, {
  '@media': {
    'screen and (width >= 800px)': {
      gridColumn: '2 / 3',
    },
  },
});

export const category = style({
  gridArea: 'category',
  display: 'block',
  margin: '0 auto',
  marginBottom: 'auto',
  padding: '2px 8px',
  fontSize: '1.1em',
  fontWeight: 'bold',
  border: `1px solid ${color.fg}`,
});
globalStyle(`${container}:nth-child(odd) ${category}`, {
  '@media': {
    'screen and (width >= 800px)': {
      gridColumn: '1 / 2',
    },
  },
});

export const expand_button = style({
  gridArea: 'button',
  marginLeft: 'auto',
  marginRight: 0,
  transitionProperty: 'transform',
  height: 32,
  aspectRatio: '1 / 1',
});
globalStyle(`${expand_button} svg`, {
  width: '100%',
  height: '100%',
});
globalStyle(`${container}:nth-child(odd) ${expand_button}`, {
  '@media': {
    'screen and (width >= 800px)': {
      gridColumn: '1 / 2',
      marginLeft: 0,
      marginRight: 'auto',
    },
  },
});

export const body = style({
  height: 0,
  overflowY: 'hidden',
});
globalStyle(`${body} img`, {
  display: 'block',
  width: '90%',
  height: '90%',
  margin: '8px auto',
});
export const body_hr = style({
  opacity: 1,
  border: `1px solid ${color.fg}`,
});
