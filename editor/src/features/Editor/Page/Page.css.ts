// watasuke.net > editor
// CopyRight (c) 2021-2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import {globalStyle, keyframes, style} from '@vanilla-extract/css';
import {color} from '@watasuke.net/common/src/css/color';

const header_height = 48;
const editor_area_margin = 12;

export const dialog_width = 460;

export const css = {
  header: style({
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100dvw',
    height: header_height,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 24,
    borderBottom: `1px dotted ${color.fg}`,
  }),
  back_button: style({
    display: 'flex',
    justifyContent: 'left',
    alignItems: 'center',
    height: '100%',
  }),
  header_title: style({
    fontSize: '1.4em',
    textAlign: 'right',
  }),
  container: style({
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    margin: editor_area_margin,
    marginTop: header_height + 12,
    height: `calc(100dvh - ${header_height + editor_area_margin * 2}px)`,
    borderRadius: 4,
    borderTopLeftRadius: 0,
  }),
  preview: style({
    padding: '8px 4px 8px 12px',
    overflowY: 'scroll',
    border: `2px solid ${color.fg}`,
    borderLeft: 'none',
    scrollbarGutter: 'stable',
    scrollbarWidth: 'thin',
  }),
  dialog: style({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: 12,
    gap: 8,
    width: dialog_width,
    height: 100,
  }),
  confirmation: style({
    height: '100%',
    display: 'grid',
    gap: 8,
    gridTemplateRows: '1fr 36px',
  }),
  publish_button: style({
    gridRow: '2 / 3',
  }),
  warning_text: style({
    margin: 0,
  }),
  publish_waiting_label: style({
    display: 'block',
    textAlign: 'center',
    fontSize: '1.2em',
  }),
};

globalStyle(`${css.back_button} svg`, {
  width: 32,
  height: '100%',
});

export const toast = {
  viewpoint: style({
    position: 'fixed',
    top: 12,
    left: '50dvw',
    transform: 'translateX(-50%)',
    listStyle: 'none',
  }),
  root: style({
    padding: 8,
    borderRadius: 2,
    opacity: 0.95,
    color: color.bg,
    backgroundColor: color.p0,
    animationDuration: '0.3s',
    animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',

    display: 'grid',
    gridTemplateRows: 'auto auto',
    gridTemplateColumns: 'auto auto',
    gridTemplateAreas: `
      'title close'
      'desc  close'
    `,
  }),
  title: style({
    gridArea: 'title',
    fontSize: '1.3em',
    fontWeight: 'bold',
  }),
  desc: style({
    gridArea: 'desc',
    whiteSpace: 'pre-line',
  }),
  close: style({
    gridArea: 'close',
    border: 'none',
  }),
};

const open = keyframes({
  '0%': {transform: 'translateY(-128%)'},
  '100%': {transform: 'translateY(0%)'},
});
const closed = keyframes({
  '0%': {transform: 'translateY(0%)'},
  '100%': {transform: 'translateY(-128%)'},
});
globalStyle(`${toast.root}[data-state='open']`, {
  animationName: open,
});
globalStyle(`${toast.root}[data-state='closed']:not([data-swipe='end'])`, {
  animationName: closed,
});
globalStyle(`${toast.root}[data-swipe='move']`, {
  transform: 'translateY(var(--radix-toast-swipe-move-y))',
});
