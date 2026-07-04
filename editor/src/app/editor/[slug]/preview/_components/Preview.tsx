// watasuke.net
// CopyRight (c) 2021-2026 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @watasuke1024
// This software is released under the MIT or MIT SUSHI-WARE License.
'use client';

import {apiUrl} from '@watasuke.net/config/config';
import {css} from './Preview.css';
import '@watasuke.net/common/style/base.css';
import React from 'react';
import {ExtractHeading} from '@watasuke.net/common/Heading/ExtractHeading';
import {Markdown} from '@watasuke.net/common/Markdown/Body/Body';
import {TocMapper} from '@watasuke.net/common/TocMapper/TocMapper';
import {EmbedCard} from '@common/EmbedCard/EmbedCard';
import {InnerEmbedCard} from '@common/EmbedCard/InnerEmbedCard';
import {ArticlePreviewPageQuery} from '@utils/graphql';

interface Props {
  article: NonNullable<ArticlePreviewPageQuery['article']>;
}

export function Preview(props: Props) {
  return (
    <div className={css.container}>
      <h1>{props.article.title}</h1>
      <div className={css.toc}>
        <TocMapper headings={ExtractHeading(props.article.body)} />
      </div>
      <Markdown
        md={props.article.body.replaceAll(
          '/img',
          `${apiUrl}/img/${props.article.slug}`,
        )}
        embed_card={EmbedCard}
        inner_embed_card={InnerEmbedCard}
      />
    </div>
  );
}
