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
import {AnimatePresence, motion} from 'framer-motion';
import {Switch} from '@watasuke.net/common';
import {color} from '@watasuke.net/common/src/css/color';
import {Welcome, Skills, History, Links, End} from '@pages/portfolio';
import {Whoami} from '@pages/portfolio/Whoami';
import {GenBreadcrumb} from '@utils/Breadcrumb';
import IconLeft from '@assets/icons/general/left.svg';
import IconTranslate from '@assets/icons/general/translate.svg';

const breadcrumb_list = GenBreadcrumb([{name: 'Portfolio'}]);

const blind_width = 60;
// prettier-ignore
const visible_mask   = `repeating-linear-gradient(-60deg, ${color.bg} 0px 0px, transparent 0px ${blind_width}px)`;
const invisible_mask = `repeating-linear-gradient(-60deg, ${color.bg} 0px ${blind_width}px, transparent 0px ${blind_width}px)`;

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
    <AnimatePresence>
      <div className={css.main_container}>
        <header className={css.header}>
          <Link to='/'>
            <IconLeft />
          </Link>
          <form className={css.animation_form}>
            <label htmlFor='animation_switch'>{lang === 'en' ? 'アニメーション' : 'Animation'}</label>
            <Switch checked={animation_enabled} on_click={() => set_animation_enabled(f => !f)} id='animation_switch' />
          </form>
          <button className={css.translate_button} onClick={() => set_lang(l => (l === 'ja' ? 'en' : 'ja'))}>
            <span className={css.button_text}>
              {lang === 'en' ? '表示を日本語に切り替える' : 'Switch language to English'}
            </span>
            <IconTranslate />
          </button>
        </header>
        <main className={css.portfolio_container}>
          <Welcome animation_enabled={animation_enabled} lang={lang} />
          <Whoami animation_enabled={animation_enabled} lang={lang} />
          <Skills animation_enabled={animation_enabled} lang={lang} />
          <History animation_enabled={animation_enabled} lang={lang} />
          <Links animation_enabled={animation_enabled} lang={lang} />
          <End />
        </main>
        {/* page cut in animation */}
        <motion.div
          initial={{background: invisible_mask}}
          animate={{background: visible_mask}}
          // easeOutExpo
          transition={{delay: 0.6, duration: 0.3, ease: [0.16, 1, 0.3, 1]}}
          className={css.cutin_animation}
        />
      </div>
    </AnimatePresence>
  );
}

export function Head(): React.ReactElement {
  return (
    <Seo title={'ポートフォリオ'} desc={'ポートフォリオです'} url={'/portfolio'} breadcrumb_list={breadcrumb_list} />
  );
}
