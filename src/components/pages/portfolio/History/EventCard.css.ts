// EventCard.css.ts
//
// CopyRight (c) 2021-2023 Watasuke
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import {color} from '@/common/color';
import {globalStyle, style} from '@vanilla-extract/css';

const h_connector_len = 40;
const connector_weight = 4;
const day_size = 96;

export const container = style({
  position: 'relative',
  zIndex: 128,
  display: 'grid',
  gridTemplateColumns: `1fr ${h_connector_len}px ${day_size}px ${h_connector_len}px 1fr`,
  gridTemplateRows: `${day_size}px auto`,
  width: '95dvw',
  margin: 'auto',
  marginBottom: 16,

  '@media': {
    'screen and (max-width: 800px)': {
      display: 'flex',
      flexDirection: 'column',
      width: '85dvw',
    },
  },
});

export const h_connector = style({
  gridRow: '1 / 2',
  gridColumn: '4 / 5',
  margin: 'auto',
  width: '100%',
  height: connector_weight,
  backgroundColor: color.bg,
  '@media': {
    'screen and (max-width: 800px)': {
      display: 'none',
    },
  },
});
globalStyle(`${container}:nth-child(odd) ${h_connector}`, {
  '@media': {
    'screen and (min-width: 800px)': {
      gridColumn: '2 / 3',
    },
  },
});

export const day = style({
  gridColumn: '3 / 4',
  display: 'flex',
  textAlign: 'center',
  justifyContent: 'center',
  alignItems: 'center',

  height: day_size,
  borderRadius: 4,
  fontSize: '1.3em',
  color: color.fg,
  backgroundColor: color.bg,

  '@media': {
    'screen and (max-width: 800px)': {
      width: day_size,
      margin: 'auto',
      minHeight: 36,
      height: 'auto',
      marginBottom: 8,
    },
  },
});

const v_padding = 8;
export const card = style({
  gridRow: '1 / 3',
  gridColumn: '5 / 6',
  padding: `${v_padding}px 12px`,
  borderRadius: 4,
  color: color.fg,
  backgroundColor: color.bg,
  '@media': {
    'screen and (max-width: 800px)': {
      marginBottom: 40,
    },
  },
});
globalStyle(`${container}:nth-child(odd) ${card}`, {
  '@media': {
    'screen and (min-width: 800px)': {
      gridColumn: '1 / 2',
    },
  },
});

export const header = style({
  minHeight: `calc(#{${day_size}} - #{${v_padding}} * 2)`,
  textAlign: 'left',
  display: 'grid',
  gridTemplateColumns: '1fr auto',
  gridTemplateRows: 'auto 1fr',
  gap: '0 8px',
  ':hover': {
    cursor: 'pointer',
  },
});
globalStyle(`${container}:nth-child(odd) ${header}`, {
  '@media': {
    'screen and (min-width: 800px)': {
      textAlign: 'right',
      gridTemplateColumns: 'auto 1fr',
    },
  },
});

export const title = style({
  gridRow: '1 / 2',
  gridColumn: '1 / 2',
  display: 'block',
  margin: 'auto 0',
  fontSize: '1.5em',
  fontWeight: 'bold',
});
globalStyle(`${container}:nth-child(odd) ${title}`, {
  '@media': {
    'screen and (min-width: 800px)': {
      gridColumn: '2 / 3',
    },
  },
});

export const subtitle = style({
  gridRow: '2 / 3',
  gridColumn: '1 / 2',
  display: 'block',
  marginTop: 'auto',
  fontSize: '1em',
  color: `${color.fg}bb`,
});
globalStyle(`${container}:nth-child(odd) ${subtitle}`, {
  '@media': {
    'screen and (min-width: 800px)': {
      gridColumn: '2 / 3',
    },
  },
});

export const category = style({
  gridRow: '1 / 2',
  gridColumn: '2 / 3',
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
    'screen and (min-width: 800px)': {
      gridColumn: '1 / 2',
    },
  },
});

export const expand_icon = style({
  gridRow: '2 / 3',
  gridColumn: '2 / 3',
  marginLeft: 'auto',
  marginRight: 0,
  transitionProperty: 'transform',
  width: 44,
  height: 44,
});
globalStyle(`${expand_icon} svg`, {
  width: '100%',
  height: '100%',
});
globalStyle(`${container}:nth-child(odd) ${expand_icon}`, {
  '@media': {
    'screen and (min-width: 800px)': {
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
globalStyle(`${body} hr`, {
  opacity: 1,
  border: `1px solid ${color.fg}`,
});
