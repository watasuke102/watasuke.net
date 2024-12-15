// watasuke.net
// CopyRight (c) 2021-2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import {apiUrl} from '@watasuke.net/config/config';
import * as css from './BlogContent.css';
import Giscus from '@giscus/react';
import React from 'react';
import {Link} from 'gatsby';
import {ShareList} from '@common';
import {Markdown, AdsInArticle, cs} from '@watasuke.net/common';
import {EmbedCard, InnerEmbedCard} from '@feature/Article';
import {TagContainer} from '@feature/Tag';
import {TocInArticle} from '@feature/TableOfContents';
import IconHistory from '@assets/icons/article/history.svg';
import IconUpload from '@assets/icons/article/upload.svg';
import IconLeft from '@assets/icons/general/left.svg';
import IconRight from '@assets/icons/general/right.svg';
import Article from '@mytypes/Article';

interface Props {
  data: Article;
  newer: Article | undefined;
  older: Article | undefined;
}

export function BlogContent(props: Props): JSX.Element {
  return (
    <>
      <h1 className={css.title}>{props.data.title}</h1>
      <section className={css.article_info}>
        <TagContainer tags={props.data.tags} />
        {/* 公開日と更新日 */}
        <div className={css.date_container}>
          <div className={css.date} aria-label='記事の更新日'>
            <IconHistory />
            <span>{props.data.updated_at.slice(0, 10)}</span>
          </div>
          <div className={css.date} aria-label='記事の投稿日'>
            <div>
              <IconUpload />
            </div>
            <span>{props.data.published_at.slice(0, 10)}</span>
          </div>
        </div>
      </section>

      <AdsInArticle />
      <TocInArticle />

      <Markdown
        md={props.data.body.replaceAll('/img', `${apiUrl}/img/${props.data.slug}`)}
        embed_card={EmbedCard}
        inner_embed_card={InnerEmbedCard}
      />
      <AdsInArticle />

      <hr />
      <nav>
        {props.newer ? (
          <Link to={'/blog/article/' + props.newer.slug} className={cs(css.adjacent_article, css.newer_link)}>
            <IconLeft />
            {props.newer.title}
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
          <Link to={'/blog/article/' + props.older.slug} className={cs(css.adjacent_article, css.older_link)}>
            {props.older.title}
            <IconRight />
          </Link>
        ) : (
          <span className={css.missing_older}>これより古い記事はありません</span>
        )}
      </nav>

      <section>
        <h2>Comments</h2>
        <p>
          Powered by <a href='https://github.com/giscus/giscus'>Giscus</a>
        </p>
        <Giscus
          repo='watasuke102/watasuke.net'
          repoId='MDEwOlJlcG9zaXRvcnkzNTc4OTQwNzk='
          category='Article'
          categoryId='DIC_kwDOFVUHv84CgSPQ'
          mapping='og:title'
          strict='0'
          reactionsEnabled='1'
          emitMetadata='0'
          inputPosition='top'
          theme='dark_dimmed'
          lang='ja'
          loading='lazy'
        />
      </section>
    </>
  );
}
