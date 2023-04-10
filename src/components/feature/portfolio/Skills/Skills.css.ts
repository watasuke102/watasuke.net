// Skills.css.ts
//
// CopyRight (c) 2021-2023 Watasuke
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT SUSHI-WARE License.
import {globalStyle, style} from '@vanilla-extract/css';
import {color} from '@/common/color';

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

export const skill_container = style({
  width: '90%',
  margin: 'auto',
  paddingBottom: 120,
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
    }
  }
});

export const skillcard = style({
  padding: '8px 16px',
  borderRadius: 4,
  color: color.fg,
  backgroundColor: color.bg,

  display: 'grid',
  gridTemplateColumns: '1fr auto',
  gridTemplateRows: 'auto 1fr',
  '@media': {
    'screen and (max-width: 550px)': {
    gridTemplateColumns: 'auto auto',
    gridTemplateRows: 'auto auto 1fr',
    }
  }
});

export const name = style({
  fontSize: '1.5em',
  fontWeight: 'bold',
  marginBottom: '8px',
  '@media': {
    'screen and (max-width: 550px)': {
      gridRow: '1 / 2',
      marginBottom: 0,
    }
  }
});

export const right = style({
  margin: 'auto',
  '@media': {
    'screen and (max-width: 550px)': {
      gridRow: '2 / 3',
      margin: '4px 0',
    }
  }
});

export const category = style({
  border: `1px solid ${color.fg}`,
  padding: '2px 8px',
  margin: '0 12px',
  '@media': {
    'screen and (max-width: 550px)': {
        marginLeft: 0,
    }
  }
});

export const tier = style({
  fontSize: '1.2em',
  fontWeight: 'bold',
  '::before': {
    fontSize: '0.7em',
    color: `rgba(${color.fg}, 0.8)`,
    content: 'tier ',
  },
});

export const desc = style({
  fontSize: '0.9em',
  color: `rgba(${color.fg}, 0.7)`,
  '@media': {
    'screen and (max-width: 550px)': {
      gridColumn: '1 / 3',
    }
  }
});

export const icon = style({
  padding: 8,
  marginLeft: 'auto',
  width: 80,
  height: 80,
  '@media': {
    'screen and (max-width: 550px)': {
      width: 64,
      height: 64,
      gridRow: '1 / 3',
      gridColumn: '2 / 3',
    }
  }
});
globalStyle(`${icon} svg`, {
  width: '100%',
  height: '100%',
});
