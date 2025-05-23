// watasuke.net
// CopyRight (c) 2021-2025 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @watasuke1024
// This software is released under the MIT or MIT SUSHI-WARE License.
import {keyframes, style} from '@vanilla-extract/css';
import {color} from '@watasuke.net/common/src/css/color';
import {easing} from '@watasuke.net/common/src/easing';
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
  fontSize: '1.15em',
  fontWeight: 'bold',
});
export const icon = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: 5,
  height: 28,
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

export const scroll_prompt = style({
  overflow: 'hidden',
  display: 'grid',
  gap: 4,
  gridTemplateColumns: '28px auto',
  alignItems: 'center',
  color: color.bg,
});

const rolling = keyframes({
  '0%': {
    transform: 'translateY(-90%)',
  },
  '45%': {
    transform: 'translateY(0%)',
  },
  '70%': {
    transform: 'translateY(0%)',
  },
  '100%': {
    transform: 'translateY(90%)',
  },
});
export const down_arrow = style({
  animationName: rolling,
  animationDuration: '3s',
  animationIterationCount: 'infinite',
  animationTimingFunction: easing.out_expo.cubic_bezier,
});

const blink = keyframes({
  '0%': {
    opacity: 0.1,
  },
  '45%': {
    opacity: 1,
  },
  '55%': {
    opacity: 1,
  },
  '100%': {
    opacity: 0.1,
  },
});
export const scroll_prompt_text = style({
  fontSize: '1.1em',
  animationName: blink,
  animationDuration: '9s',
  animationIterationCount: 'infinite',
});
