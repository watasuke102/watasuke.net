// watasuke.net
// CopyRight (c) 2021-2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import * as css from './BlogContent.css';
import Giscus from '@giscus/react';
import React from 'react';
import {Markdown} from '@watasuke.net/common';
import {AdsInArticle} from '@watasuke.net/common/src/Ads';
import {EmbedCard, InnerEmbedCard, TocInArticle} from '@feature/Article';
import {TagContainer} from '@feature/Tag';
import extract_link from '@utils/ExtractLink';
import Article from '@mytypes/Article';
import Heading from '@mytypes/Heading';
import {apiUrl} from '../../../../../config';
import IconHistory from '@assets/icons/article/history.svg';
import IconUpload from '@assets/icons/article/upload.svg';

interface Props {
  data: Article;
  headings: Heading[] | undefined;
}

export function BlogContent(props: Props): React.ReactElement {
  console.log(extract_link(props.data.body));
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
      {props.headings && <TocInArticle table_of_contents={props.headings} />}

      <Markdown
        md={props.data.body.replaceAll('/img', `${apiUrl}/img/${props.data.slug}`)}
        embed_card={EmbedCard}
        inner_embed_card={InnerEmbedCard}
      />
      <AdsInArticle />

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
