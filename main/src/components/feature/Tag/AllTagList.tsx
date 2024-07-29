// watasuke.net
// CopyRight (c) 2021-2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import {graphql, useStaticQuery} from 'gatsby';
import React from 'react';
import {TagContainer} from './TagContainer';

export function AllTagList(): React.ReactElement {
  const tags: Queries.allTagsQuery = useStaticQuery(graphql`
    query allTags {
      allTags {
        nodes {
          slug
          name
        }
      }
    }
  `);
  return <TagContainer tags={tags.allTags.nodes} disable_icon={true} />;
}
