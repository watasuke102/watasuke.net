// watasuke.net
// CopyRight (c) 2021-2026 watasuke
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
import {useMonaco} from '@monaco-editor/react';
import {EditorPage} from '@common/EditorPage';
import {ModifyStatus} from '@common/EditorPage/EditorPage';
import {Checkbox} from '@common/Checkbox';
import {toast_reducer, ToastContext} from '@common/Toast';
import {MonacoContext} from '@features/MonacoEditor';
import {ArticleEditPageQuery, getSdk} from '@utils/graphql';
import {useConfirmBeforeLeave} from '@utils/ConfirmBeforeLeave';
import {article_reducer} from '../ArticleReducer';
import {FrontmatterEditor} from '../FrontmatterEditor/FrontmatterEditor';

type Props = {
  article: NonNullable<ArticleEditPageQuery['article']>;
  tags: ArticleEditPageQuery['allTags'];
};

export function Page(props: Props) {
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
  const monaco = useMonaco();

  const is_first_rendering = React.useRef(true);
  const set_confirmation = useConfirmBeforeLeave();
  // prevent execution on the first rendering
  React.useEffect(() => {
    is_first_rendering.current = true;
  }, []);
  React.useEffect(() => {
    if (is_first_rendering.current) {
      is_first_rendering.current = false;
    } else {
      set_confirmation(true);
    }
  }, [set_confirmation, state]);

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
      set_confirmation(false);
    } catch (err) {
      toast_dispatch({type: 'open/err', err});
    }
  }, [props.article.slug, set_confirmation, state]);

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

  return (
    <ToastContext.Provider
      value={{state: toast_state, dispatch: toast_dispatch}}
    >
      <MonacoContext.Provider value={monaco}>
        <EditorPage
          body={state.body}
          preview_body={state.body.replaceAll(
            '/img',
            `${apiUrl}/img/${props.article.slug}`,
          )}
          set_body={s => dispatch({type: 'body/update', data: s})}
          save_handler={save}
          //
          is_published={is_published}
          toolbox_contents={
            <FrontmatterEditor
              state={state}
              dispatcher={dispatch}
              tldr_placeholder={props.article.tldr}
            />
          }
          header_url={`https://watasuke.net/blog/article/${props.article.slug}`}
          header_text={state.title}
          //
          commit_scope={props.article.slug}
          modify_status={modify_status}
          set_modify_status={set_modify_status}
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
          modify_handler={modify}
          //
          is_image_uploader_enabled={true}
          image_post_base_url={props.article.slug}
        />
      </MonacoContext.Provider>
    </ToastContext.Provider>
  );
}
