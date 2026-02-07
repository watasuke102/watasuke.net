// watasuke.net
// CopyRight (c) 2021-2026 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @watasuke1024
// This software is released under the MIT or MIT SUSHI-WARE License.
'use client';

import {apiUrl} from '@watasuke.net/config/config';
import {css} from './MonthlyEditor.css';
import {GraphQLClient} from 'graphql-request';
import React from 'react';
import {useMonaco} from '@monaco-editor/react';
import {EditorPage} from '@common/EditorPage';
import {ModifyStatus} from '@common/EditorPage/EditorPage';
import {Checkbox} from '@common/Checkbox';
import {toast_reducer, ToastContext} from '@common/Toast';
import {MonacoContext} from '@features/MonacoEditor';
import {MonthlyEditPageQuery, getSdk} from '@utils/graphql';
import {useConfirmBeforeLeave} from '@utils/ConfirmBeforeLeave';

type Props = {
  monthly: NonNullable<MonthlyEditPageQuery['monthly']>;
};

export function MonthlyEditor(props: Props) {
  const year_str = props.monthly.year.toString();
  const month_str = props.monthly.month.toString().padStart(2, '0');
  const set_confirmation = useConfirmBeforeLeave();

  const [body, raw_set_body] = React.useState(props.monthly.body);
  const [tldr, raw_set_tldr] = React.useState(props.monthly.tldr);
  const set_body = React.useCallback(
    (s: string) => {
      raw_set_body(s);
      set_confirmation(true);
    },
    [set_confirmation],
  );
  const set_tldr = React.useCallback(
    (s: string) => {
      raw_set_tldr(s);
      set_confirmation(true);
    },
    [set_confirmation],
  );

  const [is_published, set_is_published] = React.useState(
    props.monthly.publishedAt.length > 0,
  );
  const [modify_status, set_modify_status] =
    React.useState<ModifyStatus>('none');
  const [should_commit_and_push, set_should_commit_and_push] =
    React.useState(true);
  const [toast_state, toast_dispatch] = React.useReducer(toast_reducer, {
    is_open: false,
    title: '',
    desc: '',
  });
  const monaco = useMonaco();

  const save = React.useCallback(async () => {
    try {
      const sdk = getSdk(new GraphQLClient(`${apiUrl}/graphql`));
      await sdk.updateMonthly({
        year: props.monthly.year,
        month: props.monthly.month,
        tldr,
        body: body,
      });
      toast_dispatch({type: 'open/normal', title: 'success'});
      set_confirmation(false);
    } catch (err) {
      toast_dispatch({type: 'open/err', err});
    }
  }, [body, props.monthly.month, props.monthly.year, set_confirmation, tldr]);

  const modify = React.useCallback(
    async (commit_message: string) => {
      try {
        const sdk = getSdk(new GraphQLClient(`${apiUrl}/graphql`));
        if (is_published) {
          if (commit_message.length === 0) {
            throw Error('Commit message is empty');
          }
          await sdk.renewMonthly({
            year: props.monthly.year,
            month: props.monthly.month,
            commit_message,
          });
        } else {
          await sdk.publishMonthly({
            year: props.monthly.year,
            month: props.monthly.month,
            should_commit_and_push,
          });
        }
        set_is_published(true);
        set_modify_status('succeeded');
      } catch (err) {
        toast_dispatch({type: 'open/err', err});
        set_modify_status('none');
      }
    },
    [
      is_published,
      props.monthly.month,
      props.monthly.year,
      should_commit_and_push,
    ],
  );

  return (
    <ToastContext.Provider
      value={{state: toast_state, dispatch: toast_dispatch}}
    >
      <MonacoContext.Provider value={monaco}>
        <EditorPage
          body={body}
          preview_body={body.replaceAll(
            '/img',
            `${apiUrl}/img/monthly/${year_str}/${month_str}`,
          )}
          set_body={set_body}
          save_handler={save}
          //
          is_published={is_published}
          toolbox_contents={
            <section>
              <div className={css.input}>
                <label htmlFor='monthly_editor_tldr'>
                  TL;DR
                  <br />
                  <span className={css.counter}>len: {tldr.length}</span>
                </label>
                <textarea
                  id='monthly_editor_tldr'
                  value={tldr}
                  onChange={e => set_tldr(e.target.value)}
                  className={css.input_text}
                />
              </div>
            </section>
          }
          header_url={`https://watasuke.net/blog/monthly/${year_str}/${month_str}`}
          header_text={`${year_str}/${month_str}`}
          //
          commit_scope={`${year_str}/${month_str}`}
          modify_status={modify_status}
          set_modify_status={set_modify_status}
          modify_confirming_area={
            <>
              <div className={css.warning_container}>
                {/* Google generates summary approximately 80 chars in Japanese */}
                {tldr.length > 80 && (
                  <p className={css.warning_text}>
                    <strong>warn: TL;DR is too long</strong> (len:{' '}
                    <strong>{tldr.length}</strong>), {/* */}
                    recommend: less than 80
                  </p>
                )}
              </div>
              {!is_published && (
                <Checkbox
                  label='Commit and Push to remote Git repo'
                  checked={should_commit_and_push}
                  on_click={() => set_should_commit_and_push(f => !f)}
                />
              )}
            </>
          }
          modify_handler={modify}
          //
          image_post_base_url={`monthly/${year_str}/${month_str}`}
        />
      </MonacoContext.Provider>
    </ToastContext.Provider>
  );
}
