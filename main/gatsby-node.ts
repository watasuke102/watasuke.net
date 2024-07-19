// watasuke.net
// CopyRight (c) 2021-2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
// FIXME: cannot import from '@watasuke.net/{config,common}'
import * as config from '../config/config';
import child_process from 'child_process';
import fs from 'fs';
import path from 'path';
import {GatsbyNode, SourceNodesArgs} from 'gatsby';
import {GraphQLClient} from 'graphql-request';
import OgpParser from 'ogp-parser';
import {AllQuery, getSdk} from './src/utils/graphql';
import {classify_url_embed_type} from '../common/src/ClassifyUrlEmbedType';
import Article from '@mytypes/Article';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function log(type: 'info' | 'error' | 'debug' | 'ogp', ...args: any[]) {
  const prefix = (() => {
    // prettier-ignore
    switch (type) {
      case 'info':  return '\x1b[1;7;32m[INFO ]\x1b[0m';
      case 'error': return '\x1b[1;7;31m[ERROR]\x1b[0m';
      case 'debug': return '\x1b[1;7;36m[DEBUG]\x1b[0m';
      case 'ogp':   return '\x1b[1;7;35m[OGP  ]\x1b[0m';
    }
  })();
  console.log(prefix, ...args);
}

// サイトのデータ登録
export const createSchemaCustomization: GatsbyNode['createSchemaCustomization'] = ({actions}) => {
  actions.createTypes(`
    type BuildInfo implements Node @dontInfer {
      contents_githash: String!,
      githash: String!,
    }
    type PortfolioToml implements Node @dontInfer {
      name: String,
      body: String,
    }
    type SiteData implements Node @dontInfer {
      slug: String,
      body: String
    }

    type Ogp implements Node @dontInfer {
      url: String,
      title: String,
      description: String,
      image: String
    }
    type Articles implements Node @dontInfer {
      slug: String,
      title: String,
      tldr: String,
      body: String,
      published_at: String,
      updated_at: String,
      tags: [Tags]
    }

    type Tags implements Node @dontInfer {
      slug: String,
      name: String
    }
  `);
};

function registerToml({actions, createContentDigest}: SourceNodesArgs) {
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
}

async function registerSiteDatas(sitedata: AllQuery['sitedata'], {actions, createContentDigest}: SourceNodesArgs) {
  actions.createNode({
    id: 'sitedata_profile',
    slug: 'profile',
    body: sitedata.profile,
    internal: {
      type: 'SiteData',
      contentDigest: createContentDigest(sitedata),
    },
  });
  actions.createNode({
    id: 'sitedata_short_profile',
    slug: 'short_profile',
    body: sitedata.shortProfile,
    internal: {
      type: 'SiteData',
      contentDigest: createContentDigest(sitedata),
    },
  });
}

async function registerArticle(
  article: AllQuery['allPublicArticles'][0],
  {actions, createContentDigest}: SourceNodesArgs,
) {
  actions.createNode({
    id: article.slug,
    slug: article.slug,
    title: article.title,
    tldr: article.tldr,
    body: article.body,
    tags: article.tags,
    published_at: article.publishedAt,
    updated_at: article.updatedAt,
    internal: {
      type: 'Articles',
      contentDigest: createContentDigest(article),
    },
  });
}

async function registerOgp(url: string, i: number, {actions, createContentDigest}: SourceNodesArgs) {
  try {
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
    const err = e as Error;
    log(
      'error',
      `cannot fetch OGP data
  >> URL: ${url}
  >> message: [${err.name}] ${err.message}
-------------------------------
`,
    );
  }
}

async function registerTags(tags: AllQuery['allTags'], {actions, createContentDigest}: SourceNodesArgs) {
  tags.forEach(item => {
    actions.createNode({
      id: item.slug,
      slug: item.slug,
      name: item.name,
      internal: {
        type: 'Tags',
        contentDigest: createContentDigest(item),
      },
    });
  });
}

export const sourceNodes: GatsbyNode['sourceNodes'] = async (args: SourceNodesArgs) => {
  log('info', 'Loading toml files...');
  registerToml(args);

  const sdk = getSdk(new GraphQLClient(config.apiUrl + '/graphql'));
  const data = await sdk.all();
  if (!data) {
    log('error', 'Failed to fetch data from API');
    return;
  }

  log('info', 'Creating SiteData nodes...');
  if (data.sitedata) {
    registerSiteDatas(data.sitedata, args);
  } else {
    return;
  }

  log('info', 'Creating Article nodes...');
  const url_list = new Set<string>();
  if (data.allPublicArticles) {
    data.allPublicArticles.forEach(item => {
      registerArticle(item, args);
      item.body.split('\n').forEach(paragraph => {
        const url = paragraph.match(/^https:\/\/.+/);
        // ignore URL of Twitter, YouTube, etc...
        if (!url || classify_url_embed_type(url[0]).embed_type !== 'none') {
          return;
        }
        url_list.add(url[0]);
      });
    });
  }

  log('info', 'Collecting OGP info...');
  const max_count = 60;
  const promise_queue: Array<() => void> = [];
  let count = 0;
  Array.from(url_list).forEach(async (url, i) => {
    // 同時実行可能数を超えていたら実行キューに追加
    // Promiseが解決されるまでawait
    if (count >= max_count) {
      await new Promise<void>(resolver => promise_queue.push(resolver));
    }
    ++count;
    log('ogp', url);
    registerOgp(url, i, args);
    log('ogp', url, '> done');
    --count;
    // キューからPromiseのresolverを取り出して実行（解決させる）
    promise_queue.shift()?.();
  });

  log('info', 'Creating Tag nodes...');
  if (data.allTags) {
    registerTags(data.allTags, args);
  }

  log('info', 'Creating BuildInfo...');
  args.actions.createNode({
    id: 'BuildInfo',
    contents_githash: data.contentsGitHeadHash,
    githash: child_process.execSync('git rev-parse HEAD').toString().slice(0, 7),
    internal: {
      type: 'BuildInfo',
      contentDigest: args.createContentDigest('BuildInfo'),
    },
  });
};

// ページ作成
export const createPages: GatsbyNode['createPages'] = async ({graphql, actions}) => {
  {
    type ArticlesResponse = {data?: {allArticles: {nodes: Article[]}}};
    // 投稿ページ
    const articles_response: ArticlesResponse = await graphql(`
      query {
        allArticles(sort: {published_at: DESC}) {
          nodes {
            slug
            title
            tldr
            tags {
              slug
              name
            }
            published_at
            updated_at
            body
          }
        }
      }
    `);
    const articles: Article[] = articles_response.data?.allArticles.nodes ?? [];
    log('info', 'Creating Article pages...');
    articles.forEach((item, index) => {
      actions.createPage({
        path: `/blog/article/${item.slug}`,
        component: path.resolve('./src/template/Article.tsx'),
        context: {
          article: item,
          // [...][-1] === [][1] === undefined
          newer: articles[index - 1],
          older: articles[index + 1],
        },
      });
    });
  }

  {
    type TagsResponse = {data?: {allTags: {nodes: {slug: string; name: string}[]}}};
    const tags_response: TagsResponse = await graphql(`
      query {
        allTags {
          nodes {
            slug
            name
          }
        }
      }
    `);
    // タグを含む記事の一覧ページを作る
    log('info', 'Creating Tag pages...');
    const tags = tags_response.data?.allTags.nodes ?? [];
    tags.forEach(tag =>
      actions.createPage({
        path: `/blog/tag/${tag.slug}`,
        component: path.resolve('./src/template/Tag.tsx'),
        context: tag,
      }),
    );
  }
};
