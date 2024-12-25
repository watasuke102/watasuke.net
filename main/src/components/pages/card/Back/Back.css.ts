// watasuke.net
// CopyRight (c) 2021-2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import {style} from '@vanilla-extract/css';
import {color} from '@watasuke.net/common/src/css/color';

export const container = style({
  position: 'relative',
  top: '50%',
  left: '50%',
  transform: 'translateX(-50%) translateY(-50%)',
  maxWidth: 'calc(100% - 64px)',

  display: 'grid',
  gridTemplateRows: '8px auto 8px',
});

export const qr_container = style({
  width: '95%',
  margin: 'auto',
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  justifyContent: 'space-between',
  gap: '0 8dvw',
});

export const item = style({
  display: 'flex',
  flexDirection: 'column',
  paddingTop: '3dvh',
  paddingBottom: '1.5dvh',
  margin: 'auto',
});

export const qrcode_wrapper = style({
  maxHeight: '60dvh',
  width: '100%',
  objectFit: 'contain',
});
export const qrcode_img = style({
  display: 'block',
  margin: 'auto',
});

export const separator = style({
  backgroundColor: color.bg,
});

export const url = style({
  display: 'block',
  width: '100%',
  textAlign: 'center',
  fontSize: 'min(3dvw, 6.5dvh)',
  color: `${color.bg}aa`,
});
