// watasuke.net
// CopyRight (c) 2021-2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import {Seo} from '@common';
import {PortfolioContainer, Entrypoint, Welcome, Skills, History, Links, End} from '@pages/portfolio';
import React from 'react';
import {GenBreadcrumb} from '@utils/Breadcrumb';

const breadcrumb_list = GenBreadcrumb([{name: 'Portfolio'}]);

export default function Portfolio(): React.ReactElement {
  const [lang, set_lang] = React.useState<string | undefined>();
  const [animation, set_animation] = React.useState<boolean | undefined>();
  const [page_transition, set_page_transition] = React.useState<boolean | undefined>();

  React.useEffect(() => {
    const params = new URLSearchParams(location.search);
    set_lang(params.get('lang') ?? undefined);

    const animation_param = params.get('animation');
    set_animation(animation_param === null ? undefined : animation_param !== 'false');

    const page_transition_param = params.get('page_transition');
    set_page_transition(page_transition_param === null ? undefined : page_transition_param !== 'false');
  }, []);

  const complete = React.useCallback((lang: string, page_transition: boolean, animation: boolean) => {
    set_lang(lang);
    set_animation(animation);
    set_page_transition(page_transition);
  }, []);

  if (lang === undefined || animation === undefined || page_transition === undefined) {
    return <Entrypoint complete={complete} />;
  }

  return (
    <div id='portfolio-container'>
      <PortfolioContainer animation_enabled={animation} page_transition_enabled={page_transition}>
        <Welcome animation_enabled={animation} lang={lang} />
        <Skills animation_enabled={animation} lang={lang} />
        <History animation_enabled={animation} lang={lang} />
        <Links animation_enabled={animation} lang={lang} />
        <End />
      </PortfolioContainer>
    </div>
  );
}

export const Head = (): React.ReactElement => (
  <Seo title={'ポートフォリオ'} desc={'ポートフォリオです'} url={'/portfolio'} breadcrumb_list={breadcrumb_list} />
);
