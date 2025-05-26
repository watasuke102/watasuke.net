// watasuke.net
// CopyRight (c) 2021-2025 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @watasuke1024
// This software is released under the MIT or MIT SUSHI-WARE License.
import * as css from './Whoami.css';
import {cs} from '@watasuke.net/common';
import {FadeFloatIn} from '@pages/portfolio/components/FadeFloatIn';
import {BioEn, BioJa} from '@data/bio';
import IconClose from '@assets/icons/general/close.svg';
import IconExpand from '@assets/icons/general/expand.svg';

export function Whoami(props: {lang: 'ja' | 'en'}) {
  const prefix = (
    <>
      <span className={css.host}>watasuke@watasuke.net</span>:~${' '}
    </>
  );
  return (
    <section className={css.container}>
      <div className={css.tabbar}>
        <div className={cs(css.tabbar_button, css.tabbar_close_button)}>
          <IconClose />
        </div>
        <div className={cs(css.tabbar_button, css.tabbar_minimize_button)}>
          <div className={css.minimize_button_icon} />
        </div>
        <div className={cs(css.tabbar_button, css.tabbar_expand_button)}>
          <IconExpand />
        </div>
        <span>/usr/bin/zsh - terminal</span>
      </div>
      <FadeFloatIn delay={1.0} duration={0.4}>
        <span>
          {prefix}
          <span className={css.command}>~/.local/whoami</span>
        </span>
      </FadeFloatIn>
      <FadeFloatIn delay={1.3} duration={0.4}>
        {props.lang === 'en' ? <BioEn /> : <BioJa />}
      </FadeFloatIn>
    </section>
  );
}
