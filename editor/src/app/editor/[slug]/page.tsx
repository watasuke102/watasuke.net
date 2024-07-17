// watasuke.net > editor
// CopyRight (c) 2021-2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import '@watasuke.net/common/src/css/base.css';
import {GraphQLClient} from 'graphql-request';
import React from 'react';
import {EditorPage} from '@features/Editor';
import {getSdk} from '@utils/graphql';

type Props = {
  params: {slug: string};
};

export default async function page(props: Props): Promise<JSX.Element> {
  const sdk = getSdk(new GraphQLClient('http://127.0.0.1:10212/graphql'));
  const query = await sdk.articleEditPage({slug: props.params.slug});
  if (!query.article) {
    throw Error('article is empty');
  }
  return <EditorPage article={query.article} tags={query.allTags} />;
}
