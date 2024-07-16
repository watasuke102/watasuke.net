// watasuke.net > editor
// CopyRight (c) 2021-2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import '@common/global.css';
import '@watasuke.net/common/src/css/base.css';
import type {Meta, StoryObj} from '@storybook/react';
import React from 'react';
import {Spinner} from './Spinner';

const meta: Meta<typeof Spinner> = {
  component: Spinner,
  parameters: {
    layout: 'centered',
  },
};
export default meta;

export const Main: StoryObj<typeof Spinner> = {
  render: () => <Spinner />,
};
