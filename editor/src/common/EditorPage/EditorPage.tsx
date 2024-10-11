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
import {ComboBox} from '@common/ComboBox';
import LeftIcon from '@assets/left.svg';

export type ModifyStatus = 'none' | 'confirmation' | 'waiting' | 'succeeded';

type Props = {
  body: string;
  preview_body?: string;
  is_published: boolean;
  modify_status: ModifyStatus;
  commit_scope?: string;

  textarea_ref: React.MutableRefObject<HTMLTextAreaElement | null | undefined>;
  toolbox: React.ReactElement;
  header_text: React.ReactElement;
  modify_confirming_area: React.ReactElement;

  set_body: (s: string) => void;
  set_modify_status: (s: ModifyStatus) => void;
  modify: (commit_mes: string) => void;
};

export function EditorPage(props: Props): JSX.Element {
  const [commit_mes_prefix, set_commit_mes_prefix] = React.useState('update');
  const [commit_mes, set_commit_mes] = React.useState('');

  const build_commit_message = React.useCallback(() => {
    // build commit message
    // `[prefix]: ([scope]>)?[message]`
    let mes = commit_mes_prefix + ': ';
    if (props.commit_scope) {
      mes += props.commit_scope + '>';
    }
    return mes + commit_mes;
  }, [commit_mes, commit_mes_prefix, props]);

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
            ref={r => {
              props.textarea_ref.current = r;
            }}
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
        title='Confirm modification'
        desc=''
      >
        <div className={css.dialog}>
          {(() => {
            switch (props.modify_status) {
              case 'confirmation':
                return (
                  <div className={css.confirmation}>
                    <div>
                      {props.is_published ? (
                        <>
                          <p>
                            CMS will commit <strong>all saved changes</strong> and push; are you sure?
                          </p>
                          <div className={css.commit_info_editor}>
                            <span>prefix</span>
                            <ComboBox
                              options={['update', 'fix']}
                              current={commit_mes_prefix}
                              on_change={set_commit_mes_prefix}
                            />
                            <label htmlFor='edit_commit_message'>message</label>
                            <input
                              id='edit_commit_message'
                              type='text'
                              value={commit_mes}
                              onChange={e => set_commit_mes(e.target.value)}
                              className={css.commit_mes_editor}
                            />
                            <span>preview</span>
                            <strong>{build_commit_message()}</strong>
                          </div>
                        </>
                      ) : (
                        <span>
                          <strong>This article will be published</strong>; are you sure?
                          <br />
                          You cannot undo this change from the CMS (yet)
                        </span>
                      )}
                      {props.modify_confirming_area}
                    </div>
                    <div className={css.publish_button}>
                      <Button
                        type='contained'
                        text='Proceed'
                        aria_label='proceed'
                        on_click={() => {
                          props.set_modify_status('waiting');
                          props.modify(build_commit_message());
                        }}
                        // commit message is required when renewing (not publishing)
                        disabled={props.is_published && commit_mes === ''}
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
