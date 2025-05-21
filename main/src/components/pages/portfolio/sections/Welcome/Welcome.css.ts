// watasuke.net
// CopyRight (c) 2021-2025 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @watasuke1024
// This software is released under the MIT or MIT SUSHI-WARE License.
import {style} from '@vanilla-extract/css';
import {color} from '@watasuke.net/common/src/css/color';
import {constant} from '../../constant';

export const background = style({
  width: '100%',
  height: '100dvh',
  color: color.bg,
  backgroundColor: color.p0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const container = style({
  overflow: 'hidden',
  display: 'flex',
  gap: 16,
  '@media': {
    [`screen and (width < ${constant.welcome_container_section_size * 2 + 8 /* gap */ + 64 /* margin */}px)`]:
      {
        flexDirection: 'column',
      },
  },
});

export const ids = style({
  width: constant.welcome_container_section_size,
  height: constant.welcome_container_section_size,
  display: 'flex',
  flexDirection: 'column',
  gap: 2,
});

export const name_primary = style({
  fontWeight: 'bold',
  fontSize: '2.6em',
  marginTop: -12,
  marginBottom: -8,
});
export const name_secondary = style({
  fontSize: '1.5em',
  color: `${color.bg}cc`,
});
