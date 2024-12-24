// watasuke.net
// CopyRight (c) 2021-2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import * as css from './InnerEmbedCard.css';
import {initialized_a} from '@utils/initialized_a.css';
import Link from 'next/link';
import React from 'react';
import {ql} from '@utils/QL';

interface Props {
  slug: string;
}

export async function InnerEmbedCard(props: Props) {
  const slug = decodeURI(props.slug);
  const {article} = await ql().article({slug});

  return article ? (
    <Link href={`/blog/article/${props.slug}`} className={initialized_a}>
      <div className={css.container}>
        <span className={css.title}>{article.title}</span>
        <span className={css.url}>{`watasuke.net - ${slug}`}</span>
        <span className={css.description}>{article.tldr}</span>
      </div>
    </Link>
  ) : (
    <>
      {'[Failed to create InnerEmbedCard] '}
      <Link href={`/blog/article/${props.slug}`}>{slug}</Link>
    </>
  );
}
