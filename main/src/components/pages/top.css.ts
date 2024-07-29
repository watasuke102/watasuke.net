// watasuke.net
// CopyRight (c) 2021-2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import {style, globalStyle} from '@vanilla-extract/css';
import {color} from '@watasuke.net/common/src/css/color';

globalStyle('.gatsby-image-wrapper [data-main-image]', {
  transition: 'none !important',
});

export const container = style({
  width: '100%',
  height: '100dvh',
  display: 'grid',
  gridTemplate: `
    'left links_head'    auto
    'left links'         auto
    'left articles_head' auto
    'left articles'      1fr  / auto 1fr
  `,
  columnGap: 40,
  padding: 40,
  '@media': {
    'screen and (width < 750px)': {
      height: 'auto',
      padding: 0,
      paddingBottom: 60,
      gridTemplate: `
        'left'          max(720px, calc(100vh - 240px))
        'links_head'    auto
        'links'         auto
        'articles_head' auto
        'articles'      auto / 1fr
      `,
    },
  },
});

export const left = style({
  gridArea: 'left',
  justifySelf: 'center',
  alignSelf: 'center',
  display: 'flex',
  flexDirection: 'column',
  gap: 32,
});
export const icon_and_welcome = style({
  marginInline: 'auto',
  textAlign: 'center',
});
export const welcome_head = style({
  textAlign: 'center',
  fontSize: '2.2em',
  margin: 0,
});
export const ls = style({
  fontSize: '1.6em',
  fontWeight: 'normal',
  marginBottom: 12,
});
export const command_name = style({
  color: color.p0,
  fontWeight: 'bold',
});
export const directory = style({
  textDecoration: 'underline',
});

export const menu = style({
  display: 'flex',
  flexDirection: 'column',
});
export const menu_entry = style({
  display: 'grid',
  gridTemplateColumns: '40px auto',
  alignItems: 'center',
  gap: 16,
  paddingBlock: 8,
  color: color.fg,
  textDecorationColor: color.p0,
});
export const menu_entry_path = style({
  fontSize: '1.9em',
  fontWeight: 'bold',
  color: color.p0,
});

export const links_head = style({
  gridArea: 'links_head',
  textAlign: 'center',
  backgroundColor: `${color.bg}cc`,
});
export const link_container = style({
  gridArea: 'links',
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
  marginBottom: 20,
  rowGap: 8,
  columnGap: 28,
  marginInline: 'auto',
});
export const link_entry = style({
  width: 52,
  aspectRatio: '1 / 1',
  padding: 8,
  border: `2px solid ${color.fg}`,
  borderRadius: 8,
  color: color.fg,
  backgroundColor: color.bg,
  transition: 'background-color 0.3s',
  ':hover': {
    color: color.fg,
  },
  '@media': {
    '(hover: hover)': {
      ':hover': {
        color: color.bg,
        backgroundColor: color.p0,
        transition: 'background-color 0.3s',
      },
    },
  },
});
export const link_twitter = style({
  '@media': {
    '(hover: hover)': {
      ':hover': {
        color: color.brand.twitter,
      },
    },
  },
});
export const link_soundcloud = style({
  '@media': {
    '(hover: hover)': {
      ':hover': {
        color: '#ff5500',
      },
    },
  },
});

export const articles_head = style({
  gridArea: 'articles_head',
  textAlign: 'center',
  backgroundColor: `${color.bg}cc`,
});
export const favorite_articles = style({
  height: '100%',
  overflowY: 'scroll',
  display: 'flex',
  flexDirection: 'column',
  gap: 16,
  border: `2px solid ${color.p0}`,
  backgroundColor: `${color.bg}aa`,
  padding: 12,
  fontSize: '0.9em',
  scrollbarWidth: 'thin',
  scrollbarGutter: 'stable',
  scrollbarColor: `${color.bg} ${color.p0}`,
  '@media': {
    'screen and (width < 750px)': {
      marginInline: 16,
    },
  },
});
