// watasuke.net > editor
// CopyRight (c) 2021-2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import '@watasuke.net/common/src/css/base.css';
import {GraphQLClient} from 'graphql-request';
import React from 'react';
import {getSdk} from '@utils/graphql';
import {Preview} from './_components/Preview';

type Props = {
  params: {slug: string};
};

export const revalidate = 0;

export default async function page(props: Props): Promise<JSX.Element> {
  const slug = (await props.params).slug;
  const sdk = getSdk(new GraphQLClient('http://127.0.0.1:10212/graphql'));
  const query = await sdk.articlePreviewPage({slug});
  if (!query.article) {
    throw Error('article is empty');
  }
  return <Preview article={query.article} />;
}
