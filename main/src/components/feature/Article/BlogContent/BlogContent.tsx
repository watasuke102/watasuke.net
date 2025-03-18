// watasuke.net
// CopyRight (c) 2021-2025 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @watasuke1024
// This software is released under the MIT or MIT SUSHI-WARE License.
import {apiUrl} from '@watasuke.net/config/config';
import * as css from './BlogContent.css';
import React from 'react';
import {ShareList} from '@common';
import {AdsInArticle, Heading, Markdown} from '@watasuke.net/common';
import {EmbedCard, InnerEmbedCard} from '@feature/Article';
import {TocInArticle} from '@feature/TableOfContents';
import {TagContainer} from '@feature/Tag';
import {CommentArea} from '../CommentArea/CommentArea';
import IconHistory from '@assets/icons/article/history.svg';
import IconUpload from '@assets/icons/article/upload.svg';
import Article from '@mytypes/Article';

interface Props {
  data: Article;
  headings: Heading[];
  // FIXME: these are not used
  newer: Article | undefined;
  older: Article | undefined;
}

export function BlogContent(props: Props) {
  return (
    <>
      <h1 className={css.title}>{props.data.title}</h1>
      <section className={css.article_info}>
        <TagContainer tags={props.data.tags} />
        {/* 公開日と更新日 */}
        <div className={css.date_container}>
          <div className={css.date} aria-label='記事の更新日'>
            <IconHistory />
            <span>{props.data.updatedAt.slice(0, 10)}</span>
          </div>
          <div className={css.date} aria-label='記事の投稿日'>
            <div>
              <IconUpload />
            </div>
            <span>{props.data.publishedAt.slice(0, 10)}</span>
          </div>
        </div>
      </section>

      <AdsInArticle />
      <TocInArticle headings={props.headings} />

      <Markdown
        md={props.data.body.replaceAll(
          '/img',
          `${apiUrl}/img/${props.data.slug}`,
        )}
        embed_card={EmbedCard}
        inner_embed_card={InnerEmbedCard}
      />
      <AdsInArticle />
      <section className={css.share_box}>
        <span>Share this article</span>
        <span className={css.current_title}>{props.data.title}</span>
        <ShareList />
      </section>
      <CommentArea />
    </>
  );
}
