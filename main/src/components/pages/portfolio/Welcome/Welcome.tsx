// watasuke.net
// CopyRight (c) 2021-2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import * as css from './Welcome.css';
import {motion} from 'framer-motion';
import React from 'react';
import Image from 'next/image';
import {Transition} from '@utils/Transition';
import IconEnvelope from '@assets/icons/Links/envelope.svg';
import IconGitHub from '@assets/icons/Links/github.svg';
import IconTwitter from '@assets/icons/Links/twitter.svg';

interface Props {
  animation_enabled: boolean;
  lang: string;
}

export function Welcome(props: Props) {
  return (
    <section className={css.container}>
      <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={Transition(props.animation_enabled, {delay: 1.3, duration: 1})}
      >
        <h2 className={css.greeting}>Hi there👋</h2>

        <div className={css.avatar_and_name}>
          <Image className={css.avatar} width={240} height={240} src='/icon.jpg' alt='icon' />
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
      </motion.div>

      <motion.div
        className={css.next_page}
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={Transition(props.animation_enabled, {delay: 2.5, duration: 0.5})}
      >
        <span>Scroll</span>
      </motion.div>
    </section>
  );
}
