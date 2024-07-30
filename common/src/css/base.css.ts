// watasuke.net > common
// CopyRight (c) 2021-2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import {globalStyle} from '@vanilla-extract/css';
import {color} from '@watasuke.net/common/src/css/color';

globalStyle('*', {
  scrollBehavior: 'auto',
});
globalStyle('::before, *, ::after', {
  '@media': {
    '(prefers-reduced-motion: reduce)': {
      transitionDelay: '0s !important',
      transitionDuration: '0s !important',
      animationDelay: '0s !important',
      animationDuration: '0s !important',
    },
  },
});

globalStyle(':root', {
  fontFamily: '"M PLUS Rounded 1c", sans-serif',
  backgroundColor: color.bg,
  color: color.fg,
  scrollbarWidth: 'thin',
  scrollbarColor: `${color.fg} transparent`,
});

globalStyle('*::selection', {
  color: color.bg,
  backgroundColor: color.p0,
});

globalStyle('a', {
  color: color.p0,
  textDecoration: 'underline',
});
globalStyle('a:hover', {
  color: color.p0,
  transition: 'color 0.3s',
});

globalStyle('code', {
  fontFamily:
    '"Moralerspace Krypton NF", "Monaspace Krypton", MyricaM, "MyricaM M", "Source Code Pro", "Ubuntu Mono", "Ubuntu Monospace", Consolas, monospace',
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

globalStyle('sup > a', {
  marginInline: 3,
});

globalStyle('hr', {
  opacity: 1,
});

globalStyle('details', {
  marginBottom: 12,
  borderLeft: `4px solid ${color.fg}`,
});
globalStyle('details[open] summary', {
  marginBottom: 12,
});
globalStyle('details > *', {
  marginLeft: 10,
});
