// watasuke.net
// CopyRight (c) 2021-2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import * as config from '@watasuke.net/config/config';
import {ql} from '@utils/QL';
import type {MetadataRoute} from 'next';

export const dynamic = 'force-static';
const jst = 9 /*hours*/ * 60 /*minutes*/ * 60 /*sec*/ * 1000; /*ms*/

type Entry = MetadataRoute.Sitemap[0];
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const {allPublicArticles, allTags} = await ql().sitemapInfo();
  const now = new Date(Date.now() + jst);
  // remove `.???Z` (? is msec) and convert JST string
  const lastModified = now.toISOString().slice(0, -5) + '+0900';

  return [
    {lastModified, priority: 1.0, url: config.site_url},
    {lastModified, priority: 1.0, url: `${config.site_url}/profile`},
    {lastModified, priority: 1.0, url: `${config.site_url}/portfolio`},
    {lastModified, priority: 0.8, url: `${config.site_url}/blog`},
    {lastModified, priority: 0.8, url: `${config.site_url}/card`},
    {lastModified, priority: 0.5, url: `${config.site_url}/about`},
    {lastModified, priority: 0.1, url: `${config.site_url}/blog/tag`},
    {lastModified, priority: 0.1, url: `${config.site_url}/blog/article`},
    ...allPublicArticles.map<Entry>(e => {
      return {
        url: `${config.site_url}/blog/article/${e.slug}`,
        lastModified: e.updatedAt + '+0900',
        priority: 1.0,
      };
    }),
    ...allTags.map<Entry>(e => {
      return {
        url: `${config.site_url}/blog/tag/${e.slug}`,
        lastModified,
        priority: 0.1,
      };
    }),
  ];
}
