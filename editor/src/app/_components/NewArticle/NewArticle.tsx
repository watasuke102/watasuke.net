// watasuke.net > editor
// CopyRight (c) 2021-2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
'use client';

import {css} from './NewArticle.css';
import {Button} from '@cms-common/Button';
import {Dialog} from '@cms-common/Dialog';
import {getSdk} from '@cms-utils/graphql';
import * as Form from '@radix-ui/react-form';
import {GraphQLClient} from 'graphql-request';
import {useRouter} from 'next/navigation';
import React from 'react';
import {apiUrl} from '@watasuke.net/config/config';

// watasuke.net > editor
// CopyRight (c) 2021-2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.

// watasuke.net > editor
// CopyRight (c) 2021-2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.

// watasuke.net > editor
// CopyRight (c) 2021-2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.

// watasuke.net > editor
// CopyRight (c) 2021-2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.

// watasuke.net > editor
// CopyRight (c) 2021-2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.

// watasuke.net > editor
// CopyRight (c) 2021-2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.

// watasuke.net > editor
// CopyRight (c) 2021-2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.

// watasuke.net > editor
// CopyRight (c) 2021-2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.

// watasuke.net > editor
// CopyRight (c) 2021-2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.

// watasuke.net > editor
// CopyRight (c) 2021-2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.

// watasuke.net > editor
// CopyRight (c) 2021-2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.

// watasuke.net > editor
// CopyRight (c) 2021-2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.

// watasuke.net > editor
// CopyRight (c) 2021-2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.

// FIXME: DRY
const slug_validator = /^[0-9a-z-]+$/;

export function NewArticle(): JSX.Element {
  const [is_dialog_open, set_is_dialog_open] = React.useState(false);
  const [slug, set_slug] = React.useState('');
  const [title, set_title] = React.useState('');
  const router = useRouter();

  const new_article = React.useCallback(() => {
    if (slug === '' || title === '') {
      return;
    }
    if (!slug_validator.test(slug)) {
      return;
    }
    const sdk = getSdk(new GraphQLClient(`${apiUrl}/graphql`));
    sdk
      .newArticle({
        slug,
        title,
      })
      .then(() => router.push(`/editor/${slug}`));
  }, [slug, title]);

  const proceed_by_ctrl_enter = React.useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (!e.repeat && e.ctrlKey && e.key === 'Enter') {
        new_article();
      }
    },
    [new_article],
  );

  return (
    <>
      <div className={css.header}>
        <h2>Draft</h2>
        <div>
          <Button
            type='contained'
            text='New article'
            aria_label='new article'
            on_click={() => set_is_dialog_open(true)}
          />
        </div>
      </div>
      <Dialog
        is_open={is_dialog_open}
        set_is_open={set_is_dialog_open}
        title='Add new article'
        desc='Determine slug and title (you can change them later)'
      >
        <Form.Root onSubmit={e => e.preventDefault()} className={css.dialog_container}>
          <Form.Field name='slug' className={css.form_field}>
            <Form.Label className={css.label}>Slug</Form.Label>
            <Form.Message match='valueMissing'>Cannot be empty</Form.Message>
            <Form.Message match={val => !slug_validator.test(val)}>Invaid slug; use {`${slug_validator}`}</Form.Message>
            <Form.Control asChild>
              <input
                className={css.input}
                type='text'
                value={slug}
                onChange={e => set_slug(e.target.value)}
                onKeyDown={proceed_by_ctrl_enter}
                required
              />
            </Form.Control>
          </Form.Field>
          <Form.Field name='title' className={css.form_field}>
            <Form.Label className={css.label}>Title</Form.Label>
            <Form.Message match='valueMissing'>Cannot be empty</Form.Message>
            <Form.Control asChild>
              <input
                className={css.input}
                type='text'
                value={title}
                onChange={e => set_title(e.target.value)}
                onKeyDown={proceed_by_ctrl_enter}
                required
              />
            </Form.Control>
          </Form.Field>
          <Form.Submit asChild>
            <Button type='contained' text='Create' aria_label='create' on_click={new_article} />
          </Form.Submit>
        </Form.Root>
      </Dialog>
    </>
  );
}
