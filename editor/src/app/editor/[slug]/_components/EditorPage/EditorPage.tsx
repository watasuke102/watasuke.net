// watasuke.net > editor
// CopyRight (c) 2021-2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
'use client';

import {css, dialog_width, toast} from './EditorPage.css';
import CloseIcon from '@cms-assets/close.svg';
import LeftIcon from '@cms-assets/left.svg';
import {Button} from '@cms-common/Button';
import {Dialog} from '@cms-common/Dialog';
import {EmbedCard, InnerEmbedCard} from '@cms-common/EmbedCard';
import {ErrorBoundary} from '@cms-common/ErrorBoundary';
import {QlError} from '@cms-types/QlError';
import {ArticleEditPageQuery, getSdk} from '@cms-utils/graphql';
import * as Toast from '@radix-ui/react-toast';
import {GraphQLClient} from 'graphql-request';
import Link from 'next/link';
import React from 'react';
import {BarLoader} from 'react-spinners';
import {useImmerReducer} from 'use-immer';
import {color, Markdown} from '@watasuke.net/common';
import {apiUrl} from '@watasuke.net/config/config';
import Loading from '../../loading';
import {article_reducer} from '../ArticleReducer';
import MdEditor from '../MdEditor/MdEditor';

type Props = {
  article: NonNullable<ArticleEditPageQuery['article']>;
  tags: ArticleEditPageQuery['allTags'];
};

export default function EditorPage({article, tags}: Props): JSX.Element {
  const [state, dispatch] = useImmerReducer(article_reducer, {
    body: article.body,
    title: article.title,
    tldr: article.tldrReal ?? '',
    tags: article.tags.map(e => e.slug),
    all_tags: tags,
  });
  const [is_published, set_is_published] = React.useState(article.isPublished);
  const [toast_status, set_toast_status] = React.useState({title: 'success', desc: ''});
  const [is_toast_open, set_is_toast_open] = React.useState(false);
  const [publish_stat, set_publish_stat] = React.useState<'none' | 'confirmation' | 'waiting' | 'succeeded'>('none');

  const save = React.useCallback(async () => {
    try {
      const sdk = getSdk(new GraphQLClient(`${apiUrl}/graphql`));
      await sdk.updateArticle({
        slug: article.slug,
        title: state.title,
        tldr: state.tldr,
        tags: state.tags,
        isFavorite: false,
        body: state.body ?? '',
      });
      set_toast_status({title: 'success', desc: ''});
    } catch (err) {
      const error = (err as QlError).response.errors[0];
      set_toast_status({title: error.message, desc: error.extensions});
    }
    set_is_toast_open(true);
  }, [article, state]);

  const publish = React.useCallback(async () => {
    if (is_published) {
      return;
    }
    try {
      const sdk = getSdk(new GraphQLClient(`${apiUrl}/graphql`));
      await sdk.publishArticle({slug: article.slug});
      set_is_published(true);
      set_publish_stat('succeeded');
    } catch (err) {
      const error = (err as QlError).response.errors[0];
      set_toast_status({title: error.message, desc: error.extensions});
      set_publish_stat('none');
      set_is_toast_open(true);
    }
  }, [is_published]);

  // hydration errorが出るのを回避する
  const [is_first_render, set_is_first_render] = React.useState(true);
  React.useEffect(() => set_is_first_render(false), []);
  if (is_first_render) {
    return <Loading />;
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
        <div className={css.dialog}>
          <></>
          {(() => {
            switch (publish_stat) {
              case 'confirmation':
                return (
                  <Button
                    type='contained'
                    text='Publish'
                    aria_label='publish'
                    on_click={() => {
                      set_publish_stat('waiting');
                      publish();
                    }}
                  />
                );
              // case 'confirmation':
              case 'waiting':
                return (
                  <div className={css.publish_waiting_status}>
                    <BarLoader color={color.p0} width={dialog_width} />
                    <span className={css.publish_waiting_label}>Waiting for response from CMS...</span>
                  </div>
                );
              case 'succeeded':
                return (
                  <div className={css.publish_waiting_status}>
                    <span className={css.publish_waiting_label}>succeeded!</span>
                  </div>
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
