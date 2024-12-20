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
import {gen_metadata, JsonLd} from '@utils/Metadata';
import IconLeft from '@assets/icons/general/left.svg';

export async function generateMetadata({params}: Props) {
  const slug = (await params).slug;
  const {article} = await ql().tag({slug});
  if (!article) {
    return {};
  }
  return gen_metadata(article.title, article.tldr, `/blog/tag/${slug}`);
}

type Props = {
  params: Promise<{slug: string}>;
};
export default async function ArticleListPage({params}: Props) {
  const {allPublicArticles} = await ql().allArticlesWithTag({
    tags: [(await params).slug],
  });
  return (
    <>
      <JsonLd breadcrumb_list={breadcrumb_list} />
      <Breadcrumb breadcrumb_list={breadcrumb_list} />
      <h1>記事一覧</h1>
      <div className={css.container}>
        <ArticleList list={allPublicArticles} />
      </div>
    </>
  );
}
