// watasuke.net > editor
// CopyRight (c) 2021-2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import {css} from './index.css';
import {GraphQLClient} from 'graphql-request';
import React from 'react';
import {getSdk} from '@utils/graphql';
import {NewArticle} from './_components/NewArticle';
import {ArticlesTable} from './_components/ArticlesTable';
import {ErrorQL} from '@mytypes/ErrorQL';

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
      <NewArticle />
      <ArticlesTable articles={data.allArticles.filter(e => !e.isPublished)} />
      <h2>Published</h2>
      <ArticlesTable
        articles={data.allArticles.filter(e => e.isPublished).sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1))}
      />
    </div>
  );
}
