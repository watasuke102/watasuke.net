// watasuke.net
// CopyRight (c) 2021-2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import {Portfolio} from '@pages/portfolio/Portfolio';
import {gen_template, JsonLd} from '@utils/Metadata';
import {GenBreadcrumb} from '@utils/Breadcrumb';

const breadcrumb_list = GenBreadcrumb([{name: 'Portfolio'}]);
export const {viewport, metadata} = gen_template(
  'ポートフォリオ',
  '`わたすけ` のスキル、これまでの活動などを紹介するポートフォリオページです',
  '/portfolio',
);

interface Props {
  animation: Promise<string | undefined>;
  lang: Promise<string | undefined>;
}

export default async function PortfolioPage(props: Props) {
  const animation = await props.animation;
  const lang = await props.lang;
  return (
    <>
      <JsonLd breadcrumb_list={breadcrumb_list} />
      <Portfolio init_animation={animation} init_lang={lang} />
    </>
  );
}
