// watasuke.net
// CopyRight (c) 2021-2026 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @watasuke1024
// This software is released under the MIT or MIT SUSHI-WARE License.
import {apiUrl} from '@watasuke.net/config/config';
import * as css from '@feature/Article/Article.css';
import Link from 'next/link';
import {Breadcrumb} from '@common';
import {redirect, RedirectType} from 'next/navigation';
import {
  AdsInArticle,
  ExtractHeading,
  Markdown,
  TocMapper,
} from '@watasuke.net/common';
import {EmbedCard, InnerEmbedCard, ProfileCard} from '@feature/Article';
import {Menu} from '@feature/Layout';
import {CommentArea} from '@feature/Article/CommentArea/CommentArea';
import {TocInArticle} from '@feature/TableOfContents';
import {ql} from '@utils/QL';
import {GenBreadcrumb} from '@utils/Breadcrumb';
import {gen_metadata, JsonLd} from '@utils/Metadata';
import IconLeft from '@assets/icons/general/left.svg';

type Props = {
  params: Promise<{year: string; month: string}>;
};

export async function generateStaticParams() {
  return (await ql().allMonthlies()).allPublicMonthlies.map(e => {
    return {
      year: e.year.toString(),
      month: e.month.toString().padStart(2, '0'),
    };
  });
}
export async function generateMetadata(props: Props) {
  const params = await props.params;
  const year = Number(params.year);
  const month = Number(params.month);
  const {monthly} = await ql().monthlyPage({year, month});
  if (!monthly) {
    return {};
  }
  const year_str = monthly.year.toString();
  const month_str = monthly.month.toString().padStart(2, '0');
  return gen_metadata(
    `月報：${year_str}/${month_str}`,
    monthly.tldr,
    `/blog/monthly/${year_str}/${month_str}`,
  );
}

export default async function Page(props: Props) {
  const params = await props.params;
  const year_str = params.year;
  const month_str = params.month;
  if (month_str.length !== 2) {
    redirect(
      `/blog/monthly/${year_str}/${month_str.padStart(2, '0')}`,
      RedirectType.replace,
    );
  }
  const year = Number(params.year);
  const month = Number(params.month);
  const {monthly} = await ql().monthlyPage({year, month});
  if (!monthly) {
    // FIXME: proper error handle
    return <></>;
  }

  const breadcrumb_list = GenBreadcrumb([
    {name: 'Blog', item: '/blog'},
    {name: 'Monthly', item: '/blog/monthly'},
    {name: year_str, item: `/blog/monthly/${year_str}`},
    {name: month_str},
  ]);
  const headings = ExtractHeading(monthly.body);

  return (
    <>
      <JsonLd breadcrumb_list={breadcrumb_list} />
      <Breadcrumb breadcrumb_list={breadcrumb_list} />
      <Link href='/blog' className={css.back_link}>
        <IconLeft />
        記事一覧ページへ移動
      </Link>
      <main className={css.container}>
        <article className={css.blogcontent_wrapper}>
          <h1>
            月報：{year_str}/{month_str}
          </h1>

          <AdsInArticle />
          <TocInArticle headings={headings} />

          <Markdown
            md={monthly.body.replaceAll(
              '/img',
              `${apiUrl}/img/monthly/${year_str}/${month_str}`,
            )}
            embed_card={EmbedCard}
            inner_embed_card={InnerEmbedCard}
          />
          <AdsInArticle />
          <CommentArea category='Monthly' />
        </article>
        <aside className={css.side}>
          <ProfileCard />
          {headings && headings.length > 0 && (
            <nav className={css.side_toc}>
              <TocMapper headings={headings} />
            </nav>
          )}
        </aside>
      </main>

      <Menu
        additional_item={
          <>
            <h2 className={css.heading}>Table of Contents</h2>
            <nav className={css.toc_wrapper}>
              <TocMapper headings={headings} />
            </nav>
          </>
        }
      />
    </>
  );
}
