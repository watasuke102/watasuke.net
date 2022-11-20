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
import TagContainer from '../../feature/ArticleLayout/TagContainer';

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
  return <TagContainer tags={tags.allTags.nodes} disable_icon={true} />;
};
