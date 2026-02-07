// watasuke.net
// CopyRight (c) 2021-2026 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @watasuke1024
// This software is released under the MIT or MIT SUSHI-WARE License.
import '@watasuke.net/common/src/css/base.css';
import {GraphQLClient} from 'graphql-request';
import React from 'react';
import {getSdk} from '@utils/graphql';
import {MonthlyEditor} from '@features/MonthlyEditor';

type Props = {
  params: Promise<{year: string; month: string}>;
};

export const revalidate = 0;

export default async function page(props: Props) {
  const sdk = getSdk(new GraphQLClient('http://127.0.0.1:10212/graphql'));
  const params = await props.params;
  const year = Number(params.year);
  const month = Number(params.month);
  if (isNaN(year) || isNaN(month)) {
    throw Error(
      `Failed to convert year (${params.year}) or month (${params.month}) to number`,
    );
  }
  const query = await sdk.monthlyEditPage({year, month});
  if (!query.monthly) {
    throw Error('article is empty');
  }
  return <MonthlyEditor monthly={query.monthly} />;
}
