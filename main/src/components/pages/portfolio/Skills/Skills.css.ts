// watasuke.net
// CopyRight (c) 2021-2025 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @watasuke1024
// This software is released under the MIT or MIT SUSHI-WARE License.
import {style} from '@vanilla-extract/css';

export const toggle = style({
  display: 'grid',
  gridTemplateColumns: 'auto 1fr',
  gap: 16,

  width: '90%',
  maxWidth: 400,
  textAlign: 'center',
  fontSize: '1.3em',
  margin: 'auto',
  marginBottom: 32,
});

export const label = style({
  fontWeight: 'bold',
  margin: 'auto',
});

export const tier_desc_heading = style({
  textAlign: 'center',
});
export const tier_desc_wrapper = style({
  display: 'flex',
  justifyContent: 'center',
});
export const tier_desc_item = style({
  display: 'grid',
  gridTemplateColumns: '56px auto',
});

export const skill_container = style({
  width: '90%',
  margin: 'auto',
  paddingBottom: 40,
});

export const group_name = style({
  fontSize: '1.8em',
  fontWeight: 'bold',
});

export const group = style({
  display: 'grid',
  gap: 12,
  gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))',
  marginBottom: 32,
  '@media': {
    'screen and (max-width: 550px)': {
      display: 'flex',
      flexDirection: 'column',
    },
  },
});
