/*!
 * Article.tsx
 *
 * CopyRight (c) 2021-2022 Watasuke
 * Email  : <watasuke102@gmail.com>
 * Twitter: @Watasuke102
 * This software is released under the MIT SUSHI-WARE License.
 */

import React from 'react';
import RemoveMD from 'remove-markdown';
import Head from '@/common/Head';
import Layout from '@/common/Layout';
import Thumbnail from '@/feature/Article/Thumbnail';
import BlogContent from '@/feature/Article/BlogContent';
import ProfileCard from '@/feature/ArticleLayout/ProfileCard';
import TagListCard from '@/feature/ArticleLayout/TagListCard';
import TagContainer from '@/feature/ArticleLayout/TagContainer';
import ExtractHeading from '@utils/ExtractHeading';
import Article from '@mytypes/Article';
import '@/common/main.scss';
import '@/feature/Article/Article.scss';
import '@/feature/Article/TableOfContents.scss';

interface Props {
  pageContext: Article;
}

export default (prop: Props) => {
  const data = prop.pageContext;
  // クリックするとそこまで飛べる目次を生成する
  const table_of_contents = ExtractHeading(data.body);

  return (
    <Layout>
      <Head
        title={data.title}
        desc={RemoveMD(data.body)}
        url={'/blog/article/' + data.slug}
        thumbnail={data.thumbnail}
      />
      <div className='Article-container'>
        {/* 記事メイン部分 */}
        <section className='Article-body'>
          <h1 className='Article-title'>{data.title}</h1>
          {/* サムネ */}
          <Thumbnail url={data.thumbnail} />
          {/* 公開日と更新日 */}
          <div className='Article-date'>
            <div className='Article-date_update'>
              <p className='desc'>記事の更新日</p>
              <i className='fas fa-history' />
              <p>{data.updated_at.slice(0, 10)}</p>
            </div>
            <div className='Article-date_publish'>
              <p className='desc'>記事の投稿日</p>
              <i className='fas fa-upload' />
              <p>{data.published_at.slice(0, 10)}</p>
            </div>
          </div>
          {/* タグ */}
          <TagContainer tags={data.tags} />

          <BlogContent body={data.body} />
        </section>

        {/* サイドバー */}
        <div className='Article-side'>
          <ProfileCard />
          <TagListCard />
          {table_of_contents.length > 2 && (
            <section className='Article-side_toc'>
              {table_of_contents.map(item => (
                <li className={`toc-${item.size}`}>
                  <a href={`#${item.body.toLowerCase()}`}>{item.body}</a>
                </li>
              ))}
            </section>
          )}
        </div>
      </div>
    </Layout>
  );
};
