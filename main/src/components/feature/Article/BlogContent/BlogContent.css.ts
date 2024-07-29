// watasuke.net
// CopyRight (c) 2021-2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import {globalStyle, style} from '@vanilla-extract/css';
import {color} from '@watasuke.net/common/src/css/color';

export const title = style({
  marginBottom: 8,
  borderBottom: `solid 5px ${color.p0}`,
});

export const article_info = style({
  display: 'grid',
  gridTemplateColumns: '1fr auto',
  '@media': {
    'screen and (max-width: 700px)': {
      display: 'flex',
      flexDirection: 'column-reverse',
    },
  },
});

export const date_container = style({
  '@media': {
    'screen and (max-width: 700px)': {
      display: 'flex',
      gap: 24,
      marginBottom: 12,
    },
  },
});

export const date = style({
  position: 'relative',
  display: 'grid',
  gridTemplateColumns: '24px auto',
  margin: 0,
  gap: 4,
  alignItems: 'center',
  ':hover': {
    cursor: 'pointer',
  },
});
globalStyle(`${date} svg`, {
  width: '100%',
  height: '100%',
});
globalStyle(`${date}:hover:after`, {
  content: 'attr(aria-label)',
  position: 'absolute',
  left: 0,
  bottom: '100%',
  minWidth: '100%',
  textAlign: 'center',
  padding: 4,
  backgroundColor: `${color.bg}ee`,
  border: `1px solid ${color.fg}`,
});

export const newer_link = style({
  width: '100%',
  marginLeft: -12,
  display: 'grid',
  alignItems: 'center',
  gridTemplateColumns: 'auto 1fr',
});
export const current_title = style({
  display: 'block',
  textAlign: 'center',
  fontWeight: 'bold',
});
export const older_link = style({
  width: '100%',
  marginLeft: 12,
  display: 'grid',
  alignItems: 'center',
  textAlign: 'right',
  gridTemplateColumns: '1fr auto',
});
export const missing_older = style({
  display: 'block',
  textAlign: 'right',
});
