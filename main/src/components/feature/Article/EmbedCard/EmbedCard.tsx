// watasuke.net
// CopyRight (c) 2021-2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import {initialized_a} from '@utils/initialized_a.css';
import * as css from './EmbedCard.css';
import ogs from 'open-graph-scraper';
import React from 'react';

interface Ogp {
  title: string;
  desc: string;
  image: string;
}

async function get_ogp_from_url(url: string): Promise<Ogp> {
  const {error, result} = await ogs({url});

  if (error || !result.ogTitle) {
    return {
      title: '[not found]',
      desc: '',
      image: '',
    };
  } else {
    let image = '';
    if (Array.isArray(result.ogImage)) {
      if (result.ogImage[0].url.charAt(0) === '/') {
        const url_obj = new URL(url);
        image = url_obj.origin;
      }
      image += result.ogImage[0].url;
    }

    return {
      title: result.ogTitle,
      desc: result.ogDescription ?? '',
      image,
    };
  }
}

interface Props {
  url: string;
}
export async function EmbedCard({url}: Props) {
  const ogp = await get_ogp_from_url(url);
  return ogp ? (
    <a href={url} className={initialized_a}>
      <div className={css.container}>
        {ogp.image === '' ? (
          <span className={css.img_fallback}>{'[OGP image not found]'}</span>
        ) : (
          <div className={css.img_wrapper}>
            <img
              className={css.thumbnail}
              src={ogp.image}
              alt={ogp.title}
              loading='lazy'
            />
          </div>
        )}
        <div className={css.text_container}>
          <span className={css.title}>{ogp.title}</span>
          <span className={css.url}>{decodeURI(url)}</span>
          <span className={css.description}>{ogp.desc ?? ''}</span>
        </div>
      </div>
    </a>
  ) : (
    <span>{url}</span>
  );
}
