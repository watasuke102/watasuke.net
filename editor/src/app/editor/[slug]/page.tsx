// watasuke.net
// CopyRight (c) 2021-2025 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @watasuke1024
// This software is released under the MIT or MIT SUSHI-WARE License.
import '@watasuke.net/common/src/css/base.css';
import {GraphQLClient} from 'graphql-request';
import React from 'react';
import {ArticleEditor} from '@features/ArticleEditor';
import {getSdk} from '@utils/graphql';

type Props = {
  params: Promise<{slug: string}>;
};

export const revalidate = 0;

export default async function page(props: Props) {
  const sdk = getSdk(new GraphQLClient('http://127.0.0.1:10212/graphql'));
  const query = await sdk.articleEditPage({slug: (await props.params).slug});
  if (!query.article) {
    throw Error('article is empty');
  }
  return <ArticleEditor article={query.article} tags={query.allTags} />;
}
