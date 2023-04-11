// AllTagList.tsx
//
// CopyRight (c) 2021-2023 Watasuke
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT SUSHI-WARE License.
import {graphql, useStaticQuery} from 'gatsby';
import React from 'react';
import {TagContainer} from './TagContainer';

export const AllTagList = (): React.ReactElement => {
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
