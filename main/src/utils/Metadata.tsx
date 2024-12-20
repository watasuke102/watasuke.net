// watasuke.net
// CopyRight (c) 2021-2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import * as config from '@watasuke.net/config/config';
import {Metadata, Viewport} from 'next';
import BreadcrumbItem from '@mytypes/Breadcrumb';

export function gen_template(title_prefix: string, desc: string, url: string) {
  return {
    viewport,
    metadata: gen_metadata(title_prefix, desc, url),
  };
}

export const viewport: Viewport = {
  themeColor: '#282c34',
  colorScheme: 'dark',
};

export function gen_metadata(title_prefix: string, desc: string, url: string): Metadata {
  if (url.at(0) !== '/' || url.at(-1) === '/') {
    throw Error(`Invalid URL (${url}); It should begin with '/' and end without '/'`);
  }
  const title = title_prefix.length === 0 ? config.site_title : `${title_prefix} - ${config.site_title}`;
  const description = desc.slice(0, 140) + (desc.length > 140 ? ' ...' : '');
  const image = `${config.site_url}/thumbnail.jpg`;
  return {
    title,
    description,
    metadataBase: new URL(config.site_url),
    icons: {
      icon: '/icon.jpg',
    },
    alternates: {
      canonical: url,
      types: {
        // TODO: 'application/rss+xml': <RSS URL>
      },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: config.site_title,
      images: {
        url: image,
      },
      type: 'website',
      locale: 'ja_JP',
    },
    twitter: {
      card: 'summary',
      title,
      description,
      site: '@Watasuke102',
      creator: '@Watasuke102',
      images: [image],
    },
  };
}

export function JsonLd(props: {breadcrumb_list: BreadcrumbItem[]}) {
  return (
    <script
      type='application/ld+json'
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: props.breadcrumb_list.map(e => {
            if (e.item) {
              e.item = config.site_url + e.item;
            }
            return e;
          }),
        }),
      }}
    />
  );
}
