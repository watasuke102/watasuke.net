// Back.css.ts
//
// CopyRight (c) 2021-2023 Watasuke
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import {color} from '@/common/color';
import {MyricaM} from '../common.css';
import {style} from '@vanilla-extract/css';

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
  display: 'flex',
  justifyContent: 'space-between',
  gap: '0 48px',
});

export const item = style({
  display: 'flex',
  flexDirection: 'column',
  paddingTop: 24,
  paddingBottom: 12,
  gap: 8,
  margin: 'auto',
});

export const qrcode_wrapper = style({
  maxHeight: '60dvh',
  maxWidth: '25dvw',
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
