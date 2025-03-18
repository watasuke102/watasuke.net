// watasuke.net > editor
// CopyRight (c) 2021-2025 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @watasuke1024
// This software is released under the MIT or MIT SUSHI-WARE License.
import React from 'react';
import {Checkbox} from './Checkbox';
import type {Meta, StoryObj} from '@storybook/react';
import '@watasuke.net/common/src/css/base.css';

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
};
export default meta;

export const Main: StoryObj<typeof Checkbox> = {
  render: () => <Checkbox />,
};
