// Article.tsx
//
// CopyRight (c) 2021-2023 Watasuke
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import {Seo, Layout, Breadcrumb} from '@/common';
import React from 'react';
import RemoveMD from 'remove-markdown';
import '@/common/main.scss';
import {BlogContent, Thumbnail} from '@/feature/Article';
import '@/feature/Article/Article.scss';
import '@/feature/Article/TableOfContents.scss';
import {ProfileCard} from '@/feature/ArticleLayout/ProfileCard';
import {AllTagList, TagContainer} from '@/feature/Tag';
import {GenBreadcrumb} from '@utils/Breadcrumb';
import ExtractHeading from '@utils/ExtractHeading';
import Article from '@mytypes/Article';

interface Props {
  pageContext: Article;
}

const breadcrumb_list = (title: string) =>
  GenBreadcrumb([{name: 'Blog', item: '/blog'}, {name: 'Article', item: '/blog/article'}, {name: title}]);

export default function Articale(prop: Props): React.ReactElement {
  const data = prop.pageContext;
  // クリックするとそこまで飛べる目次を生成する
  const table_of_contents = ExtractHeading(data.body);

  return (
    <Layout>
      <Breadcrumb breadcrumb_list={breadcrumb_list(data.title)} />
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
          <section className='Article-side_tag'>
            <span className='head'>タグ</span>
            <AllTagList />
          </section>
          {table_of_contents.length > 2 && (
            <section className='Article-side_toc'>
              {table_of_contents.map(item => (
                <li key={item.body} className={`toc-${item.size}`}>
                  <a href={`#${item.body.toLowerCase()}`}>{item.body}</a>
                </li>
              ))}
            </section>
          )}
        </div>
      </div>
    </Layout>
  );
}

export const Head = ({pageContext}: Props): React.ReactElement => (
  <Seo
    title={pageContext.title}
    desc={RemoveMD(pageContext.body)}
    url={'/blog/article/' + pageContext.slug}
    thumbnail={pageContext.thumbnail}
    breadcrumb_list={breadcrumb_list(pageContext.title)}
  />
);
