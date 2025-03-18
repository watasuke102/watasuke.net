// watasuke.net > editor
// CopyRight (c) 2021-2025 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @watasuke1024
// This software is released under the MIT or MIT SUSHI-WARE License.
'use client';

import {apiUrl} from '@watasuke.net/config/config';
import {css} from './Page.css';
import {GraphQLClient} from 'graphql-request';
import {useImmerReducer} from 'use-immer';
import React from 'react';
import {EditorPage} from '@common/EditorPage';
import {ModifyStatus} from '@common/EditorPage/EditorPage';
import {Checkbox} from '@common/Checkbox';
import {toast_reducer, ToastContext} from '@common/Toast';
import {useShortcut} from '@common/useShortcut/useShortcut';
import {Toolbox} from '@features/ArticleEditor/Toolbox/Toolbox';
import {ArticleEditPageQuery, getSdk} from '@utils/graphql';
import {article_reducer} from '../ArticleReducer';

type Props = {
  article: NonNullable<ArticleEditPageQuery['article']>;
  tags: ArticleEditPageQuery['allTags'];
};

export function Page(props: Props) {
  const textarea_ref = React.useRef<HTMLTextAreaElement | null>();
  const [state, dispatch] = useImmerReducer(article_reducer, {
    body: props.article.body,
    title: props.article.title,
    is_favorite: props.article.isFavorite,
    tldr: props.article.tldrReal ?? '',
    tags: props.article.tags.map(e => e.slug),
    all_tags: props.tags,
  });
  const [is_published, set_is_published] = React.useState(
    props.article.isPublished,
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

  const save = React.useCallback(async () => {
    try {
      const sdk = getSdk(new GraphQLClient(`${apiUrl}/graphql`));
      await sdk.updateArticle({
        slug: props.article.slug,
        title: state.title,
        tldr: state.tldr,
        tags: state.tags,
        isFavorite: state.is_favorite,
        body: state.body ?? '',
      });
      toast_dispatch({type: 'open/normal', title: 'success'});
    } catch (err) {
      toast_dispatch({type: 'open/err', err});
    }
  }, [props.article, state]);

  const modify = React.useCallback(
    async (commit_message: string) => {
      try {
        const sdk = getSdk(new GraphQLClient(`${apiUrl}/graphql`));
        if (is_published) {
          if (commit_message.length === 0) {
            throw Error('Commit message is empty');
          }
          await sdk.renewArticle({
            slug: props.article.slug,
            commit_message,
          });
        } else {
          await sdk.publishArticle({
            slug: props.article.slug,
            should_commit_and_push: should_commit_and_push,
          });
        }
        set_is_published(true);
        set_modify_status('succeeded');
      } catch (err) {
        toast_dispatch({type: 'open/err', err});
        set_modify_status('none');
      }
    },
    [props.article.slug, should_commit_and_push, is_published],
  );

  useShortcut([{keycode: 'KeyS', handler: save}], {ctrl: true});

  return (
    <ToastContext.Provider
      value={{state: toast_state, dispatch: toast_dispatch}}
    >
      <EditorPage
        body={state.body}
        preview_body={state.body.replaceAll(
          '/img',
          `${apiUrl}/img/${props.article.slug}`,
        )}
        is_published={is_published}
        modify_status={modify_status}
        commit_scope={props.article.slug}
        //
        textarea_ref={textarea_ref}
        toolbox={
          <Toolbox
            slug={props.article.slug}
            tldr_placeholder={props.article.tldr}
            is_published={is_published}
            state={state}
            dispatcher={dispatch}
            ref={textarea_ref}
            publish_button_handler={() => set_modify_status('confirmation')}
            save_button_handler={save}
          />
        }
        header_text={
          is_published ? (
            <a
              href={`https://watasuke.net/blog/article/${props.article.slug}`}
              rel='noreferrer'
              target='_blank'
              className={css.header_title}
            >
              {state.title}
            </a>
          ) : (
            <span className={css.header_title}>{state.title}</span>
          )
        }
        modify_confirming_area={
          <>
            <div className={css.warning_container}>
              {state.tags.length === 0 && (
                <strong className={css.warning_text}>
                  warn: Tag is empty!
                </strong>
              )}
              {/* Google generates summary approximately 80 chars in Japanese */}
              {state.tldr.length > 80 && (
                <p className={css.warning_text}>
                  <strong>warn: TL;DR is too long</strong> (len:{' '}
                  <strong>{state.tldr.length}</strong>), {/* */}
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
        set_body={s => dispatch({type: 'body/update', data: s})}
        set_modify_status={set_modify_status}
        modify={modify}
      />
    </ToastContext.Provider>
  );
}
