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
  width: '80dvw',
  top: '50%',
  left: '50%',
  transform: 'translateX(-50%) translateY(-50%)',

  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridTemplateRows: '8px auto 8px',
  gap: '0 48px',
});

export const qr_container = style({
  display: 'flex',
  flexDirection: 'column',
  paddingTop: 24,
  paddingBottom: 12,
  gap: 8,
  margin: 'auto',
});

export const separator = style({
  gridColumn: '1 / 4',
  width: '100%',
  backgroundColor: color.bg,
});

export const url = style({
  display: 'block',
  width: '100%',
  textAlign: 'center',
  fontFamily: MyricaM,
  // fontSize: '1.5em',
  fontSize: '3dvw',
  color: `${color.bg}aa`,
});
