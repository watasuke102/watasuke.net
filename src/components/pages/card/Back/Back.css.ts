// Back.css.ts
//
// CopyRight (c) 2021-2023 Watasuke
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import {MyricaM} from '../common.css';
import {style} from '@vanilla-extract/css';
import {color} from '@/common/color';

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
  aspectRatio: '1 / 1',
});

export const separator = style({
  backgroundColor: color.bg,
});

export const url = style({
  display: 'block',
  width: '100%',
  textAlign: 'center',
  fontFamily: MyricaM,
  fontSize: 'min(3dvw, 6.5dvh)',
  color: `${color.bg}aa`,
});
