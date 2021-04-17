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

exports.createPages = async ({ actions }) => {
  // 投稿を取得
  const response = await fetch('http://localhost:1337/articles');
  const posts = await response.json();
  posts.forEach(post => {
    actions.createPage({
      path: `/blog/${post['slug']}`,
      component: path.resolve('./src/template/Posts.tsx'),
      context: post
    });
  });
}
