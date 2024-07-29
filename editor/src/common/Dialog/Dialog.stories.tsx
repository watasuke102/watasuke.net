// watasuke.net > editor
// CopyRight (c) 2021-2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import '@common/global.css';
import '@watasuke.net/common/src/css/base.css';
import React from 'react';
import {Button} from '@common/Button';
import {Dialog} from './Dialog';
import type {Meta, StoryObj} from '@storybook/react';

const meta: Meta<typeof Dialog> = {
  component: Dialog,
  parameters: {
    layout: 'centered',
  },
};
export default meta;

export const Main: StoryObj<typeof Dialog> = {
  args: {
    title: 'Title',
    desc: 'Description',
  },
  render: props => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [is_open, set_is_open] = React.useState(false);
    return (
      <>
        <Button text='open' aria_label='open' type='contained' on_click={() => set_is_open(true)} />
        <Dialog is_open={is_open} set_is_open={set_is_open} title={props.title} desc={props.desc}>
          <span>test</span>
        </Dialog>
      </>
    );
  },
};
