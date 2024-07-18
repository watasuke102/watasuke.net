// watasuke.net
// CopyRight (c) 2021-2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import * as css from './Menu.css';
import React from 'react';
import {AnimatePresence, motion} from 'framer-motion';
import {color} from '@watasuke.net/common';
import {SimpleLinks} from '../SimpleLinks';
import IconTwitter from '@assets/icons/Links/twitter.svg';
import IconMisskey from '@assets/icons/general/misskey.svg';
import IconMastodon from '@assets/icons/general/mastodon.svg';
import IconHatena from '@assets/icons/general/hatena.svg';
import IconShare from '@assets/icons/general/share.svg';
import IconUp from '@assets/icons/general/up.svg';

export function Menu(): JSX.Element {
  const [is_open, set_is_open] = React.useState(false);

  return (
    <div className={css.container}>
      <AnimatePresence>
        {is_open && (
          <motion.nav
            variants={{
              init: {
                maxHeight: 0,
                borderColor: `${color.fg}00`,
                boxShadow: '0 0 12px 2px #1110',
                transition: {duration: 0.5, ease: [0.22, 1, 0.36, 1]},
              },
              open: {
                maxHeight: 450,
                borderColor: `${color.fg}ff`,
                boxShadow: '0 0 12px 2px #111d',
                transition: {duration: 0.9, ease: [0.16, 1, 0.3, 1]},
              },
            }}
            initial='init'
            animate='open'
            exit='init'
            className={css.menu}
          >
            <div className={css.menu_inner}>
              <h2 className={css.heading}>Share this page</h2>
              <span className={css.share_container}>
                <a
                  className={css.share_icon}
                  target='_blank'
                  rel='nofollow noopener noreferrer'
                  href={`https://twitter.com/intent/tweet?text=${document.title}%0d%0a${document.URL}`}
                >
                  <IconTwitter />
                </a>
                <a
                  className={css.share_icon}
                  target='_blank'
                  rel='nofollow noopener noreferrer'
                  href={`https://misskey-hub.net/share/?text=${document.title}&url=${document.URL}`}
                >
                  <IconMisskey />
                </a>
                <a
                  className={css.share_icon}
                  target='_blank'
                  rel='nofollow noopener noreferrer'
                  href={`https://mastodonshare.com/?text=${document.title}&url=${document.URL}`}
                >
                  <IconMastodon />
                </a>
                <a
                  className={css.share_icon}
                  target='_blank'
                  rel='nofollow noopener noreferrer'
                  href={`https://b.hatena.ne.jp/entry/${document.URL.replace(/https?:\/\//, '')}"`}
                >
                  <span className={css.hatena_icon}>
                    <IconHatena />
                  </span>
                </a>
                {navigator.share && (
                  <button
                    onClick={() => navigator.share({title: document.title, url: document.URL})}
                    title='Share via...'
                    className={css.menu_button}
                  >
                    <IconShare />
                  </button>
                )}
              </span>

              <h2 className={css.heading}>Links</h2>
              <SimpleLinks />
              <hr style={{opacity: 1}} />

              <button onClick={() => window.scroll({top: 0, behavior: 'smooth'})} className={css.menu_button}>
                <IconUp />
                <span>Go to page top</span>
              </button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
      <button className={css.menu_opener} aria-expanded={is_open} onClick={() => set_is_open(f => !f)}>
        <span className={`${css.icon} ${is_open ? css.icon_opening : ''}`} aria-hidden />
      </button>
    </div>
  );
}
