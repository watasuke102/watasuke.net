// watasuke.net
// CopyRight (c) 2021-2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import {graphql, useStaticQuery} from 'gatsby';
import React from 'react';
import BreadcrumbItem from '@mytypes/Breadcrumb';

interface Props {
  title: string;
  desc: string;
  url: string; // '/'から始まる
  breadcrumb_list: BreadcrumbItem[];
}

export function Seo(props: Props): React.ReactElement {
  const query = useStaticQuery(graphql`
    query seoInfo {
      file(name: {eq: "thumbnail"}) {
        publicURL
      }
      site {
        trailingSlash
        siteMetadata {
          siteUrl
        }
      }
    }
  `);
  const image = query.site.siteMetadata.siteUrl + query.file.publicURL;

  const title = props.title.length === 0 ? 'わたすけのへや' : `${props.title} - わたすけのへや`;
  const url = query.site.siteMetadata.siteUrl + props.url;
  // 140字に制限して内容を表示、超過分は...で
  const desc = props.desc.slice(0, 140) + (props.desc.length > 140 ? ' ...' : '');

  return (
    <>
      <title>{title}</title>
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
              e.item = query.site.siteMetadata.siteUrl + e.item;
            }
            return e;
          }),
        })}
      </script>
    </>
  );
}
