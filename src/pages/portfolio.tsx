/*!
 * portfolio.tsx
 *
 * CopyRight (c) 2021-2023 Watasuke
 * Email  : <watasuke102@gmail.com>
 * Twitter: @Watasuke102
 * This software is released under the MIT SUSHI-WARE License.
 */
import '@/pages/portfolio.scss';
import {Seo} from '@/common';
import React from 'react';
import {PortfolioContainer, Entrypoint, Welcome, Skills, Works, Links, End} from '@/feature/portfolio';
import {GenBreadcrumb} from '@utils/Breadcrumb';

const breadcrumb_list = GenBreadcrumb([{name: 'Portfolio'}]);

export default function Portfolio(): React.ReactElement {
  const [lang, set_lang] = React.useState<string | undefined>();
  const [animation, set_animation] = React.useState<boolean | undefined>();

  React.useEffect(() => {
    const params = new URLSearchParams(location.search);
    set_lang(params.get('lang') ?? undefined);
    const animation_param = params.get('animation');
    if (animation_param) {
      set_animation(animation_param !== 'false');
    } else {
      set_animation(undefined);
    }
  }, []);

  const complete = React.useCallback((lang: string, animation: boolean) => {
    set_lang(lang);
    set_animation(animation);
  }, []);

  if (lang === undefined || animation === undefined) {
    return <Entrypoint complete={complete} />;
  }

  return (
    <div id='portfolio-container'>
      <PortfolioContainer animation_enabled={animation}>
        <Welcome animation_enabled={animation} />
        <Skills />
        <Works />
        <Links />
        <End />
      </PortfolioContainer>
    </div>
  );
}

export const Head = (): React.ReactElement => (
  <Seo title={'ポートフォリオ'} desc={'ポートフォリオです'} url={'/portfolio'} breadcrumb_list={breadcrumb_list} />
);
