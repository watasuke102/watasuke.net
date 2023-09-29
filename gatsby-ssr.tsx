// gatsby-ssr.js
//
// CopyRight (c) 2021-2023 Watasuke
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import {GatsbySSR} from 'gatsby';
import React from 'react';

export const onRenderBody: GatsbySSR['onRenderBody'] = ({setHtmlAttributes, setHeadComponents}) => {
  setHtmlAttributes({lang: 'ja'});
  setHeadComponents([
    <link rel='stylesheet' href='https://cdn.jsdelivr.net/gh/krishdevdb/reseter.css@1.20/css/reseter.min.css' />,
    <link rel='preconnect' href='https://fonts.googleapis.com' />,
    <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />,
    <link
      href='https://fonts.googleapis.com/css2?family=M+PLUS+1p&family=M+PLUS+Rounded+1c&display=swap'
      rel='stylesheet'
    ></link>,
  ]);
};

// Twitterカード表示のため、metaタグを上に持っていく
// https://kakkiii-blog.dev/posts/510/
export const onPreRenderHTML: GatsbySSR['onPreRenderHTML'] = ({getHeadComponents, replaceHeadComponents}) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const headComponents = getHeadComponents().sort((a: any, b: any) => {
    if (a.type === 'meta') return -1;
    if (b.type === 'meta') return 1;
    return 0;
  });

  replaceHeadComponents(headComponents);
};
