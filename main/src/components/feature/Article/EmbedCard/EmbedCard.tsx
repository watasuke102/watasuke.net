// watasuke.net
// CopyRight (c) 2021-2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import {initialized_a} from '@utils/initialized_a.css';
import * as css from './EmbedCard.css';
import {graphql, useStaticQuery} from 'gatsby';
import React from 'react';

interface Props {
  url: string;
}

function GetOgpFromUrl(
  ogp_list: Queries.ogpListQuery['allOgp']['nodes'],
  url: string,
) {
  const ogp = ogp_list.filter(e => e.url === url);
  if (ogp) return ogp[0];
  else
    return {
      title: url,
      url: url,
      description: url,
      image: url,
    };
}

export function EmbedCard({url}: Props): JSX.Element {
  const ogp_list: Queries.ogpListQuery = useStaticQuery(graphql`
    query ogpList {
      allOgp {
        nodes {
          title
          url
          description
          image
        }
      }
    }
  `);

  let title: string;
  let desc: string;
  let image: string;
  try {
    const ogp = GetOgpFromUrl(ogp_list.allOgp.nodes, url);
    title = ogp.title;
    desc = ogp.description;
    image = ogp.image;
  } catch (e) {
    title = url;
    desc = '';
    image = '';
  }

  return (
    <a href={url} className={initialized_a}>
      <div className={css.container}>
        {image === '' ? (
          <span className={css.img_fallback}>{'[OGP image not found]'}</span>
        ) : (
          <div className={css.img_wrapper}>
            <img
              className={css.thumbnail}
              src={image}
              alt={title}
              loading='lazy'
            />
          </div>
        )}
        <div className={css.text_container}>
          <span className={css.title}>{title}</span>
          <span className={css.url}>{decodeURI(url)}</span>
          <span className={css.description}>{desc ?? ''}</span>
        </div>
      </div>
    </a>
  );
}
