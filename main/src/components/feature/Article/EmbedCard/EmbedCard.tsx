// watasuke.net
// CopyRight (c) 2021-2025 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @watasuke1024
// This software is released under the MIT or MIT SUSHI-WARE License.
import {initialized_a} from '@utils/initialized_a.css';
import * as css from './EmbedCard.css';
import ogs from 'open-graph-scraper';
import React from 'react';
import {cs} from '@watasuke.net/common';

interface Ogp {
  title: string;
  desc: string;
  image: string;
}

async function get_ogp_from_url(url: string): Promise<Ogp> {
  const url_obj = new URL(url);
  const ogp = {
    title: url_obj.host,
    desc: '',
    image: '',
  };
  try {
    const {error, result} = await ogs({url});
    if (!error && result.ogTitle) {
      if (Array.isArray(result.ogImage)) {
        if (result.ogImage[0].url.charAt(0) === '/') {
          ogp.image = url_obj.origin;
        }
        ogp.image += result.ogImage[0].url;
      }

      ogp.title = result.ogTitle;
      ogp.desc = result.ogDescription ?? '';
    }
    /* eslint-disable-next-line @typescript-eslint/no-explicit-any
      --
      open-graph-scraper throws an error which has ErrorResult type, but it isn't exported
      so I can't use `instanceof` for throwed error
    */
  } catch (e: any) {
    if (
      'result' in e &&
      'errorDetails' in e.result &&
      e.result.errorDetails instanceof Error
    ) {
      const err = e.result.errorDetails as Error;
      console.log(`\x1b[31m[OGP error]\x1b[m failed to fetch: \x1b[2m'${url}'\x1b[m
            message: [${err.name}] ${err.message}`);
    }
  }
  return ogp;
}

interface Props {
  url: string;
}
export async function EmbedCard({url}: Props) {
  const ogp = await get_ogp_from_url(url);
  return ogp ? (
    <a href={url} className={cs(initialized_a, css.container)}>
      {ogp.image === '' ? (
        <span className={css.img_fallback}>{'[OGP image not found]'}</span>
      ) : (
        <span className={css.img_wrapper}>
          <img
            className={css.thumbnail}
            src={ogp.image}
            alt={ogp.title}
            loading='lazy'
          />
        </span>
      )}
      <span className={css.title}>{ogp.title}</span>
      <span className={css.url}>{decodeURI(url)}</span>
      <span className={css.description}>{ogp.desc ?? ''}</span>
    </a>
  ) : (
    <span>{url}</span>
  );
}
