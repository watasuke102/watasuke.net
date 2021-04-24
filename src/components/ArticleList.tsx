/*!
 * ArticleList.tsx
 *
 * CopyRight (c) 2021 Watasuke
 * Email  : <watasuke102@gmail.com>
 * Twitter: @Watasuke102
 * This software is released under the MIT SUSHI-WARE License.
 */

import React from 'react';
import { useStaticQuery, navigate, graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import RemoveMD from 'remove-markdown';
import Article from '../types/Article';
import '../styles/ArticleList.scss';

interface Props {
  list: {
    node: Article
  }[],
  page: number,
  tag?: string
}

export default function ArticleList(props: Props) {
  const article_count = 10;

  const page_number = props.page;
  const tag_filter = (props.tag) ? `( filter: {tags: {elemMatch: {slug: {eq: "${props.tag}"}}}} )` : '';
  console.log(tag_filter)
  let article_cards: object[] = [];
  const begin = page_number * article_count;
  const last = page_number * article_count + article_count;
  // 記事からarticle_count個取り出す
  props.list
    .slice(begin, last)
    .forEach(({ node }) => {
      article_cards.push(
        <div className='ArticleList-card' onClick={() => navigate('article/' + node.slug)}>
          <h2>{node.title}</h2>
          <p>
            {
              // 140字に制限して内容を表示、超過分は...で
              RemoveMD(node.body.slice(0, 140) + ((node.body.length > 140) ? ' ...' : ''))
            }
          </p>
        </div>
      )
    });
  return (
    <div className='ArticleList-container'>
      {article_cards}
    </div>
  );
}
