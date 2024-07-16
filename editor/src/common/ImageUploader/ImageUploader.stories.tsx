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
import {ImageUploader} from './ImageUploader';

const meta: Meta<typeof ImageUploader> = {
  component: ImageUploader,
  parameters: {
    layout: 'centered',
  },
};
export default meta;

export const Main: StoryObj<typeof ImageUploader> = {
  render: () => <ImageUploader />,
};
