// watasuke.net
// CopyRight (c) 2021-2026 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @watasuke1024
// This software is released under the MIT or MIT SUSHI-WARE License.
'use client';

import {apiUrl} from '@watasuke.net/config/config';
import {css} from './NewMonthly.css';
import * as Form from '@radix-ui/react-form';
import {GraphQLClient} from 'graphql-request';
import {useRouter} from 'next/navigation';
import React from 'react';
import {Button} from '@common/Button';
import {Dialog} from '@common/Dialog';
import {getSdk} from '@utils/graphql';

export function NewMonthly() {
  const [is_dialog_open, set_is_dialog_open] = React.useState(false);
  const [month, set_month] = React.useState(String(new Date().getMonth() + 1));
  const [year, set_year] = React.useState(String(new Date().getFullYear()));
  const router = useRouter();

  const new_monthly = React.useCallback(() => {
    const sdk = getSdk(new GraphQLClient(`${apiUrl}/graphql`));
    sdk
      .newMonthly({
        month: Number(month),
        year: Number(year),
      })
      .then(() => router.push(`/editor/monthly/${year}/${month}`));
  }, [router, month, year]);

  return (
    <>
      <Button
        type='contained'
        text='New monthly'
        aria_label='new monthly'
        on_click={() => set_is_dialog_open(true)}
      />
      <Dialog
        is_open={is_dialog_open}
        set_is_open={set_is_dialog_open}
        title='Add new monthly'
        desc=''
      >
        <Form.Root
          onSubmit={e => e.preventDefault()}
          className={css.dialog_container}
        >
          <Form.Field name='title' className={css.form_field}>
            <Form.Label className={css.label}>Year</Form.Label>
            <Form.Control asChild>
              <input
                className={css.input}
                type='number'
                value={year}
                onChange={e => set_year(e.target.value)}
                required
              />
            </Form.Control>
          </Form.Field>
          <Form.Field name='slug' className={css.form_field}>
            <Form.Label className={css.label}>Month</Form.Label>
            <Form.Control asChild>
              <input
                className={css.input}
                type='number'
                value={month}
                onChange={e => set_month(e.target.value)}
                required
              />
            </Form.Control>
          </Form.Field>
          <Form.Submit asChild>
            <Button
              type='contained'
              text='Create'
              aria_label='create'
              on_click={new_monthly}
            />
          </Form.Submit>
        </Form.Root>
      </Dialog>
    </>
  );
}
