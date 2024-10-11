// watasuke.net > editor
// CopyRight (c) 2021-2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import {globalStyle, style} from '@vanilla-extract/css';
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
  editor: style({
    display: 'grid',
    gridTemplateRows: 'auto 1fr',
    height: '100%',
  }),
  toolbox_wrapper: style({
    width: '100%',
    padding: '8px 12px',
    border: `2px solid ${color.fg}`,
    borderBottom: 'none',
  }),
  textarea: style({
    resize: 'none',
    height: '100%',
    border: `2px solid ${color.p0}`,
    scrollbarGutter: 'stable',
    scrollbarWidth: 'thin',
    ':focus-visible': {
      outline: 'none',
    },
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
  }),
  confirmation: style({
    height: '100%',
    display: 'grid',
    gap: 16,
    gridTemplateRows: '1fr 36px',
  }),
  publish_button: style({
    gridRow: '2 / 3',
  }),
  publish_waiting_label: style({
    display: 'block',
    textAlign: 'center',
    fontSize: '1.2em',
  }),

  commit_info_editor: style({
    display: 'grid',
    gridTemplateColumns: 'auto 1fr',
    gap: '4px 12px',
    alignItems: 'center',
  }),
  commit_mes_editor: style({
    border: `1px solid ${color.fg}`,
  }),
};

globalStyle(`${css.back_button} svg`, {
  width: 32,
  height: '100%',
});
