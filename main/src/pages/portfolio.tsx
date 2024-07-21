// watasuke.net
// CopyRight (c) 2021-2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import {Seo} from '@common';
import React from 'react';
import {Welcome, Skills, History, Links} from '@pages/portfolio';
import {GenBreadcrumb} from '@utils/Breadcrumb';

const breadcrumb_list = GenBreadcrumb([{name: 'Portfolio'}]);

interface Props {
  location: {
    href: string;
  };
}

export default function Portfolio(props: Props): React.ReactElement {
  const params = new URLSearchParams(props.location.href);
  const animation = (params.get('animation') ?? '') !== 'false';
  const lang = params.get('lang') ?? 'ja';

  return (
    <main id='portfolio-container' style={{backgroundColor: '#98c379'}}>
      <Welcome animation_enabled={animation} lang={lang} />
      <Skills animation_enabled={animation} lang={lang} />
      <History animation_enabled={animation} lang={lang} />
      <Links animation_enabled={animation} lang={lang} />
    </main>
  );
}

export function Head(): React.ReactElement {
  return (
    <Seo title={'ポートフォリオ'} desc={'ポートフォリオです'} url={'/portfolio'} breadcrumb_list={breadcrumb_list} />
  );
}
