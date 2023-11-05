// BlogContent.css.ts
//
// CopyRight (c) 2021-2023 Watasuke
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import {globalStyle, style} from '@vanilla-extract/css';
import {color} from '@/common/color';

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

// override
export const container = style({});
globalStyle(`${container} .twitter-tweet`, {
  margin: '0 auto',
});

globalStyle(`${container} .youtube-wrapper`, {
  position: 'relative',
  paddingBottom: `${(9 / 16) * 100}%`,
});

globalStyle(`${container} .youtube-wrapper iframe`, {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
});

globalStyle(`${container} p > img`, {
  position: 'relative',
  display: 'block',
  margin: '0 auto',
  width: 'auto',
  height: 'auto',
  maxWidth: '95%',
  maxHeight: '30vh',
});

globalStyle(`${container} hr`, {
  margin: '20px auto',
});

globalStyle(`${container} blockquote`, {
  borderLeft: `solid 4px ${color.fg}`,
  paddingLeft: 8,
});

globalStyle(`${container} pre:not([class])`, {
  border: `1px solid ${color.fg}`,
  padding: '12px 16px',
  borderRadius: 4,
});
globalStyle(`${container} pre:has(>code.hljs)`, {
  padding: '0 !important',
});
