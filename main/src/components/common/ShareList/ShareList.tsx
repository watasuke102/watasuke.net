// watasuke.net
// CopyRight (c) 2021-2026 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @watasuke1024
// This software is released under the MIT or MIT SUSHI-WARE License.
'use client';

import * as config from '@watasuke.net/config/config';
import * as css from './ShareList.css';
import {usePathname} from 'next/navigation';
import React from 'react';
import IconTwitter from '@assets/icons/Links/twitter.svg';
import IconMisskey from '@assets/icons/general/misskey.svg';
import IconMastodon from '@assets/icons/general/mastodon.svg';
import IconHatena from '@assets/icons/general/hatena.svg';
import IconShare from '@assets/icons/general/share.svg';

export function ShareList() {
  const [title, set_title] = React.useState('');
  const pathname = usePathname();
  React.useEffect(() => {
    set_title(document.title);
  }, [pathname]);

  const url = config.site_url + pathname;

  return (
    <div className={css.share_container}>
      <a
        className={`${css.share_icon} ${css.twitter_icon}`}
        target='_blank'
        rel='nofollow noopener noreferrer'
        href={`https://twitter.com/intent/tweet?text=${title}%0d%0a${url}`}
      >
        <IconTwitter />
      </a>
      <a
        className={css.share_icon}
        target='_blank'
        rel='nofollow noopener noreferrer'
        href={`https://misskey-hub.net/share/?text=${title}&url=${url}`}
      >
        <IconMisskey />
      </a>
      <a
        className={css.share_icon}
        target='_blank'
        rel='nofollow noopener noreferrer'
        href={`https://mastodonshare.com/?text=${title}&url=${url}`}
      >
        <IconMastodon />
      </a>
      <a
        className={css.share_icon}
        target='_blank'
        rel='nofollow noopener noreferrer'
        href={`https://b.hatena.ne.jp/entry/${url.replace(/https?:\/\//, '')}"`}
      >
        <span className={css.hatena_icon}>
          <IconHatena />
        </span>
      </a>
      {navigator && navigator.share && (
        <button
          onClick={() => navigator.share({title, url})}
          title='Share via...'
          className={css.menu_button}
        >
          <IconShare />
        </button>
      )}
    </div>
  );
}
