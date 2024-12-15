// watasuke.net
// CopyRight (c) 2021-2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import {graphql, useStaticQuery} from 'gatsby';
import React from 'react';
import {TagContainer} from './TagContainer';
import {ql} from '@utils/QL';

export async function AllTagList(): JSX.Element {
  const tags = await ql().allTags();
  return <TagContainer tags={tags.allTags} disable_icon={true} />;
}
