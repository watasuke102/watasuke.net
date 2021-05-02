/*!
 * Head.tsx
 *
 * CopyRight (c) 2021 Watasuke
 * Email  : <watasuke102@gmail.com>
 * Twitter: @Watasuke102
 * This software is released under the MIT SUSHI-WARE License.
 */

import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';

interface Props {
  title: string,
  desc: string,
  url: string, // '/'から始まる
  thumbnail?: string
}

export default (props: Props) => {
  let image: string = 'https://watasuke.tk';
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
  const title = (props.title.length === 0) ?
    'わたすけのへや' : props.title + ' - わたすけのへや';
  const url = 'https://watasuke.tk' + props.url;
  // 140字に制限して内容を表示、超過分は...で
  const desc = props.desc.slice(0, 140) + ((props.desc.length > 140) ? ' ...' : '');

  return (
    <Helmet>
      <html lang='ja' />
      <title>{title}</title>
      <meta property='Description' content={desc} />
      <meta property='og:type' content='website' />
      <meta property='og:url' content={url} />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={desc} />
      <meta property='og:image' content={image} />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:site' content='@Watasuke102' />
      <meta name='twitter:creator' content='@Watasuke102' />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:url' content={url} />
      <meta name='twitter:image' content={image} />
      <meta name='twitter:description' content={desc} />
    </Helmet>
  );
}
