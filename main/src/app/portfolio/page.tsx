// watasuke.net
// CopyRight (c) 2021-2026 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @watasuke1024
// This software is released under the MIT or MIT SUSHI-WARE License.
import {Portfolio} from '@pages/portfolio/Portfolio';
import {Footer} from '@feature/Layout/Footer';
import {gen_template, JsonLd} from '@utils/Metadata';
import {GenBreadcrumb} from '@utils/Breadcrumb';
import {get_params, SearchParams} from '@utils/SearchParams';

const breadcrumb_list = GenBreadcrumb([{name: 'Portfolio'}]);
export const {viewport, metadata} = gen_template(
  'ポートフォリオ',
  '`わたすけ` のスキル、これまでの活動などを紹介するポートフォリオページです',
  '/portfolio',
);

export const dynamic = 'force-static';

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
        init_lang={
          // init_lang becomes only when `lang` param is EXACTLY equals to 'en'
          get_params(params, 'lang') === 'en' ? 'en' : 'ja'
        }
      />
      <Footer />
    </>
  );
}
