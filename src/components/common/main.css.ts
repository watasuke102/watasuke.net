// main.css.ts
//
// CopyRight (c) 2021-2023 Watasuke
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import {color} from '@/common/color';
import {globalStyle} from '@vanilla-extract/css';

globalStyle('*', {
  scrollBehavior: 'auto',
});

globalStyle(':root', {
  fontFamily: '"M PLUS Rounded 1c", sans-serif',
  backgroundColor: color.bg,
  color: color.fg,
});

globalStyle('body', {
  padding: '24px 20px',
  paddingTop: 56,
  '@media': {
    'screen and (max-width: 550px)': {
      marginTop: 48,
    },
  },
});

globalStyle('a', {
  color: color.p0,
  textDecoration: 'underline',
});
globalStyle('a:hover', {
  color: color.p0,
  transition: 'color 0.3s',
});

globalStyle('table', {
  margin: '16px 0',
});
globalStyle('table th', {
  textAlign: 'center',
  borderBottom: `2px solid ${color.fg}`,
});
globalStyle('table th,td', {
  padding: '4px 8px',
});
