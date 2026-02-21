// watasuke.net
// CopyRight (c) 2021-2026 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @watasuke1024
// This software is released under the MIT or MIT SUSHI-WARE License.
import {css} from './index.css';
import {ClientError, GraphQLClient} from 'graphql-request';
import React from 'react';
import Link from 'next/link';
import {getSdk} from '@utils/graphql';
import {NewArticle} from './_components/NewArticle';
import {ArticlesTable} from './_components/ArticlesTable';
import {MonthliesTable} from './_components/MonthliesTable';
import {NewMonthly} from './_components/NewMonthly';

export const revalidate = 0;

export default async function Top() {
  const sdk = getSdk(new GraphQLClient('http://127.0.0.1:10212/graphql'));
  let data;
  try {
    data = await sdk.indexPage();
  } catch (err) {
    const error = err as ClientError;
    return (
      <>
        {error.response?.errors?.map((e, i) => (
          <p key={i}>
            {e.message} <br />
            {e.extensions.toString()}
          </p>
        ))}
      </>
    );
  }
  return (
    <div className={css.container}>
      <h2 className={css.heading}>Sitedata</h2>
      <Link href='/editor/profile'>Edit profile</Link>
      <hr />
      <h2 className={css.heading}>Monthly</h2>
      <NewMonthly />
      <MonthliesTable monthlies={data.allMonthlies} />
      <h2 className={css.heading}>Article</h2>
      <NewArticle />
      <ArticlesTable articles={data.allArticles.filter(e => !e.isPublished)} />
      <h3>Published</h3>
      <ArticlesTable articles={data.allArticles.filter(e => e.isPublished)} />
    </div>
  );
}
