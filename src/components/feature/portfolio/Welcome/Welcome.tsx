// Welcome.tsx
//
// CopyRight (c) 2021-2023 Watasuke
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT SUSHI-WARE License.
import {AnimatePresence, motion} from 'framer-motion';
import {useStaticQuery, graphql} from 'gatsby';
import {StaticImage} from 'gatsby-plugin-image';
import React from 'react';
import toml from 'toml';
import {Transition} from '@utils/Transition';
import {TextAnimation, TextAnimationBody} from './TextAnimation';
import './Welcome.scss';

interface BioToml {
  body_ja: TextAnimationBody[];
  body_en: TextAnimationBody[];
}

interface Props {
  animation_enabled: boolean;
  lang: string;
}

export const Welcome = (props: Props): React.ReactElement => {
  const bio_animation = React.useMemo(() => {
    const bio_toml: BioToml = toml.parse(
      useStaticQuery(graphql`
        query {
          portfolioToml(name: {eq: "bio.toml"}) {
            body
          }
        }
      `).portfolioToml.body,
    );
    const sentences: TextAnimationBody[] = props.lang !== 'en' ? bio_toml.body_ja : bio_toml.body_en;
    return <TextAnimation animation_enabled={props.animation_enabled} body={sentences} />;
  }, [props]);
  const [avatar_and_name_displayed, set_avatar_and_name_displayed] = React.useState(false);

  return (
    <AnimatePresence>
      <motion.div
        id='portfolio-welcome'
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={Transition(props.animation_enabled, {delay: 0.5, duration: 1})}
        onAnimationComplete={() => set_avatar_and_name_displayed(true)}
      >
        <h2 className='greeting'>Hi there👋</h2>

        <div className='avatar-and-name'>
          <StaticImage className='avatar' height={200} src='../../../../assets/icon.jpg' alt='icon' />
          <div>
            <p className='name-main'>わたすけ</p>
            <p className='name-sub'>Watasuke</p>
            <div>
              <div className='icon-and-text'>
                <i className='fab fa-twitter' />
                <p>@Watasuke102</p>
              </div>
              <div className='icon-and-text'>
                <i className='fab fa-github' />
                <p>watasuke102</p>
              </div>
              <div className='icon-and-text'>
                <i className='fas fa-envelope' />
                <p>watasuke102@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        {avatar_and_name_displayed ? <div className='bio'>{bio_animation}</div> : <div className='bio_placeholder' />}
        <div className='next-page'>
          <span>Scroll</span>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
