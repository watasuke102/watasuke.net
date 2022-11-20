/*!
 * Head.tsx
 *
 * CopyRight (c) 2021-2022 Watasuke
 * Email  : <watasuke102@gmail.com>
 * Twitter: @Watasuke102
 * This software is released under the MIT SUSHI-WARE License.
 */

import React from 'react';
import {Helmet, HelmetProvider} from 'react-helmet-async';
import {graphql, useStaticQuery} from 'gatsby';
import Breadcrumb from '@mytypes/Breadcrumb';
import config from '../../../config';

interface Props {
  title: string;
  desc: string;
  url: string; // '/'から始まる
  thumbnail?: string;
  hide_breadcrumb?: boolean;
  breadcrumb_list: Breadcrumb[];
}

export default (props: Props) => {
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

  const breadcrumb_list = [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Top',
      item: 'https://watasuke.net',
    },
    ...props.breadcrumb_list,
  ];
  console.log(breadcrumb_list);

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <html lang='ja' />
          <title>{title}</title>
          <script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${config.adsenseId}`}
          />
          <meta property='og:type' content='website' />
          <meta property='og:url' content={url} />
          <meta property='og:title' content={title} />
          <meta property='og:description' content={desc} />
          <meta property='og:image' content={image} />
          <meta name='description' content={desc} />
          <meta name='twitter:card' content='summary_large_image' />
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
              itemListElement: breadcrumb_list,
            })}
          </script>
        </Helmet>
      </HelmetProvider>

      {/* FIXME: Headコンポーネントでレンダリングするのはあんまり良くない気がする */}
      {!props.hide_breadcrumb && (
        <section>
          {breadcrumb_list.map((e, i) => {
            console.log(e, i);
            return (
              <>
                {e.item ? (
                  <a key={`a_${i}`} href={e.item}>
                    {e.name}
                  </a>
                ) : (
                  <span key={`s_${i}`}>{e.name}</span>
                )}
                {i !== breadcrumb_list.length - 1 && <span key={`sep_${i}`}>{' > '}</span>}
              </>
            );
          })}
        </section>
      )}
    </>
  );
};
