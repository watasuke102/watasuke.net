// watasuke.net
// CopyRight (c) 2021-2025 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @watasuke1024
// This software is released under the MIT or MIT SUSHI-WARE License.
import {globalStyle, style} from '@vanilla-extract/css';
import {color} from '@watasuke.net/common/src/css/color';

export const container = style({
  position: 'relative',
  width: '80dvw',
  top: '50%',
  left: '50%',
  transform: 'translateX(-50%) translateY(-50%)',
  maxHeight: '85dvh',

  display: 'flex',
  // display: 'grid',
  // gridTemplateColumns: '1fr 1fr',
  gap: 32,
});

export const avatar_wrapper = style({
  width: '100%',
});

export const avatar = style({
  display: 'block',
  marginLeft: 'auto',
  height: '100%',
  objectFit: 'contain',
  aspectRatio: '1 / 1',
});

export const info = style({
  display: 'flex',
  width: '100%',
  flexDirection: 'column',
  color: color.bg,
  fontSize: 'min(1dvw, 2.5dvh)',
});

export const name = style({
  lineHeight: '120%',
  marginLeft: -4,
  fontSize: '5.8em',
  fontFamily: '"M PLUS Rounded 1c"',
  fontWeight: 'bold',
});

export const url = style({
  fontSize: '2.3em',
  color: `${color.bg}cc`,
});

export const icon_and_link = style({
  display: 'grid',
  alignItems: 'center',
  gridTemplateColumns: 'min(3dvw, 8dvh) 4px 1fr',
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
  gap: 'min(6px, 2dvh) 1.2dvw',
  margin: 'auto 0',
  '@media': {
    'screen and (min-width: 1501px)': {
      margin: '16px 0',
    },
  },
});

export const secondary = style({
  fontSize: '1.9em',
  gap: '4px 1.2dvw',
});
globalStyle(`${secondary} div:first-child`, {
  transform: 'scale(80%)',
});
