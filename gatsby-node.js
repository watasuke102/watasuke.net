/*!
 * gatsby-node.js
 *
 * CopyRight (c) 2021-2022 Watasuke
 * Email  : <watasuke102@gmail.com>
 * Twitter: @Watasuke102
 * This software is released under the MIT SUSHI-WARE License.
 */

const path = require('path');
const fetch = require('node-fetch');

// サイトのデータ登録
exports.createSchemaCustomization = ({actions}) => {
  actions.createTypes(`
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
exports.sourceNodes = async ({actions, createContentDigest}) => {
  let response;
  // サイトのデータ（プロフィールとかなんとか）を登録
  let failed = false;
  response = await fetch('http://localhost:1337/sitedata').catch(_ => {
    console.log('[INFO] Failed to fetch from API. Cancel to create node.');
    failed = true;
  });
  if (failed) return;
  const data = await response.json();
  data.forEach(item => {
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

  let url_list = [];
  // ブログ記事を登録
  response = await fetch('http://localhost:1337/articles');
  const articles = await response.json();
  console.log('** Creating article nodes...');
  articles.forEach(item => {
    //console.log(`${item.title} (${item.slug}) tag: `, item.tags);
    actions.createNode({
      id: `Article_${item.id}`,
      slug: item.slug,
      title: item.title,
      body: item.body,
      tags: item.tags,
      thumbnail: item.thumbnail ? item.thumbnail.formats.thumbnail.url : null,
      published_at: item.published_at,
      updated_at: item.updated_at,
      internal: {
        type: 'Articles',
        contentDigest: createContentDigest(item),
      },
    });
    let urls = item.body.match(/https?:\/\/[\w/:%#\$&\?~\.=\+\-]+/g);
    if (urls) {
      url_list = url_list.concat(urls);
    }
  });

  // 各URL（重複排除）のOGPタグを登録
  console.log('* Start collectiong OGP...');
  console.log('* url_list: ', Array.from(new Set(url_list)));
  Array.from(new Set(url_list)).forEach(async (url, i) => {
    // TwitterとYouTubeは専用の埋め込みがあるのでいらない
    if (url.slice(0, 19) === 'https://twitter.com' || url.slice(0, 23) === 'https://www.youtube.com') return;
    try {
      let OgpParser = require('ogp-parser');
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
        title: ogp.title,
        description: desc,
        image: ogp.ogp['og:image'] ? ogp.ogp['og:image'][0] : '',
        internal: {
          type: 'Ogp',
          contentDigest: createContentDigest(url),
        },
      });
    } catch (e) {
      console.error(`[ERROR] cannot fetch OGP data from ${url}`);
    }
  });

  // タグ一覧を登録
  response = await fetch('http://localhost:1337/tags');
  const tags = await response.json();
  tags.forEach(item => {
    actions.createNode({
      id: `Tags_${item.id}`,
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
exports.createPages = async ({graphql, actions}) => {
  // 投稿ページ
  const response = await graphql(`
    query {
      allArticles(sort: {fields: published_at, order: DESC}) {
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
  const articles = response.data.allArticles.nodes;
  let tag_list = new Set();
  articles.forEach(item => {
    actions.createPage({
      path: `/blog/article/${item['slug']}`,
      component: path.resolve('./src/template/Article.tsx'),
      context: item,
    });
    if (Array.isArray(item.tags)) item.tags.forEach(tag => tag_list.add(tag));
  });

  // タグを含む記事の一覧ページを作る
  if (tag_list.length != 0) {
    for (let tag of tag_list) {
      actions.createPage({
        path: `/blog/tag/${tag['slug']}`,
        component: path.resolve('./src/template/Tag.tsx'),
        context: tag,
      });
    }
  }
};
