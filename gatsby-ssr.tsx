// gatsby-ssr.js
//
// CopyRight (c) 2021-2023 Watasuke
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import {GatsbySSR} from 'gatsby';

export const onRenderBody: GatsbySSR['onRenderBody'] = ({setHtmlAttributes}) => {
  setHtmlAttributes({lang: 'ja'});
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
