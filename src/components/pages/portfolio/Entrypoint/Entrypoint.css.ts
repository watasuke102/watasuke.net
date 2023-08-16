// Entrypoint.css.ts
//
// CopyRight (c) 2021-2023 Watasuke
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import {color} from '@/common/color';
import {style, ComplexStyleRule, globalKeyframes, globalStyle} from '@vanilla-extract/css';

function fan(size: number, length: number, offset: number): ComplexStyleRule {
  const border_width = 4;
  const degree = length + offset;
  const hole_radius = size / 2 - border_width;

  return {
    zIndex: -10,
    display: 'block',
    borderRadius: '50%',
    width: size,
    height: size,

    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translateY(-50%) translateX(-50%)',

    // prettier-ignore
    background: `conic-gradient(
      transparent ${offset}deg,
      ${color.fg} ${offset}deg,
      ${color.fg} ${degree}deg,
      transparent ${degree}deg
    )`,
    mask: `radial-gradient(circle at center, transparent ${hole_radius}px, black ${hole_radius}px, black)`,
  };
}

export const center_menu = style({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translateY(-50%) translateX(-50%)',
  textAlign: 'center',
});

// prettier-ignore
globalKeyframes('rotate_cw', {
    '0%': { transform: 'translateY(-50%) translateX(-50%) rotate(0turn)' },
  '100%': { transform: 'translateY(-50%) translateX(-50%) rotate(1turn)' }
});
// prettier-ignore
globalKeyframes('rotate_ccw', {
    '0%': { transform: 'translateY(-50%) translateX(-50%) rotate( 0turn)' },
  '100%': { transform: 'translateY(-50%) translateX(-50%) rotate(-1turn)' }
});

const inner_radius = 410;
export const inner_0 = style({
  ...fan(inner_radius, 45, 0),
  animation: 'rotate_cw 14s linear infinite',
});
export const inner_1 = style({
  ...fan(inner_radius, 60, 85),
  animation: 'rotate_cw 14s linear infinite',
});
export const inner_2 = style({
  ...fan(inner_radius, 140, 180),
  animation: 'rotate_cw 14s linear infinite',
});

export const outer_0 = style({
  ...fan(inner_radius + 80, 260, 30),
  animation: 'rotate_ccw 28s linear infinite',
});

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 12,
});

export const welcome = style({
  fontSize: '2.2em',
  fontWeight: 'bold',
});

export const option = style({
  width: 300,
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '8px 16px',
});

export const label = style({
  textAlign: 'left',
  margin: 'auto 0',
  fontSize: '1.2em',
});
export const toggle = style({
  fontSize: '1.3em',
});
export const continue_button = style({
  width: 200,
  margin: 'auto',
  position: 'relative',
  fontSize: '1.4em',
  textDecoration: 'underline',
  transition: 'background-color 0.3s',
  ':hover': {
    cursor: 'pointer',
    backgroundColor: `${color.fg}33`,
    transition: 'background-color 0.3s',
  },
});

const button_common: ComplexStyleRule = {
  content: '',
  position: 'absolute',
  display: 'inline-block',
  width: 16,
  height: 16,
  border: `4px solid ${color.p0}`,
};
// 左上
globalStyle(`${continue_button}::before`, {
  ...button_common,
  top: 0,
  left: 0,
  borderBottom: 'none',
  borderRight: 'none',
});
// 右下
globalStyle(`${continue_button}::after`, {
  ...button_common,
  bottom: 0,
  right: 0,
  borderTop: 'none',
  borderLeft: 'none',
});

export const page_transition = style({
  zIndex: 256,
  position: 'fixed',
  left: 0,
  top: 0,
  width: '100dvw',
  height: '100dvh',
});
