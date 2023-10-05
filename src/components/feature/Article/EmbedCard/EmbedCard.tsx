// EmbedCard.tsx
//
// CopyRight (c) 2021-2023 Watasuke
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import * as style from './EmbedCard.css';
import {graphql, useStaticQuery} from 'gatsby';
import React from 'react';

interface Props {
  url: string;
}

interface Ogp {
  title: string;
  url: string;
  description: string;
  image: string;
}

function GetOgpFromUrl(ogp_list: Ogp[], url: string) {
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

export const EmbedCard = ({url}: Props): React.ReactElement => {
  const ogp_list = useStaticQuery(graphql`
    query {
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
    <a className={style.container} href={url}>
      {image === '' ? (
        <span className={style.img_fallback}>{'[OGP image not found]'}</span>
      ) : (
        <div className={style.img_wrapper}>
          <img className={style.thumbnail} src={image} alt={title} />
        </div>
      )}
      <div className={style.text_container}>
        <span className={style.title}>{title}</span>
        <span className={style.url}>{url}</span>
        <span className={style.description}>{desc ?? ''}</span>
      </div>
    </a>
  );
};
