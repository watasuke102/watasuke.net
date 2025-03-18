// watasuke.net
// CopyRight (c) 2021-2025 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @watasuke1024
// This software is released under the MIT or MIT SUSHI-WARE License.
import * as config from '@watasuke.net/config/config';
import {ql} from '@utils/QL';
import {new_feed_obj} from '../common';

export const dynamic = 'force-static';

export async function GET() {
  const {allPublicArticles} = await ql().allArticles();
  const feed = new_feed_obj(
    'ブログ - わたすけのへや',
    'watasuke.net/blog の更新通知',
    '/blog',
  );
  allPublicArticles.forEach(e => {
    const link = config.site_url + '/blog/article/' + e.slug + '/';
    feed.addItem({
      id: e.slug,
      title: e.title,
      date: new Date(e.publishedAt),
      description: e.tldr + `<br><a href="${link}">続きを読む</a>`,
      link,
      category: e.tags.map(e => {
        return {name: e.name};
      }),
    });
  });

  return new Response(feed.atom1(), {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
