// watasuke.net > editor
// CopyRight (c) 2021-2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';
import '@watasuke.net/common/src/css/base.css';
import '@common/global.css';
import {Toast} from './Toast';

const meta: Meta<typeof Toast> = {
  component: Toast,
  parameters: {
    layout: 'centered',
  },
};
export default meta;

export const Main: StoryObj<typeof Toast> = {
  render: () => <Toast />,
};
