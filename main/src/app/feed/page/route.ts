// watasuke.net
// CopyRight (c) 2021-2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import * as config from '@watasuke.net/config/config';
import {globSync, statSync} from 'node:fs';
import {new_feed_obj} from '../common';

export const dynamic = 'force-static';

const title_map: Record<string, string> = {
  '/profile': 'プロフィール',
  '/portfolio': 'ポートフォリオ',
  '/feed': 'フィード',
  '/card': 'card',
  '/blog': 'ブログ',
  '/blog/tag': 'タグ一覧',
  '/blog/article': '記事一覧',
  '/about': 'このサイトについて',
};

export async function GET() {
  const feed = new_feed_obj(
    'わたすけのへや',
    'watasuke.net の固定ページに関する更新通知',
    '',
  );
  const files = globSync('src/app/**/page.tsx')
    // remove dynamic route
    .filter(e => e.indexOf('[') === -1)
    // remove 'src/app'
    .map(e => {
      return {
        file_path: e,
        route: e.slice(7).replace('/page.tsx', ''),
      };
    });
  files.forEach(e => {
    let title = config.site_title;
    if (e.route !== '') {
      if (title_map[e.route]) {
        title = title_map[e.route] + ' - ' + title;
      } else {
        console.error(`Unknown route: ${e.route}`);
        return;
      }
    }
    feed.addItem({
      id: e.route === '' ? 'top' : e.route,
      title,
      date: statSync(e.file_path).mtime,
      link: config.site_url + e.route,
    });
  });

  return new Response(feed.atom1(), {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
