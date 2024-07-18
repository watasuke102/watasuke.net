// watasuke.net
// CopyRight (c) 2021-2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import {style} from '@vanilla-extract/css';
import {color} from '@watasuke.net/common/src/css/color';

export const menu_inner = style({
  paddingInline: 16,
  paddingTop: 8,
  paddingBottom: 40,

  display: 'grid',
  gridTemplateRows: '1fr repeat(6, auto)',

  '@media': {
    'screen and (width < 550px)': {
      paddingBottom: 120,
    },
  },
});

export const heading = style({
  fontSize: '1.5em',
  marginBottom: 0,
});
