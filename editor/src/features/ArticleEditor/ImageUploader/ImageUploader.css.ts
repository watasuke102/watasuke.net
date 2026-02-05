// watasuke.net
// CopyRight (c) 2021-2026 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @watasuke1024
// This software is released under the MIT or MIT SUSHI-WARE License.
import {style} from '@vanilla-extract/css';
import {easing} from '@watasuke.net/common/src/easing';
import {color} from '@watasuke.net/common/src/css/color';

export const css = {
  upload_area: style({
    outline: '32px solid transparent',
    display: 'flex',
    flexDirection: 'column',
    border: '3px solid',
    padding: '4px 8px',
    textAlign: 'center',
    borderColor: color.fg,
    transition: `border-color 0.5s ${easing.out_expo.cubic_bezier}`,
    ':hover': {
      cursor: 'pointer',
    },
  }),
  dropping_file: style({
    borderColor: color.p0,
    transition: `border-color 0.5s ${easing.out_expo.cubic_bezier}`,
  }),
  dnd_prompt: style({
    fontSize: '1.3em',
    fontWeight: 'bold',
  }),
  image_info_editor: style({
    maxWidth: '85dvw',
    display: 'flex',
    flexDirection: 'column',
    gap: '0 20px',
  }),
  img: style({
    gridArea: 'img',
    margin: 'auto',
    padding: 4,
    border: `3px dotted ${color.fg}`,
  }),
  editor: style({
    display: 'grid',
    gridTemplateColumns: '1fr 8px auto',
    alignItems: 'flex-end',
    marginBlock: 12,
  }),
  ext_dot: style({
    textAlign: 'center',
  }),
  input: style({
    border: `1px solid ${color.fg}`,
    ':focus-visible': {
      outline: 'none',
    },
  }),
  copy_area: style({
    display: 'grid',
    gridTemplateColumns: 'auto 1fr',
    alignItems: 'center',
    gap: 12,
  }),
  buttons: style({
    display: 'grid',
    gridTemplateRows: '40px 32px',
    gap: 4,
    marginTop: 12,
  }),
};
