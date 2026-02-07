// watasuke.net
// CopyRight (c) 2021-2026 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @watasuke1024
// This software is released under the MIT or MIT SUSHI-WARE License.
import * as config from '@watasuke.net/config/config';
import {ql} from '@utils/QL';
import {new_feed_obj} from '../common';

export const dynamic = 'force-static';

export async function GET() {
  const {allPublicMonthlies} = await ql().allMonthlies();
  const feed = new_feed_obj(
    '月報 - わたすけのへや',
    'watasuke.net/blog/monthly の更新通知',
    '/blog/monthly',
  );
  allPublicMonthlies.forEach(e => {
    const month_str = e.month.toString().padStart(2, '0');
    const id = `${e.year}/${month_str}`;
    const link = `${config.site_url}/blog/monthly/${id}/`;
    feed.addItem({
      id,
      title: '月報：' + id,
      date: new Date(e.publishedAt),
      description: e.tldr + `<br><a href="${link}">続きを読む</a>`,
      link,
    });
  });

  return new Response(feed.atom1(), {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
