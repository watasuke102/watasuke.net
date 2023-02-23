// Welcome.tsx
//
// CopyRight (c) 2021-2023 Watasuke
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT SUSHI-WARE License.
import {AnimatePresence, motion} from 'framer-motion';
import {StaticImage} from 'gatsby-plugin-image';
import React from 'react';
import {TextAnimation} from './TextAnimation';
import './Welcome.scss';

export const Welcome = (): React.ReactElement => {
  const bio_animation = React.useMemo(
    () => (
      <TextAnimation
        body={[
          {
            type: 'plain',
            text: '2004年生まれの高専生です',
            break: true,
          },
          {
            type: 'plain',
            text: 'プログラミングでツールを作ったり、フロントエンド開発したりしています',
            break: true,
          },
          {
            type: 'plain',
            text: 'ウェアラブルコンピューティングやAR/MRを始めとするxR、HCI等に興味があります',
            break: true,
          },
          {
            type: 'plain',
            text: 'これらの技術などを活用して、',
            break: false,
          },
          {
            type: 'link',
            link: 'https://scrapbox.io/watasuke/%E5%A4%A2%E3%83%BB%E5%B0%86%E6%9D%A5%E5%83%8F%EF%BC%9F',
            text: '人間のやることを減らす',
            break: false,
          },
          {
            type: 'plain',
            text: 'のが目標です',
            break: true,
          },
        ]}
      />
    ),
    [],
  );
  const [avatar_and_name_displayed, set_avatar_and_name_displayed] = React.useState(false);

  return (
    <AnimatePresence>
      <motion.div
        id='portfolio-welcome'
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{delay: 0.5, duration: 1}}
        onAnimationComplete={() => set_avatar_and_name_displayed(true)}
      >
        <h2 className='greeting'>Hi there👋</h2>

        <div className='center'>
          <div className='avatar-and-name'>
            <StaticImage height={200} src='../../../../assets/icon.jpg' alt='icon' />
            <div className='separator' />
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
          {avatar_and_name_displayed && <div className='bio'>{bio_animation}</div>}
        </div>
        <div className='next-page'>
          <span>Scroll</span>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
