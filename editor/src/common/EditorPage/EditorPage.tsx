// watasuke.net > editor
// CopyRight (c) 2021-2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
'use client';

import {css, dialog_width} from './EditorPage.css';
import Link from 'next/link';
import React from 'react';
import {BarLoader} from 'react-spinners';
import {color, Markdown} from '@watasuke.net/common';
import {Button} from '@common/Button';
import {Dialog} from '@common/Dialog';
import {EmbedCard, InnerEmbedCard} from '@common/EmbedCard';
import {ErrorBoundary} from '@common/ErrorBoundary';
import {Spinner} from '@common/Spinner';
import {Toast} from '@common/Toast';
import LeftIcon from '@assets/left.svg';

export type ModifyStatus = 'none' | 'confirmation' | 'waiting' | 'succeeded';

type Props = {
  body: string;
  preview_body?: string;
  is_published: boolean;
  modify_status: ModifyStatus;

  textarea_ref: React.MutableRefObject<HTMLTextAreaElement | null | undefined>;
  toolbox: React.ReactElement;
  header_text: React.ReactElement;
  modify_confirming_area: React.ReactElement;

  set_body: (s: string) => void;
  set_modify_status: (s: ModifyStatus) => void;
  publish: () => void;
};

export function EditorPage(props: Props): JSX.Element {
  // hydration errorが出るのを回避する
  const [is_first_render, set_is_first_render] = React.useState(true);
  React.useEffect(() => set_is_first_render(false), []);
  if (is_first_render) {
    return <Spinner />;
  }

  return (
    <>
      <header className={css.header}>
        <Link href='/' className={css.back_button}>
          <LeftIcon />
        </Link>
        {props.header_text}
      </header>
      <section className={css.container}>
        <div className={css.editor}>
          <div className={css.toolbox_wrapper}>{props.toolbox}</div>
          <textarea
            className={css.textarea}
            ref={r => (props.textarea_ref.current = r)}
            value={props.body}
            onChange={e => props.set_body(e.target.value)}
          />
        </div>
        <div className={css.preview}>
          <ErrorBoundary>
            <Markdown md={props.preview_body ?? props.body} embed_card={EmbedCard} inner_embed_card={InnerEmbedCard} />
          </ErrorBoundary>
        </div>
      </section>

      <Toast />

      <Dialog
        is_open={props.modify_status !== 'none'}
        set_is_open={f => {
          if (!f) {
            props.set_modify_status('none');
          }
        }}
        title='Are you sure to publish?'
        desc='You cannot undo this change from the CMS (yet)'
      >
        <div className={css.dialog}>
          {(() => {
            switch (props.modify_status) {
              case 'confirmation':
                return (
                  <div className={css.confirmation}>
                    {props.modify_confirming_area}
                    <div className={css.publish_button}>
                      <Button
                        type='contained'
                        text='Publish'
                        aria_label='publish'
                        on_click={() => {
                          props.set_modify_status('waiting');
                          props.publish();
                        }}
                      />
                    </div>
                  </div>
                );
              case 'waiting':
                return (
                  <>
                    <BarLoader color={color.p0} width={dialog_width} />
                    <span className={css.publish_waiting_label}>Waiting for response from CMS...</span>
                  </>
                );
              case 'succeeded':
                return <span className={css.publish_waiting_label}>succeeded!</span>;
              default:
                return <></>;
            }
          })()}
        </div>
      </Dialog>
    </>
  );
}
