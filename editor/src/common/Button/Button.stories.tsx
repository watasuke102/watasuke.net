// watasuke.net > editor
// CopyRight (c) 2021-2025 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @watasuke1024
// This software is released under the MIT or MIT SUSHI-WARE License.
import '@watasuke.net/common/src/css/base.css';
import {Button} from './Button';
import type {Meta, StoryObj} from '@storybook/react';

const meta: Meta<typeof Button> = {
  component: Button,
  parameters: {
    layout: 'centered',
  },
};
export default meta;

export const Text: StoryObj<typeof Button> = {
  args: {
    type: 'text',
    text: 'Button',
    disabled: false,
  },
};

export const Outlined: StoryObj<typeof Button> = {
  args: {
    type: 'outlined',
    text: 'Button',
    disabled: false,
  },
};

export const Contained: StoryObj<typeof Button> = {
  args: {
    type: 'contained',
    text: 'Button',
    disabled: false,
  },
};
