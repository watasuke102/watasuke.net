/*!
 * gatsby-node.js
 *
 * CopyRight (c) 2021 Watasuke
 * Email  : <watasuke102@gmail.com>
 * Twitter: @Watasuke102
 * This software is released under the MIT SUSHI-WARE License.
 */

const path = require('path');
const fetch = require('node-fetch');

// サイトのデータ登録
exports.createSchemaCustomization = ({ actions }) => {
  actions.createTypes(`
    type Tags @dontInfer {
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
      tags: [Tags],
    }
  `);
}
exports.sourceNodes = async ({ actions, createContentDigest }) => {
  let response;
  // サイトのデータ（プロフィールとかなんとか）を登録
  response = await fetch('http://localhost:1337/sitedata');
  const data = await response.json();
  data.forEach(item => {
    actions.createNode({
      id: String(item.id),
      slug: item.slug,
      body: item.body,
      internal: {
        type: 'SiteData',
        contentDigest: createContentDigest(item),
      }
    })
  })
  // ブログ記事を登録
  response = await fetch('http://localhost:1337/articles');
  const articles = await response.json();
  articles.forEach(item => {
    actions.createNode({
      id: String(item.id),
      slug: item.slug,
      title: item.title,
      body: item.body,
      tags: item.tags,
      thumbnail: (item.thumbnail) ? item.thumbnail.formats.thumbnail.url : null,
      published_at: item.published_at,
      updated_at: item.updated_at,
      internal: {
        type: 'Articles',
        contentDigest: createContentDigest(item),
      }
    })
  })
}


// ページ作成
exports.createPages = async ({ graphql, actions }) => {
  // 投稿ページ
  const response = await graphql(`
    query {
      allArticles {
        edges {
          node {
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
    }
  `)
  const articles = response.data.allArticles.edges;
  let tag_list = [];
  articles.forEach(({ node }) => {
    actions.createPage({
      path: `/blog/article/${node['slug']}`,
      component: path.resolve('./src/template/Article.tsx'),
      context: node
    });
    // タグを抽出する
    node.tags.forEach(tag => tag_list.push(tag));
  });
  // タグ一覧から重複を排除し、ページを作る
  if (tag_list.length != 0) {
    Array.from(new Set(tag_list)).forEach((tag, i) => {
      actions.createPage({
        path: `/blog/tag/${tag['slug']}`,
        component: path.resolve('./src/template/Tag.tsx'),
        context: tag
      });
    });
  }
}
