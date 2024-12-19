// watasuke.net
// CopyRight (c) 2021-2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import * as css from '@feature/Article/Article.css';
import Link from 'next/link';
import {Breadcrumb} from '@common';
import {ExtractHeading, TocMapper} from '@watasuke.net/common';
import {AllTagList} from '@feature/Tag';
import {BlogContent} from '@feature/Article';
import {ql} from '@utils/QL';
import {GenBreadcrumb} from '@utils/Breadcrumb';
import IconLeft from '@assets/icons/general/left.svg';

const breadcrumb_list = (title: string) =>
  GenBreadcrumb([{name: 'Blog', item: '/blog'}, {name: 'Article', item: '/blog/article'}, {name: title}]);

export default async function Page({params}: {params: Promise<{slug: string}>}) {
  const slug = (await params).slug;
  const {article} = await ql().article({slug});
  if (!article) {
    // FIXME: proper error handle
    return <></>;
  }
  const headings = ExtractHeading(article.body);

  return (
    <>
      <Breadcrumb breadcrumb_list={breadcrumb_list(article.title)} />
      <Link href='/blog' className={css.back_link}>
        <IconLeft />
        記事一覧ページへ移動
      </Link>
      <main className={css.container}>
        {/* 記事メイン部分 */}
        <article className={css.blogcontent_wrapper}>
          <BlogContent data={article} headings={headings} newer={undefined} older={undefined} />
        </article>

        {/* サイドバー */}
        <aside className={css.side}>
          {/* <ProfileCard /> */}
          <section className={css.side_tag}>
            <span className={css.head}>タグ</span>
            <AllTagList />
          </section>
          {headings && (
            <nav className={css.side_toc}>
              <TocMapper headings={headings} />
            </nav>
          )}
        </aside>
      </main>
    </>
  );
}
