// watasuke.net
// CopyRight (c) 2021-2025 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @watasuke1024
// This software is released under the MIT or MIT SUSHI-WARE License.
import * as css from '@feature/Article/Article.css';
import Link from 'next/link';
import {Breadcrumb} from '@common';
import {ExtractHeading, TocMapper} from '@watasuke.net/common';
import {AllTagList} from '@feature/Tag';
import {BlogContent, ProfileCard} from '@feature/Article';
import {ql} from '@utils/QL';
import {GenBreadcrumb} from '@utils/Breadcrumb';
import {gen_metadata, JsonLd} from '@utils/Metadata';
import IconLeft from '@assets/icons/general/left.svg';

type Props = {
  params: Promise<{slug: string}>;
};

export async function generateStaticParams() {
  return (await ql().allArticleSlugs()).allPublicArticles;
}
export async function generateMetadata({params}: Props) {
  const slug = (await params).slug;
  const {article} = await ql().articleMeadata({slug});
  if (!article) {
    return {};
  }
  return gen_metadata(article.title, article.tldr, `/blog/article/${slug}`);
}

export default async function Page({params}: Props) {
  const slug = (await params).slug;
  const {article, neighbors} = await ql().articleForArticlePage({slug});
  if (!article) {
    // FIXME: proper error handle
    return <></>;
  }
  const breadcrumb_list = GenBreadcrumb([
    {name: 'Blog', item: '/blog'},
    {name: 'Article', item: '/blog/article'},
    {name: article.title},
  ]);
  const headings = ExtractHeading(article.body);

  return (
    <>
      <JsonLd breadcrumb_list={breadcrumb_list} />
      <Breadcrumb breadcrumb_list={breadcrumb_list} />
      <Link href='/blog' className={css.back_link}>
        <IconLeft />
        記事一覧ページへ移動
      </Link>
      <main className={css.container}>
        {/* 記事メイン部分 */}
        <article className={css.blogcontent_wrapper}>
          <BlogContent
            data={article}
            headings={headings}
            newer={neighbors.newer}
            older={neighbors.older}
          />
        </article>

        {/* サイドバー */}
        <aside className={css.side}>
          <ProfileCard />
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
