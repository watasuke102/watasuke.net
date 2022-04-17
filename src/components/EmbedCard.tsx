/*!
 * EmbedCard.tsx
 *
 * CopyRight (c) 2021-2022 Watasuke
 * Email  : <watasuke102@gmail.com>
 * Twitter: @Watasuke102
 * This software is released under the MIT SUSHI-WARE License.
 */

import React from 'react';
import {graphql, useStaticQuery} from 'gatsby';
import '../styles/main.scss';
import '../styles/EmbedCard.scss';

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

export default ({url}: Props) => {
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
  const {title, description, image} = GetOgpFromUrl(ogp_list.allOgp.nodes, url);
  console.log(ogp_list);

  return (
    <div className='EmbedCard-container' onClick={() => url !== '' && window.open(url)}>
      {image !== '' && (
        <div className='EmbedCard-img_wrapper'>
          <img src={image} alt={title} />
        </div>
      )}
      <div className='EmbedCard-text'>
        <span className='title'>{title}</span>
        <span className='url'>{url}</span>
        <span className='description'>{description}</span>
      </div>
    </div>
  );
};
