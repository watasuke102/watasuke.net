// watasuke.net
// CopyRight (c) 2021-2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import {Portfolio} from '@pages/portfolio/Portfolio';
import {gen_template, JsonLd} from '@utils/Metadata';
import {GenBreadcrumb} from '@utils/Breadcrumb';
import {get_params, SearchParams} from '@utils/SearchParams';

const breadcrumb_list = GenBreadcrumb([{name: 'Portfolio'}]);
export const {viewport, metadata} = gen_template(
  'ポートフォリオ',
  '`わたすけ` のスキル、これまでの活動などを紹介するポートフォリオページです',
  '/portfolio',
);

export default async function PortfolioPage({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const params = await searchParams;
  return (
    <>
      <JsonLd breadcrumb_list={breadcrumb_list} />
      <Portfolio
        init_animation={get_params(params, 'animation')}
        init_lang={get_params(params, 'lang')}
      />
    </>
  );
}
