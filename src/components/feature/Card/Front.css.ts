// card.css.ts
//
// CopyRight (c) 2021-2023 Watasuke
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import {color} from '@/common/color';
import {fontFace, globalStyle, style} from '@vanilla-extract/css';

const MyricaM = fontFace({
  src: 'url(/MyricaM.woff)',
});

export const background = style({
  position: 'fixed',
  left: 0,
  top: 0,
  width: '100dvw',
  height: '100dvh',
  overflow: 'hidden',
  backgroundColor: color.p0,
});

export const container = style({
  position: 'relative',
  width: '80dvw',
  top: '50%',
  left: '50%',
  transform: 'translateX(-50%) translateY(-50%)',

  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: 32,
});

export const avatar = style({
  aspectRatio: '1 / 1',
  margin: 'auto',
});

export const info = style({
  display: 'flex',
  flexDirection: 'column',
  // padding: '4px 16px',
  // border: `1px solid ${color.bg}`,
  color: color.bg,
  fontSize: '1vw',
});

export const name = style({
  lineHeight: '120%',
  fontSize: '5.8em',
  fontWeight: 'bold',
});

export const url = style({
  fontFamily: MyricaM,
  fontSize: '2.3em',
  color: `${color.bg}cc`,
});

export const icon_and_link = style({
  fontFamily: MyricaM,
  display: 'grid',
  alignItems: 'center',
  gridTemplateColumns: '3vw 2px 1fr',
});
globalStyle(`${icon_and_link} svg`, {
  height: '100%',
  margin: 'auto',
});

export const separator = style({
  backgroundColor: color.bg,
  height: '100%',
});

export const primary = style({
  fontSize: '2.3em',
  fontWeight: 'bold',
  gap: '8px 12px',
  margin: 'auto 0',
  '@media': {
    'screen and (min-width: 1501px)': {
      margin: '16px 0',
    },
  },
});

export const secondary = style({
  fontSize: '1.9em',
  gap: '4px 12px',
});
globalStyle(`${secondary} div:first-child`, {
  transform: 'scale(80%)',
});
