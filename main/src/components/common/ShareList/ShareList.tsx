// watasuke.net
// CopyRight (c) 2021-2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import * as css from './ShareList.css';
// @ts-expect-error ??? (FIXME)
import React from 'react';
import IconTwitter from '@assets/icons/Links/twitter.svg';
import IconMisskey from '@assets/icons/general/misskey.svg';
import IconMastodon from '@assets/icons/general/mastodon.svg';
import IconHatena from '@assets/icons/general/hatena.svg';
import IconShare from '@assets/icons/general/share.svg';

export function ShareList(): JSX.Element {
  if (typeof document === 'undefined') {
    return <></>;
  }

  return (
    <div className={css.share_container}>
      <a
        className={`${css.share_icon} ${css.twitter_icon}`}
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
    </div>
  );
}
