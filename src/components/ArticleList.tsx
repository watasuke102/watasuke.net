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
import '../styles/ArticleList.scss';

interface Props {
  page: number,
}

export default class ArticleList extends React.Component<Props> {
  private query = graphql`
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
  }`

  public article_count = 4;
  
  render() {
    const page_number = this.props.page;
    const articles = useStaticQuery(this.query).allArticles.edges;
    let article_cards: object[] = [];
    const begin = page_number * this.article_count;
    const last = page_number * this.article_count + this.article_count;
    // 記事からarticle_count個取り出す
    articles
      .slice(begin, last)
      .forEach(({ node }) => {
        article_cards.push(
          <div className='ArticleList-card' onClick={() => navigate('article/' + node.slug)}>
            <h2>{node.title}</h2>
            <p>
              {
                // 140時に制限して内容を表示、超過分は...で
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
}
