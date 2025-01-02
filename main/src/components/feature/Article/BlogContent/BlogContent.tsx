// watasuke.net
// CopyRight (c) 2021-2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import {apiUrl} from '@watasuke.net/config/config';
import * as css from './BlogContent.css';
import React from 'react';
import {ShareList} from '@common';
import Link from 'next/link';
import {AdsInArticle, Heading, Markdown, cs} from '@watasuke.net/common';
import {EmbedCard, InnerEmbedCard} from '@feature/Article';
import {TocInArticle} from '@feature/TableOfContents';
import {TagContainer} from '@feature/Tag';
import {CommentArea} from '../CommentArea/CommentArea';
import IconHistory from '@assets/icons/article/history.svg';
import IconUpload from '@assets/icons/article/upload.svg';
import IconLeft from '@assets/icons/general/left.svg';
import IconRight from '@assets/icons/general/right.svg';
import Article from '@mytypes/Article';

interface Props {
  data: Article;
  headings: Heading[];
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

      <hr />
      <nav>
        {props.newer ? (
          <Link
            href={'/blog/article/' + props.newer.slug}
            className={cs(css.adjacent_article, css.newer_link)}
          >
            <IconLeft /> {props.newer.title}
          </Link>
        ) : (
          <span>これより新しい記事はありません</span>
        )}
        <section className={css.share_box}>
          <span>Share this article</span>
          <span className={css.current_title}>{props.data.title}</span>
          <ShareList />
        </section>
        {props.older ? (
          <Link
            href={'/blog/article/' + props.older.slug}
            className={cs(css.adjacent_article, css.older_link)}
          >
            {props.older.title}
            <IconRight />
          </Link>
        ) : (
          <span className={css.missing_older}>
            これより古い記事はありません
          </span>
        )}
      </nav>
      <CommentArea />
    </>
  );
}
