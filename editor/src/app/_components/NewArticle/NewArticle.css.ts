// watasuke.net > editor
// CopyRight (c) 2021-2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import {style} from '@vanilla-extract/css';
import {color} from '@watasuke.net/common/src/css/color';

export const css = {
  header: style({
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  }),
  dialog_container: style({
    width: '50dvw',
  }),
  form_field: style({
    display: 'grid',
    gridTemplateColumns: '1fr auto',
    gridTemplateRows: 'auto auto',
    gridTemplateAreas: `
    'label warn'
    'input input'
    `,
    alignItems: 'baseline',
    marginBottom: 12,
  }),
  label: style({
    gridArea: 'label',
    fontSize: '1.2em',
    fontWeight: 'bold',
  }),
  input: style({
    gridArea: 'input',
    border: `1px solid ${color.fg}`,
    ':focus-visible': {
      outline: 'none',
    },
  }),
};
