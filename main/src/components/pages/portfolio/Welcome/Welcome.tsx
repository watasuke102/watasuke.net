// watasuke.net
// CopyRight (c) 2021-2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import * as css from './Welcome.css';
import {motion} from 'framer-motion';
import {StaticImage} from 'gatsby-plugin-image';
import React from 'react';
import {Transition} from '@utils/Transition';
import IconEnvelope from '@assets/icons/Links/envelope.svg';
import IconGitHub from '@assets/icons/Links/github.svg';
import IconTwitter from '@assets/icons/Links/twitter.svg';

interface Props {
  animation_enabled: boolean;
  lang: string;
}

export function Welcome(props: Props): React.ReactElement {
  return (
    <section className={css.container}>
      <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={Transition(props.animation_enabled, {delay: 1.3, duration: 1})}
      >
        <h2 className={css.greeting}>Hi there👋</h2>

        <div className={css.avatar_and_name}>
          <StaticImage className={css.avatar} height={240} src='@assets/icon.jpg' alt='icon' />
          <div>
            <p className={css.name_main}>わたすけ</p>
            <p className={css.name_sub}>Watasuke</p>
            <div>
              <div className={css.icon_and_text}>
                <IconTwitter />
                <span>@Watasuke102</span>
              </div>
              <div className={css.icon_and_text}>
                <IconGitHub />
                <span>watasuke102</span>
              </div>
              <div className={css.icon_and_text}>
                <IconEnvelope />
                <span>watasuke102@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className={css.next_page}>
          <span>Scroll</span>
        </div>
      </motion.div>
    </section>
  );
}
