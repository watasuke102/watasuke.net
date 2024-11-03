// watasuke.net > editor
// CopyRight (c) 2021-2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
'use client';

import {css} from './ArticlesTable.css';
import React from 'react';
import Link from 'next/link';
import {AllArticlesQuery} from '@utils/graphql';
import VisibilityIcon from '@assets/visibility.svg';
import LinkIcon from '@assets/link.svg';

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
  return (
    <>
      <table className={css.table}>
        <thead>
          <tr>
            <th></th>
            <th></th>
            <th>title</th>
            <th>slug</th>
            <th className={css.datetime}>updated_at</th>
            <th className={css.datetime}>published_at</th>
          </tr>
        </thead>
        <tbody>
          {props.articles.map(e => {
            return (
              <tr key={e.slug}>
                <td>
                  <a
                    className={css.icon}
                    href={`https://watasuke.net/blog/article/${e.slug}/`}
                    target='_blank'
                    rel='nofollow noopener noreferrer'
                  >
                    <LinkIcon />
                  </a>
                </td>
                <td>
                  <Link href={`/editor/${e.slug}/preview`} className={css.icon}>
                    <VisibilityIcon />
                  </Link>
                </td>
                <td className={css.title}>
                  <Link href={`/editor/${e.slug}`}>{e.title}</Link>
                </td>
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
