// Welcome.css.ts
//
// CopyRight (c) 2021-2023 Watasuke
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT SUSHI-WARE License.
import {color} from '@/common/color';
import {globalStyle, style} from '@vanilla-extract/css';

export const bio = style({
  position: 'relative',
  display: 'block',
  width: '90dvw',
  textAlign: 'center',
  margin: 'auto',
});
globalStyle(`${bio} p`, {
  marginBottom: 4,
});
globalStyle(`${bio} a`, {
  color: color.bg,
  textDecoration: 'underline',
});

export const bio_hidden = style({
  opacity: 0,
});

export const bio_animation = style({
  position: 'absolute',
  left: 0,
  top: 0,
  width: '100%',
  height: '100%',
  backgroundColor: color.bg,
});

export const indicator_space = style({
  height: 128,
});

export const icon_and_text = style({
  display: 'grid',
  gridTemplateColumns: '20px 1fr',
  gap: 8,
  marginBottom: 4,
});

globalStyle(`${icon_and_text} svg`, {
  width: '100%',
  height: '100%',
});

export const text = style({
  fontSize: '0.9em',
  color: `rgba(${color.bg}, 0.9)`,
});

export const greeting = style({
  marginTop: 16,
  marginBottom: 64,
});

export const avatar_and_name = style({
  display: 'grid',
  gridTemplateColumns: '200px auto',
  gap: 24,
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: 64,

  '@media': {
    'screen and (max-width: 600px)': {
      position: 'static',
      transform: 'none',
      display: 'flex',
      gap: 0,
      flexDirection: 'column',
    },
  },
});

export const avatar = style({
  width: 200,
  height: 200,
  '@media': {
    'screen and (max-width: 600px)': {
      margin: 'auto',
    },
  },
});

export const name_main = style({
  fontWeight: 'bold',
  fontSize: '2.5em',
  marginBottom: 2,
  marginLeft: -3,
});

export const name_sub = style({
  color: `rgba(${color.bg}, 0.7)`,
});
