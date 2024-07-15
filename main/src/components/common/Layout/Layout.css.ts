// watasuke.net
// CopyRight (c) 2021-2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import {style} from '@vanilla-extract/css';

export const container = style({
  padding: '24px 12px',
  paddingTop: 56,
  '@media': {
    'screen and (max-width: 550px)': {
      marginTop: 48,
    },
  },
});
