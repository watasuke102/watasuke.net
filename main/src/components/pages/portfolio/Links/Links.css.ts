// watasuke.net
// CopyRight (c) 2021-2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import {style} from '@vanilla-extract/css';

export const container = style({
  width: '90%',
  margin: '0 auto',
  display: 'grid',
  gap: 12,
  gridTemplateColumns: 'repeat(auto-fit, minmax(480px, 1fr))',
  paddingBottom: 200,

  '@media': {
    'screen and (max-width: 550px)': {
      display: 'flex',
      flexDirection: 'column',
    },
  },
});
