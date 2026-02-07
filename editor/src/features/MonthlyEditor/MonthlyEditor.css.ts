// watasuke.net
// CopyRight (c) 2021-2026 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @watasuke1024
// This software is released under the MIT or MIT SUSHI-WARE License.
import {style} from '@vanilla-extract/css';
import {color} from '@watasuke.net/common/src/css/color';

export const css = {
  header_title: style({
    fontSize: '1.4em',
    textAlign: 'right',
  }),
  warning_container: style({
    marginBlock: 12,
  }),
  warning_text: style({
    margin: 0,
  }),
  input: style({
    display: 'grid',
    gridTemplateColumns: '60px 1fr',
    alignItems: 'center',
    gap: 8,
    paddingTop: 12,
    paddingBottom: 4,
  }),
  input_text: style({
    border: `1px solid ${color.fg}`,
  }),
  counter: style({
    fontSize: '0.9em',
    color: color.g3,
  }),
};
