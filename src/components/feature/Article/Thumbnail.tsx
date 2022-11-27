/*!
 * Thumbnail.tsx
 *
 * CopyRight (c) 2021-2022 Watasuke
 * Email  : <watasuke102@gmail.com>
 * Twitter: @Watasuke102
 * This software is released under the MIT SUSHI-WARE License.
 */
import {imageUrl} from '../../../../config';
import {StaticImage} from 'gatsby-plugin-image';
import React from 'react';

interface Props {
  url: string;
}

export default ({url}: Props) => {
  return (
    <div className='Thumbnail'>
      {url ? (
        <img src={url.replace('/uploads/', `${imageUrl}/uploads/`)} alt='thumbnail' decoding='async' />
      ) : (
        <StaticImage src='../../../assets/thumbnail.jpg' alt='thumbnail' />
      )}
    </div>
  );
};
