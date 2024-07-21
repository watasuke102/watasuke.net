// watasuke.net
// CopyRight (c) 2021-2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import * as css from '@pages/portfolio/portfolio.css';
import {Seo} from '@common';
import React from 'react';
import {Link} from 'gatsby';
import {Switch} from '@watasuke.net/common';
import {Welcome, Skills, History, Links} from '@pages/portfolio';
import {GenBreadcrumb} from '@utils/Breadcrumb';
import IconLeft from '@assets/icons/general/left.svg';
import IconTranslate from '@assets/icons/general/translate.svg';

const breadcrumb_list = GenBreadcrumb([{name: 'Portfolio'}]);

interface Props {
  location: {
    href: string;
  };
}

export default function Portfolio(props: Props): React.ReactElement {
  const params = new URLSearchParams(props.location.href);
  const [animation_enabled, set_animation_enabled] = React.useState<boolean>(
    (params.get('animation') ?? '') !== 'false',
  );
  const [lang, set_lang] = React.useState<string>(params.get('lang') ?? 'ja');

  return (
    <main className={css.main_container}>
      <header className={css.header}>
        <Link to='/'>
          <IconLeft />
        </Link>
        <form className={css.animation_form}>
          <label htmlFor='animation_switch'>{lang === 'en' ? 'アニメーション' : 'Animation'}</label>
          <Switch checked={animation_enabled} on_click={() => set_animation_enabled(f => !f)} id='animation_switch' />
        </form>
        <button className={css.translate_button} onClick={() => set_lang(l => (l === 'ja' ? 'en' : 'ja'))}>
          {lang === 'en' ? '表示を日本語に切り替える' : 'Switch language to English'}
          <IconTranslate />
        </button>
      </header>
      <Welcome animation_enabled={animation_enabled} lang={lang} />
      <Skills animation_enabled={animation_enabled} lang={lang} />
      <History animation_enabled={animation_enabled} lang={lang} />
      <Links animation_enabled={animation_enabled} lang={lang} />
    </main>
  );
}

export function Head(): React.ReactElement {
  return (
    <Seo title={'ポートフォリオ'} desc={'ポートフォリオです'} url={'/portfolio'} breadcrumb_list={breadcrumb_list} />
  );
}
