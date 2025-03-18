// watasuke.net
// CopyRight (c) 2021-2025 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @watasuke1024
// This software is released under the MIT or MIT SUSHI-WARE License.
import * as css from './InnerEmbedCard.css';
import {initialized_a} from '@utils/initialized_a.css';
import Link from 'next/link';
import React from 'react';
import {cs} from '@watasuke.net/common';
import {ql} from '@utils/QL';

interface Props {
  slug: string;
}

export async function InnerEmbedCard(props: Props) {
  const slug = decodeURI(props.slug);
  const {article} = await ql().article({slug});

  return article ? (
    <Link
      href={`/blog/article/${props.slug}`}
      className={cs(initialized_a, css.container)}
    >
      <span className={css.title}>{article.title}</span>
      <span className={css.url}>{`watasuke.net - ${slug}`}</span>
      <span className={css.description}>{article.tldr}</span>
    </Link>
  ) : (
    <>
      {'[Failed to create InnerEmbedCard] '}
      <Link href={`/blog/article/${props.slug}`}>{slug}</Link>
    </>
  );
}
