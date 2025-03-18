// watasuke.net > editor
// CopyRight (c) 2021-2025 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @watasuke1024
// This software is released under the MIT or MIT SUSHI-WARE License.
import React from 'react';
import {ComboBox} from './ComboBox';
import type {Meta, StoryObj} from '@storybook/react';
import '@watasuke.net/common/src/css/base.css';

const meta: Meta<typeof ComboBox> = {
  component: ComboBox,
  parameters: {
    layout: 'centered',
  },
};
export default meta;

export const Main: StoryObj<typeof ComboBox> = {
  args: {
    options: ['a', 'b'],
  },
  render: props => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [selected, set_selected] = React.useState('');
    return <ComboBox {...props} current={selected} on_change={set_selected} />;
  },
};
