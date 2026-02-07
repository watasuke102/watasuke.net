// watasuke.net
// CopyRight (c) 2021-2026 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @watasuke1024
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
import {useShortcut} from '@common/useShortcut/useShortcut';
import {MonacoEditor} from '@features/MonacoEditor';
import {Toolbox} from './Toolbox/Toolbox';
import LeftIcon from '@assets/left.svg';

export type ModifyStatus = 'none' | 'confirmation' | 'waiting' | 'succeeded';

type Props = {
  body: string;
  preview_body?: string;
  set_body: (s: string) => void;
  save_handler: () => Promise<void>;

  is_published: boolean;
  toolbox_contents?: React.ReactNode;

  /// header text will be a link to this URL after publishing
  header_url: string;
  header_text: string;

  /// props related to modification (publish/renew)
  modify_status: ModifyStatus;
  set_modify_status: (s: ModifyStatus) => void;
  modify_confirming_area: React.ReactNode;
  modify_handler: (commit_mes: string) => void;
  /// ``{prefix}: {scope}>{message}`
  commit_scope?: string;

  /// image will posted to /img/{image_post_base_url}/{file_name}
  image_post_base_url?: string;
};

export function EditorPage(props: Props) {
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

  useShortcut([{keycode: 'KeyS', handler: props.save_handler}], {ctrl: true});

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
        {props.is_published ? (
          <a
            href={props.header_url}
            rel='noreferrer'
            target='_blank'
            className={css.header_title}
          >
            {props.header_text}
          </a>
        ) : (
          <span className={css.header_title}>{props.header_text}</span>
        )}
      </header>
      <section className={css.container}>
        <div className={css.editor}>
          <div className={css.toolbox_wrapper}>
            <Toolbox
              contents={props.toolbox_contents}
              is_published={props.is_published}
              save_button_handler={props.save_handler}
              publish_button_handler={() =>
                props.set_modify_status('confirmation')
              }
              image_post_base_url={props.image_post_base_url}
            />
          </div>
          <div className={css.edit_area}>
            <MonacoEditor body={props.body} on_change={props.set_body} />
          </div>
        </div>
        <div className={css.preview}>
          <ErrorBoundary>
            <Markdown
              md={props.preview_body ?? props.body}
              embed_card={EmbedCard}
              inner_embed_card={InnerEmbedCard}
            />
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
                            CMS will commit <strong>all saved changes</strong>{' '}
                            and push; are you sure?
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
                          <strong>This article will be published</strong>; are
                          you sure?
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
                          props.modify_handler(build_commit_message());
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
                    <span className={css.publish_waiting_label}>
                      Waiting for response from CMS...
                    </span>
                  </>
                );
              case 'succeeded':
                return (
                  <span className={css.publish_waiting_label}>succeeded!</span>
                );
              default:
                return <></>;
            }
          })()}
        </div>
      </Dialog>
    </>
  );
}
