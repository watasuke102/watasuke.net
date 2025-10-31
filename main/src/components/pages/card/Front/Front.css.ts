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

  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
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
  lineHeight: '90%',
  marginLeft: -4,
  marginBottom: 12,
  fontSize: '6.3em',
  fontFamily: '"M PLUS Rounded 1c"',
  fontWeight: 'bold',
});
export const name_sub = style({
  fontSize: '3.3em',
  color: `${color.bg}cc`,
});

export const hr = style({
  height: '2px !important',
});

export const icon_and_id = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 12,
  marginTop: 'auto',
  fontSize: 'min(2.7dvw, 6.9dvh)',
  fontWeight: 'bold',
  '@media': {
    'screen and (min-width: 1501px)': {
      margin: '16px 0',
    },
  },
});
export const row = style({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
});
export const icon_container = style({
  height: '100%',
  display: 'inline-flex',
  gap: 8,
  alignItems: 'stretch',
});
export const icon = style({
  aspectRatio: '1 / 1',
  // FIXME: uncomment when Webkit supports container queries
  //        (currently icons are wrapped only on Safari)
  // containerType: 'inline-size',
});
globalStyle(`${icon} svg`, {
  // padding: 'max(4px, 15cqw)',
  padding: 8,
  borderRadius: 2,
  color: color.fg,
  backgroundColor: color.bg,
});
export const id = style({
  textAlign: 'right',
  paddingRight: 8,
  borderRight: `6px solid ${color.bg}`,
  borderRadius: 2,
});
export const link = style({
  textDecoration: 'underline',
});
