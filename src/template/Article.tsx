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
import {BlogContent} from '@/feature/Article';
import * as style from '@/feature/Article/Article.css';
import {ProfileCard} from '@/feature/Article/ProfileCard/ProfileCard';
import {TocRight} from '@/feature/Article/TocRight/TocRight';
import {AllTagList} from '@/feature/Tag';
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
      <div className={style.container}>
        {/* 記事メイン部分 */}
        <section className={style.blogcontent_wrapper}>
          <BlogContent data={data} />
        </section>

        {/* サイドバー */}
        <div className={style.side}>
          <ProfileCard />
          <section className={style.side_tag}>
            <span className={style.head}>タグ</span>
            <AllTagList />
          </section>
          {table_of_contents.length > 2 && <TocRight table_of_contents={table_of_contents} />}
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
