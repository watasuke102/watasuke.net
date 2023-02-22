// AdsInArticle.tsx
//
// CopyRight (c) 2021-2023 Watasuke
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT SUSHI-WARE License.
import config from '@config';
import React from 'react';

export const AdsInArticle = (): React.ReactElement => {
  React.useEffect(() => {
    window.adsbygoogle = window.adsbygoogle || [];
    window.adsbygoogle.push({});
  }, []);
  return (
    <>
      <ins
        className='adsbygoogle'
        style={{display: 'block', textAlign: 'center'}}
        data-ad-layout='in-article'
        data-ad-format='fluid'
        data-ad-client={config.adsenseId}
        data-ad-slot={config.inArticleSlot}
      ></ins>
    </>
  );
};
