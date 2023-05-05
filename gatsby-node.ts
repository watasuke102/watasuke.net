// gatsby-node.js
//
// CopyRight (c) 2021-2023 Watasuke
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import fs from 'fs';
import {GatsbyNode} from 'gatsby';
import fetch from 'node-fetch';
import OgpParser from 'ogp-parser';
import path from 'path';

interface Tag {
  id?: number;
  slug: string;
  name: string;
}

interface SiteData {
  id: number;
  slug: string;
  body: string;
}

interface Article {
  id: number;
  slug: string;
  title: string;
  body: string;
  tags: {
    slug: string;
    name: string;
  }[];
  thumbnail: {
    formats: {
      large: {url: string};
    };
  };
  published_at: string;
  updated_at: string;
}

// サイトのデータ登録
export const createSchemaCustomization: GatsbyNode['createSchemaCustomization'] = ({actions}) => {
  actions.createTypes(`
    type PortfolioToml implements Node @dontInfer {
      name: String,
      body: String,
    }

    type Ogp implements Node @dontInfer {
      url: String,
      title: String,
      description: String,
      image: String
    }
    type SiteData implements Node @dontInfer {
      slug: String,
      body: String
    }

    type Tag @dontInfer {
      slug: String,
      name: String
    }

    type Tags implements Node @dontInfer {
      slug: String,
      name: String
    }

    type Articles implements Node @dontInfer {
      slug: String,
      title: String,
      body: String,
      thumbnail: String,
      published_at: String,
      updated_at: String,
      tags: [Tag]
    }
  `);
};
export const sourceNodes: GatsbyNode['sourceNodes'] = async ({actions, createContentDigest}) => {
  // ポートフォリオ用tomlを読み込み
  fs.readdir(path.resolve('./src/assets/portfolio_toml'), (err, files) => {
    if (err) {
      throw err;
    }

    files.forEach(name => {
      if (name.slice(-4) !== 'toml') {
        return;
      }
      fs.readFile(path.resolve(`./src/assets/portfolio_toml/${name}`), 'utf-8', (err, body) => {
        if (err) {
          throw err;
        }

        const toml_file = {name: name, body: body};
        actions.createNode({
          id: name,
          name: name,
          body: body,
          internal: {
            type: 'PortfolioToml',
            contentDigest: createContentDigest(toml_file),
          },
        });
      });
    });
  });

  let response;
  // サイトのデータ（プロフィールとかなんとか）を登録
  let failed = false;
  response = await fetch('http://127.0.0.1:1337/sitedata').catch(e => {
    console.error(`[INFO] Failed to fetch from API (${e.message}) Cancel to create node.`);
    failed = true;
  });
  if (failed || !response) return;
  const data = await response.json();
  data.forEach((item: SiteData) => {
    actions.createNode({
      id: `SiteData_${item.id}`,
      slug: item.slug,
      body: item.body,
      internal: {
        type: 'SiteData',
        contentDigest: createContentDigest(item),
      },
    });
  });

  const url_list = await (async () => {
    let list: string[] = [];
    // ブログ記事を登録
    response = await fetch('http://127.0.0.1:1337/articles');
    const articles = await response.json();
    console.info('   ** Creating article nodes...');
    articles.forEach((item: Article) => {
      //console.log(`${item.title} (${item.slug}) tag: `, item.tags);
      actions.createNode({
        id: `Article_${item.id ?? 0}`,
        slug: item.slug,
        title: item.title,
        body: item.body,
        tags: item.tags,
        thumbnail: item.thumbnail ? item.thumbnail.formats.large.url : null,
        published_at: item.published_at,
        updated_at: item.updated_at,
        internal: {
          type: 'Articles',
          contentDigest: createContentDigest(item),
        },
      });
      const urls = item.body.match(/https?:\/\/[\w/:%#$&?~.=+-]+/g);
      if (urls) {
        list = list.concat(urls);
      }
    });
    return Array.from(
      new Set(
        list.filter(
          // TwitterとYouTubeは専用の埋め込みがあるのでいらない
          url => url.slice(0, 19) !== 'https://twitter.com' && url.slice(0, 23) !== 'https://www.youtube.com',
        ),
      ),
    );
  })();

  console.info('   * Start collecting OGP...');
  const max_count = 50;
  const promise_queue: Array<() => void> = [];
  let count = 0;
  url_list.forEach(async (url, i) => {
    ++count;
    if (count > max_count) {
      await new Promise<void>(r => promise_queue.push(r));
    }
    try {
      console.debug(`DEBUG   [ogp] - ${url}`);
      const ogp = await OgpParser(url);
      let desc = '';
      if (ogp.seo.description) {
        desc = ogp.seo.description.reduce((prev, cur) => prev + cur);
      } else if (ogp.ogp['og:description']) {
        desc = ogp.ogp['og:description'].reduce((prev, cur) => prev + cur);
      }
      actions.createNode({
        id: `Ogp_${i}`,
        url: url,
        title: ogp.title ?? url,
        description: desc ?? '',
        image: ogp.ogp['og:image'] ? ogp.ogp['og:image'][0] : '',
        internal: {
          type: 'Ogp',
          contentDigest: createContentDigest(url),
        },
      });
    } catch (e) {
      console.error(`
cannot fetch OGP data
  >> URL: ${url}
  >> message: ${(e as Error).message}
-------------------------------
`);
    }
    console.debug(`DEBUG   [ogp] - ${url} > done`);
    --count;
    promise_queue.shift()?.();
  });

  // タグ一覧を登録
  console.info('   * Registering Tag...');
  response = await fetch('http://127.0.0.1:1337/tags');
  const tags = await response.json();
  tags.forEach((item: Tag) => {
    actions.createNode({
      id: `Tags_${item.id ?? 0}`,
      slug: item.slug,
      name: item.name,
      internal: {
        type: 'Tags',
        contentDigest: createContentDigest(item),
      },
    });
  });
};

// ページ作成
export const createPages: GatsbyNode['createPages'] = async ({graphql, actions}) => {
  type Response = {data?: {allArticles: {nodes: Article[]}}};
  // 投稿ページ
  const response: Response = await graphql(`
    query {
      allArticles(sort: {published_at: DESC}) {
        nodes {
          slug
          title
          body
          tags {
            name
            slug
          }
          thumbnail
          published_at
          updated_at
        }
      }
    }
  `);
  const articles: Article[] = response.data?.allArticles.nodes ?? [];
  const tag_list = new Set<Tag>();
  articles.forEach(item => {
    actions.createPage({
      path: `/blog/article/${item['slug']}`,
      component: path.resolve('./src/template/Article.tsx'),
      context: item,
    });
    if (Array.isArray(item.tags)) item.tags.forEach(tag => tag_list.add(tag));
  });

  // タグを含む記事の一覧ページを作る
  const tags = Array.from(tag_list);
  if (tags.length !== 0) {
    for (const tag of tags) {
      actions.createPage({
        path: `/blog/tag/${tag['slug']}`,
        component: path.resolve('./src/template/Tag.tsx'),
        context: tag,
      });
    }
  }
};
