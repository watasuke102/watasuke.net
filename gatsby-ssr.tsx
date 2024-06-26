// watasuke.net
// CopyRight (c) 2021-2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import {GatsbySSR} from 'gatsby';
import React from 'react';

export const onRenderBody: GatsbySSR['onRenderBody'] = ({setHtmlAttributes, setHeadComponents}) => {
  setHtmlAttributes({lang: 'ja'});
  setHeadComponents([
    <link
      key='reseter.css'
      rel='stylesheet'
      href='https://cdn.jsdelivr.net/gh/krishdevdb/reseter.css@1.20/css/reseter.min.css'
      id='reseter.css'
    />,
    <link key='pre-googleapis' rel='preconnect' href='https://fonts.googleapis.com' />,
    <link key='pre-gstatic' rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='anonymous' />,
    <link
      key='font-rounded_Mplus'
      href='https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c&display=swap'
      rel='stylesheet'
    />,
  ]);
};

// Twitterカード表示のため、metaタグを上に持っていく
// https://kakkiii-blog.dev/posts/510/
export const onPreRenderHTML: GatsbySSR['onPreRenderHTML'] = ({getHeadComponents, replaceHeadComponents}) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const headComponents = getHeadComponents().sort((a: any, b: any) => {
    if (b.type === 'meta') {
      return 1;
    } else if (a.type === 'meta') {
      return -1;
    } else if (a.type === 'link' && a.props.id === 'reseter.css') {
      return -1;
    }
    return 0;
  });

  replaceHeadComponents(headComponents);
};
