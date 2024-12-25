// watasuke.net
// CopyRight (c) 2021-2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import * as css from '@feature/Article/Article.css';
import {Breadcrumb} from '@common';
import {AdsInArticle} from '@watasuke.net/common';
import {ArticleList} from '@feature/ArticleList';
import {ql} from '@utils/QL';
import {GenBreadcrumb} from '@utils/Breadcrumb';
import {gen_metadata, JsonLd, viewport} from '@utils/Metadata';

export async function generateStaticParams() {
  return (await ql().allTagSlugs()).allTags;
}
export async function generateMetadata({params}: Props) {
  const slug = (await params).slug;
  const {tag} = await ql().tag({slug});
  if (!tag) {
    return {};
  }
  return gen_metadata(
    `タグ「${tag.name}」`,
    `タグ「${tag.name}」が付いた記事の一覧ページ`,
    `/blog/tag/${slug}`,
  );
}
export const generateViewport = () => viewport;

type Props = {
  params: Promise<{slug: string}>;
};
export default async function ArticleListPage({params}: Props) {
  const slug = (await params).slug;
  const {allPublicArticles, tag} = await ql().articlesWithTag({
    tagSlug: slug,
  });
  if (!tag) {
    return (
      <h1>
        Tag <code>{slug}</code> is not found
      </h1>
    );
  }
  const breadcrumb_list = GenBreadcrumb([
    {name: 'Blog', item: '/blog'},
    {name: 'Tag', item: '/blog/tag'},
    {name: tag.name},
  ]);
  return (
    <>
      <JsonLd breadcrumb_list={breadcrumb_list} />
      <Breadcrumb breadcrumb_list={breadcrumb_list} />
      <h1>タグ「{tag.name}」が付いた記事一覧</h1>
      <div className={css.container}>
        <ArticleList list={allPublicArticles} />
      </div>
      <AdsInArticle />
    </>
  );
}
