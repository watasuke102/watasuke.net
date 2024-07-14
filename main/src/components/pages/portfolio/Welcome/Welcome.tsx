// watasuke.net
// CopyRight (c) 2021-2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import * as style from './Welcome.css';
import * as portfolio_common from '@pages/portfolio/common.css';
import {AnimatePresence, motion} from 'framer-motion';
import {useStaticQuery, graphql} from 'gatsby';
import {StaticImage} from 'gatsby-plugin-image';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import Raw from 'rehype-raw';
import Gfm from 'remark-gfm';
import toml from 'toml';
import {Transition} from '@utils/Transition';
import IconEnvelope from '@assets/icons/Links/envelope.svg';
import IconGitHub from '@assets/icons/Links/github.svg';
import IconTwitter from '@assets/icons/Links/twitter.svg';

interface BioToml {
  body_ja: string;
  body_en: string;
}

interface Props {
  animation_enabled: boolean;
  lang: string;
}

export const Welcome = (props: Props): React.ReactElement => {
  const [bio_box_shown, set_bio_box_shown] = React.useState(!props.animation_enabled);

  const bio_toml: BioToml = toml.parse(
    useStaticQuery(graphql`
      query {
        portfolioToml(name: {eq: "bio.toml"}) {
          body
        }
      }
    `).portfolioToml.body,
  );

  const bio_animation = {
    initial: {width: '0%'},
    animate: {
      width: '100%',
      transition: {
        delay: 1.5,
        // easeOutExpo
        ease: [0.16, 1, 0.3, 1],
      },
    },
    exit: {
      width: '0%',
      transition: {
        duration: 0.3,
        // easeInExpo
        ease: [0.7, 0, 0.84, 0],
      },
    },
    onAnimationComplete: () => set_bio_box_shown(true),
    transition: {duration: 0.3},
  };

  return (
    <AnimatePresence>
      <motion.div
        className={portfolio_common.container}
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={Transition(props.animation_enabled, {delay: 0.5, duration: 1})}
      >
        <h2 className={style.greeting}>Hi there👋</h2>

        <div className={style.avatar_and_name}>
          <StaticImage className={style.avatar} height={200} src='../../../../assets/icon.jpg' alt='icon' />
          <div>
            <p className={style.name_main}>わたすけ</p>
            <p className={style.name_sub}>Watasuke</p>
            <div>
              <div className={style.icon_and_text}>
                <IconTwitter />
                <span className={style.text}>@Watasuke102</span>
              </div>
              <div className={style.icon_and_text}>
                <IconGitHub />
                <span className={style.text}>watasuke102</span>
              </div>
              <div className={style.icon_and_text}>
                <IconEnvelope />
                <span className={style.text}>watasuke102@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className={style.bio}>
          <ReactMarkdown remarkPlugins={[Gfm]} rehypePlugins={[Raw]} className={bio_box_shown ? '' : style.bio_hidden}>
            {props.lang !== 'en' ? bio_toml.body_ja : bio_toml.body_en}
          </ReactMarkdown>
          <AnimatePresence>
            {!bio_box_shown && (
              <motion.div
                className={style.bio_animation}
                {...(props.animation_enabled ? bio_animation : {initial: {width: 0}})}
              />
            )}
          </AnimatePresence>
        </div>

        <div className={style.indicator_space} />
        <div className={portfolio_common.next_page}>
          <span>Scroll</span>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
