// watasuke.net > editor
// CopyRight (c) 2021-2025 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @watasuke1024
// This software is released under the MIT or MIT SUSHI-WARE License.
import '@watasuke.net/common/src/css/base.css';
import React from 'react';
import {NewArticle} from './NewArticle';
import type {Meta, StoryObj} from '@storybook/react';

const meta: Meta<typeof NewArticle> = {
  component: NewArticle,
  parameters: {
    layout: 'centered',
  },
};
export default meta;

export const Main: StoryObj<typeof NewArticle> = {
  render: () => <NewArticle />,
};
