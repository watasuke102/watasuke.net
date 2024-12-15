// watasuke.net
// CopyRight (c) 2021-2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import * as config from '@watasuke.net/config/config';
import {GraphQLClient} from 'graphql-request';
import {getSdk} from '@utils/graphql';

export function ql() {
  return getSdk(new GraphQLClient(config.apiUrl + '/graphql'));
}
