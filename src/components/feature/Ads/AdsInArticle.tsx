// AdsInArticle.tsx
//
// CopyRight (c) 2021-2023 Watasuke
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import config from '@config';
import React from 'react';
import * as style from './AdsInArticle.css';

export const AdsInArticle = (): React.ReactElement => {
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
        ></ins>
      )}
    </div>
  );
};
