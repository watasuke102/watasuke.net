// watasuke.net > editor
// CopyRight (c) 2021-2025 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @watasuke1024
// This software is released under the MIT or MIT SUSHI-WARE License.
import {style} from '@vanilla-extract/css';

export const css = {
  container: style({
    position: 'fixed',
    left: 0,
    top: 0,
    width: '100dvw',
    height: '100dvh',
    display: 'grid',
    placeItems: 'center',
  }),
  label: style({
    display: 'block',
    textAlign: 'center',
    marginTop: 12,
    fontSize: '1.3em',
  }),
};
