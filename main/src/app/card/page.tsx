// watasuke.net
// CopyRight (c) 2021-2026 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @watasuke1024
// This software is released under the MIT or MIT SUSHI-WARE License.
import {CardPage} from '@pages/card';
import {GenBreadcrumb} from '@utils/Breadcrumb';
import {gen_template, JsonLd} from '@utils/Metadata';
import {get_params, SearchParams} from '@utils/SearchParams';

export const {viewport, metadata} = gen_template('card', '名刺です', '/card');
export const dynamic = 'force-static';

export default async function Card({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const params = await searchParams;
  const breadcrumb_list = GenBreadcrumb([{name: 'Card'}]);
  return (
    <>
      <JsonLd breadcrumb_list={breadcrumb_list} />
      <CardPage init_disable_button={get_params(params, 'disable_button')} />
    </>
  );
}
