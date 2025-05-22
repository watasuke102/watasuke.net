// watasuke.net
// CopyRight (c) 2021-2025 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @watasuke1024
// This software is released under the MIT or MIT SUSHI-WARE License.
import {keyframes, style} from '@vanilla-extract/css';
import {color} from '@watasuke.net/common/src/css/color';
import {welcome_container_section_size} from '../../constant';

export const background = style({
  width: '100%',
  height: '100dvh',
  color: color.bg,
  backgroundColor: color.p0,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  alignItems: 'center',
});

export const container = style({
  overflow: 'hidden',
  display: 'flex',
  gap: 16,
  '@media': {
    [`screen and (width < ${welcome_container_section_size * 2 + 8 /* gap */ + 64 /* margin */}px)`]:
      {
        flexDirection: 'column',
      },
  },
});

export const ids = style({
  width: welcome_container_section_size,
  height: welcome_container_section_size,
  padding: 8,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  border: '3px solid',
  borderImageSlice: 1,
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

export const icon_container = style({
  display: 'flex',
  gap: 12,
});
export const id_text = style({
  display: 'inline-block',
  marginLeft: 'auto',
  fontSize: '1.2em',
  fontWeight: 'bold',
});
export const icon = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: 5,
  height: 32,
  aspectRatio: '1 / 1',
  color: color.fg,
  backgroundColor: color.bg,
  borderRadius: 2,
  filter: `drop-shadow(2px 2px 2px ${color.bg}dd)`,

  transform: 'scale(1.0)',
  transition: 'transform 0.2s ease-out',
  ':hover': {
    transform: 'scale(1.03)',
    transition: 'transform 0.2s ease-out',
  },
});

const blink = keyframes({
  '0%': {
    opacity: 0,
  },
  '45%': {
    opacity: 1,
  },
  '55%': {
    opacity: 1,
  },
  '95%': {
    opacity: 0,
  },
  '100%': {
    opacity: 0,
  },
});
export const scroll_prompt = style({
  display: 'grid',
  gap: 4,
  gridTemplateColumns: '28px auto 28px',
  alignItems: 'center',
  color: color.bg,
  fontSize: '1.1em',
  animationName: blink,
  animationDuration: '8s',
  animationIterationCount: 'infinite',
});
