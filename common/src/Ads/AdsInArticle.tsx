// watasuke.net > common
// CopyRight (c) 2021-2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
'use client';

import * as config from '@watasuke.net/config/config';
import * as style from './AdsInArticle.css';
import React from 'react';

export function AdsInArticle() {
  React.useEffect(() => {
    if (config.adsenseId.length <= 0 || config.inArticleSlot.length <= 0) {
      return;
    }
    window.adsbygoogle = window.adsbygoogle || [];
    window.adsbygoogle.push({});
  }, []);

  return (
    <div className={style.wrapper}>
      {config.adsenseId.length <= 0 || config.inArticleSlot.length <= 0 ? (
        <div className={style.dummy}>Ads here</div>
      ) : (
        <ins
          className='adsbygoogle'
          style={{display: 'block', textAlign: 'center'}}
          data-ad-layout='in-article'
          data-ad-format='fluid'
          data-ad-client={config.adsenseId}
          data-ad-slot={config.inArticleSlot}
          data-full-width-responsive='false'
        ></ins>
      )}
    </div>
  );
}
