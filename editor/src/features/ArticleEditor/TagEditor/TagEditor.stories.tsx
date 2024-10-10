// watasuke.net > editor
// CopyRight (c) 2021-2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import '@common/global.css';
import '@watasuke.net/common/src/css/base.css';
import React from 'react';
import {TagEditor} from './TagEditor';
import type {Meta, StoryObj} from '@storybook/react';

const meta: Meta<typeof TagEditor> = {
  component: TagEditor,
  parameters: {
    layout: 'centered',
  },
};
export default meta;

export const Main: StoryObj<typeof TagEditor> = {
  render: () => <TagEditor />,
};
