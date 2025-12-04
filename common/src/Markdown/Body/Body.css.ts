// watasuke.net
// CopyRight (c) 2021-2025 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @watasuke1024
// This software is released under the MIT or MIT SUSHI-WARE License.
import {globalStyle, style} from '@vanilla-extract/css';
import {color} from '../../css/color';

export const h2 = style({
  borderBottom: `4px solid ${color.p0}`,
});

export const h3 = style({
  paddingLeft: 8,
  borderLeft: `4px solid ${color.p0}`,
});

export const h4 = style({
  borderBottom: `2px dashed ${color.p0}`,
});

// override
export const container = style({});
globalStyle(`${container} .twitter-wrap`, {
  minHeight: 216, // single-line tweet has 213px height
});
globalStyle(`${container} blockquote.twitter-tweet`, {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '100%',
  minHeight: 'inherit',
  textAlign: 'center',
  border: `1px dashed ${color.brand.twitter}`,
});
globalStyle(`${container} .twitter-tweet-rendered`, {
  margin: '0 auto !important',
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

globalStyle(`${container} blockquote:not(.twitter-tweet)`, {
  borderLeft: `3px solid ${color.fg}`,
  backgroundColor: '#0004',
  paddingInline: 8,
});

globalStyle(`${container} pre:not([class])`, {
  border: `1px solid ${color.fg}`,
  padding: '12px 16px',
  borderRadius: 4,
});
globalStyle(`${container} pre:has(>code.hljs)`, {
  padding: '0 !important',
});
