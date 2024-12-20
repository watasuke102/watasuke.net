// watasuke.net > editor
// CopyRight (c) 2021-2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import {css} from './index.css';
import {GraphQLClient} from 'graphql-request';
import React from 'react';
import Link from 'next/link';
import {getSdk} from '@utils/graphql';
import {NewArticle} from './_components/NewArticle';
import {ArticlesTable} from './_components/ArticlesTable';
import {ErrorQL} from '@mytypes/ErrorQL';

export const revalidate = 0;

export default async function Top(): Promise<JSX.Element> {
  const sdk = getSdk(new GraphQLClient('http://127.0.0.1:10212/graphql'));
  let data;
  try {
    data = await sdk.allArticles();
  } catch (err) {
    const error = err as ErrorQL;
    return (
      <>
        {error.response.errors.map((e, i) => (
          <p key={i}>
            {e.message} <br />
            {e.extensions}
          </p>
        ))}
      </>
    );
  }
  return (
    <div className={css.container}>
      <h2>Sitedata</h2>
      <Link href='/editor/profile'>Edit profile</Link>
      <hr />
      <h2>Article</h2>
      <NewArticle />
      <ArticlesTable articles={data.allArticles.filter(e => !e.isPublished)} />
      <h3>Published</h3>
      <ArticlesTable
        articles={data.allArticles
          .filter(e => e.isPublished)
          .sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1))}
      />
    </div>
  );
}
