// watasuke.net > editor
// CopyRight (c) 2021-2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
'use client';

import {css} from './ArticlesTable.css';
import {useRouter} from 'next/navigation';
import React from 'react';
import {AllArticlesQuery} from '@utils/graphql';

// watasuke.net > editor
// CopyRight (c) 2021-2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.

type Props = {
  articles: AllArticlesQuery['allArticles'];
};

function datetime(s: string) {
  if (s === '') {
    return 'none';
  } else {
    return s.replace('T', ' ');
  }
}

export function ArticlesTable(props: Props): JSX.Element {
  const router = useRouter();
  return (
    <>
      <table className={css.table}>
        <thead>
          <tr>
            <th>title</th>
            <th>slug</th>
            <th className={css.datetime}>updated_at</th>
            <th className={css.datetime}>published_at</th>
          </tr>
        </thead>
        <tbody>
          {props.articles.map(e => {
            return (
              <tr key={e.slug} className={css.item} onClick={() => router.push(`/editor/${e.slug}`)}>
                <td className={css.title}>{e.title}</td>
                <td className={css.slug}>{e.slug}</td>
                <td className={css.datetime}>{datetime(e.updatedAt)}</td>
                <td className={css.datetime}>{datetime(e.publishedAt)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
