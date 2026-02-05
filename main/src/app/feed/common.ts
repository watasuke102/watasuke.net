// watasuke.net
// CopyRight (c) 2021-2026 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @watasuke1024
// This software is released under the MIT or MIT SUSHI-WARE License.
import * as config from '@watasuke.net/config/config';
import {Feed} from 'feed';

export function new_feed_obj(
  title: string,
  description: string,
  link_relative: string,
) {
  const link = config.site_url + link_relative;
  return new Feed({
    title,
    description,
    id: link,
    link,
    language: 'ja',
    image: config.site_url + '/icon.jpg',
    favicon: config.site_url + '/favicon.ico',
    copyright: '2021-2023 watasuke, all right reserved',
  });
}
