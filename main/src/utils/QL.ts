// watasuke.net
// CopyRight (c) 2021-2026 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @watasuke1024
// This software is released under the MIT or MIT SUSHI-WARE License.
import * as config from '@watasuke.net/config/config';
import {GraphQLClient} from 'graphql-request';
import {getSdk} from '@utils/graphql';

export function ql() {
  return getSdk(new GraphQLClient(config.apiUrl + '/graphql'));
}
