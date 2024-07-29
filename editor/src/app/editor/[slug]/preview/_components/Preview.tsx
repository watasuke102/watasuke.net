// watasuke.net > editor
// CopyRight (c) 2021-2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
'use client';

import {apiUrl} from '@watasuke.net/config/config';
import {css} from './Preview.css';
import '@watasuke.net/common/src/css/base.css';
import React from 'react';
import {ExtractHeading, Markdown, TocMapper} from '@watasuke.net/common';
import {EmbedCard, InnerEmbedCard} from '@common/EmbedCard';
import {ArticlePreviewPageQuery} from '@utils/graphql';

interface Props {
  article: ArticlePreviewPageQuery['article'];
}

export function Preview(props: Props): JSX.Element {
  return (
    <div className={css.container}>
      <h1>{props.article.title}</h1>
      <div className={css.toc}>
        <TocMapper headings={ExtractHeading(props.article.body)} />
      </div>
      <Markdown
        md={props.article.body.replaceAll('/img', `${apiUrl}/img/${props.article.slug}`)}
        embed_card={EmbedCard}
        inner_embed_card={InnerEmbedCard}
      />
    </div>
  );
}
