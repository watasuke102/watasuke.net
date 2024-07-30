// watasuke.net > editor
// CopyRight (c) 2021-2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
'use client';

import {apiUrl} from '@watasuke.net/config/config';
import {css, dialog_width, toast} from './Page.css';
import * as Toast from '@radix-ui/react-toast';
import {GraphQLClient} from 'graphql-request';
import Link from 'next/link';
import React from 'react';
import {BarLoader} from 'react-spinners';
import {useImmerReducer} from 'use-immer';
import {color, Markdown} from '@watasuke.net/common';
import {Button} from '@common/Button';
import {Dialog} from '@common/Dialog';
import {EmbedCard, InnerEmbedCard} from '@common/EmbedCard';
import {ErrorBoundary} from '@common/ErrorBoundary';
import {Spinner} from '@common/Spinner';
import {ArticleEditPageQuery, getSdk} from '@utils/graphql';
import {MdEditor} from '../MdEditor/MdEditor';
import {article_reducer} from '../ArticleReducer';
import CloseIcon from '@assets/close.svg';
import LeftIcon from '@assets/left.svg';
import {ErrorQL} from '@mytypes/ErrorQL';
import {Checkbox} from '@common/Checkbox';

type Props = {
  article: NonNullable<ArticleEditPageQuery['article']>;
  tags: ArticleEditPageQuery['allTags'];
};

type ToastStatus = {title: string; desc: string};

export function Page({article, tags}: Props): JSX.Element {
  const [state, dispatch] = useImmerReducer(article_reducer, {
    body: article.body,
    title: article.title,
    is_favorite: article.isFavorite,
    tldr: article.tldrReal ?? '',
    tags: article.tags.map(e => e.slug),
    all_tags: tags,
  });
  const [is_published, set_is_published] = React.useState(article.isPublished);
  const [toast_status, set_toast_status] = React.useState<ToastStatus>({title: 'success', desc: ''});
  const [is_toast_open, set_is_toast_open] = React.useState(false);
  const [should_commit_and_push, set_should_commit_and_push] = React.useState(true);
  const [publish_stat, set_publish_stat] = React.useState<'none' | 'confirmation' | 'waiting' | 'succeeded'>('none');

  function compose_toast_from_err(err: unknown): ToastStatus {
    if (err.response && Array.isArray(err.response.errors)) {
      console.log('Following err will be shown as toast', {err});
      const error = (err as ErrorQL).response.errors[0];
      return {title: error.message, desc: error.extensions};
    } else if (err instanceof Error) {
      return {title: err.name, desc: err.message};
    }
    return {title: 'Unknown Error', desc: ''};
  }

  const save = React.useCallback(async () => {
    try {
      const sdk = getSdk(new GraphQLClient(`${apiUrl}/graphql`));
      await sdk.updateArticle({
        slug: article.slug,
        title: state.title,
        tldr: state.tldr,
        tags: state.tags,
        isFavorite: state.is_favorite,
        body: state.body ?? '',
      });
      set_toast_status({title: 'success', desc: ''});
    } catch (err) {
      set_toast_status(compose_toast_from_err(err));
    }
    set_is_toast_open(true);
  }, [article, state]);

  const publish = React.useCallback(async () => {
    if (is_published) {
      return;
    }
    try {
      const sdk = getSdk(new GraphQLClient(`${apiUrl}/graphql`));
      await sdk.publishArticle({
        slug: article.slug,
        should_commit_and_push: should_commit_and_push,
      });
      set_is_published(true);
      set_publish_stat('succeeded');
    } catch (err) {
      set_toast_status(compose_toast_from_err(err));
      set_publish_stat('none');
      set_is_toast_open(true);
    }
  }, [article.slug, should_commit_and_push, is_published]);

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
        {is_published ? (
          <a
            href={`https://watasuke.net/blog/article/${article.slug}`}
            rel='noreferrer'
            target='_blank'
            className={css.header_title}
          >
            {state.title}
          </a>
        ) : (
          <span className={css.header_title}>{state.title}</span>
        )}
      </header>
      <section className={css.container}>
        <MdEditor
          slug={article.slug}
          tldr_placeholder={article.tldr}
          is_published={is_published}
          state={state}
          dispatcher={dispatch}
          publish_button_handler={() => set_publish_stat('confirmation')}
          save_button_handler={save}
        />
        <div className={css.preview}>
          <ErrorBoundary>
            <Markdown
              md={state.body.replaceAll('/img', `${apiUrl}/img/${article.slug}`)}
              embed_card={EmbedCard}
              inner_embed_card={InnerEmbedCard}
            />
          </ErrorBoundary>
        </div>
      </section>

      <Toast.Provider swipeDirection='up' duration={3000}>
        <Toast.Root className={toast.root} open={is_toast_open} onOpenChange={set_is_toast_open}>
          <Toast.Title className={toast.title}>{toast_status.title}</Toast.Title>
          <Toast.Description className={toast.desc}>{toast_status.desc}</Toast.Description>
          <Toast.Close className={toast.close}>
            <CloseIcon />
          </Toast.Close>
        </Toast.Root>
        <Toast.Viewport className={toast.viewpoint} />
      </Toast.Provider>

      <Dialog
        is_open={publish_stat !== 'none'}
        set_is_open={f => {
          if (!f) {
            set_publish_stat('none');
          }
        }}
        title='Are you sure to publish?'
        desc='You cannot undo this change from the CMS (yet)'
      >
        <Checkbox
          label='Commit and Push to remote Git repo'
          checked={should_commit_and_push}
          on_click={() => set_should_commit_and_push(f => !f)}
        />
        <div className={css.dialog}>
          {(() => {
            switch (publish_stat) {
              case 'confirmation':
                return (
                  <div className={css.confirmation}>
                    <div>
                      {state.tags.length === 0 && <strong className={css.warning_text}>warn: Tag is empty!</strong>}
                      {/* Google generates summary approximately 80 chars in Japanese */}
                      {state.tldr.length > 80 && (
                        <p className={css.warning_text}>
                          <strong>warn: TL;DR is too long</strong> (len: <strong>{state.tldr.length}</strong>),
                          recommend: less than 80
                        </p>
                      )}
                    </div>
                    <div className={css.publish_button}>
                      <Button
                        type='contained'
                        text='Publish'
                        aria_label='publish'
                        on_click={() => {
                          set_publish_stat('waiting');
                          publish();
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
