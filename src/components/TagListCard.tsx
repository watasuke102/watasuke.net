/*!
 * TagListCard.tsx
 *
 * CopyRight (c) 2021-2022 Watasuke
 * Email  : <watasuke102@gmail.com>
 * Twitter: @Watasuke102
 * This software is released under the MIT SUSHI-WARE License.
 */

import React from 'react';
import {graphql, useStaticQuery} from 'gatsby';
import TagContainer from './TagContainer';
import '../styles/TagListCard.scss';

export default () => {
  const tags = useStaticQuery(graphql`
    query {
      allTags {
        nodes {
          slug
          name
        }
      }
    }
  `);
  return (
    <div className='TagListCard-container'>
      <h3>タグ</h3>
      <TagContainer tags={tags.allTags.nodes} disable_icon={true} />
    </div>
  );
};
