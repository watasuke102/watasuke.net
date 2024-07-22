// watasuke.net
// CopyRight (c) 2021-2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import * as css from './Whoami.css';
import {AnimatePresence, HTMLMotionProps, motion} from 'framer-motion';
import {useStaticQuery, graphql} from 'gatsby';
import toml from 'toml';
import ReactMarkdown from 'react-markdown';
import Raw from 'rehype-raw';
import Gfm from 'remark-gfm';
import React from 'react';

interface BioToml {
  body_ja: string;
  body_en: string;
}

interface Props {
  animation_enabled: boolean;
  lang: string;
}

export function Whoami(props: Props): JSX.Element {
  const [bio_box_shown, set_bio_box_shown] = React.useState(!props.animation_enabled);

  const bio_animation: HTMLMotionProps<'div'> = {
    initial: {width: '0%'},
    animate: {
      width: '100%',
      transition: {
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

  const bio_toml: BioToml = toml.parse(
    useStaticQuery(graphql`
      query portfolioBio {
        portfolioToml(name: {eq: "bio.toml"}) {
          body
        }
      }
    `).portfolioToml.body,
  );

  return (
    <section className={css.bio}>
      <h2>
        <code>$ whoami</code>
      </h2>
      <ReactMarkdown remarkPlugins={[Gfm]} rehypePlugins={[Raw]} className={bio_box_shown ? '' : css.bio_hidden}>
        {props.lang !== 'en' ? bio_toml.body_ja : bio_toml.body_en}
      </ReactMarkdown>
      <AnimatePresence>
        {!bio_box_shown && (
          <motion.div
            className={css.bio_animation}
            {...(props.animation_enabled ? bio_animation : {initial: {width: 0}})}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
