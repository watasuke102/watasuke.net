// Seo.tsx
//
// CopyRight (c) 2021-2023 Watasuke
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import * as config from '@config';
import {graphql, useStaticQuery} from 'gatsby';
import React from 'react';
import BreadcrumbItem from '@mytypes/Breadcrumb';

interface Props {
  title: string;
  desc: string;
  url: string; // '/'から始まる
  thumbnail?: string;
  breadcrumb_list: BreadcrumbItem[];
}

export const Seo = (props: Props): React.ReactElement => {
  let image: string = 'https://watasuke.net';
  if (props.thumbnail) {
    image += props.thumbnail;
  } else {
    image += useStaticQuery(graphql`
      query {
        file(name: {eq: "thumbnail"}) {
          publicURL
        }
      }
    `).file.publicURL;
  }
  const title = props.title.length === 0 ? 'わたすけのへや' : `${props.title} - わたすけのへや`;
  const url = `https://watasuke.net${props.url}`;
  // 140字に制限して内容を表示、超過分は...で
  const desc = props.desc.slice(0, 140) + (props.desc.length > 140 ? ' ...' : '');

  return (
    <>
      <title>{title}</title>
      <script async src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${config.adsenseId}`} />
      <meta property='og:type' content='website' />
      <meta property='og:url' content={url} />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={desc} />
      <meta property='og:image' content={image} />
      <meta name='description' content={desc} />
      <meta name='twitter:card' content='summary' />
      <meta name='twitter:site' content='@Watasuke102' />
      <meta name='twitter:creator' content='@Watasuke102' />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:url' content={url} />
      <meta name='twitter:image' content={image} />
      <meta name='twitter:description' content={desc} />

      <script type='application/ld+json'>
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: props.breadcrumb_list.map(e => {
            if (e.item) {
              e.item = `https://watasuke.net${e.item}`;
            }
            return e;
          }),
        })}
      </script>
    </>
  );
};
