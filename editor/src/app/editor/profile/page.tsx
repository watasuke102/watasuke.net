// watasuke.net > editor
// CopyRight (c) 2021-2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import '@watasuke.net/common/src/css/base.css';
import {GraphQLClient} from 'graphql-request';
import React from 'react';
import {ProfileEditor} from '@features/ProfileEditor';
import {getSdk} from '@utils/graphql';

export const revalidate = 0;

export default async function page(): Promise<JSX.Element> {
  const sdk = getSdk(new GraphQLClient('http://127.0.0.1:10212/graphql'));
  const query = await sdk.profile();
  if (!query.sitedata?.profile) {
    throw Error('profile is empty');
  }
  return <ProfileEditor profile={query.sitedata.profile} />;
}
