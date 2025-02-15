// watasuke.net
// CopyRight (c) 2021-2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import React from 'react';
import {ql} from '@utils/QL';
import {TagContainer} from './TagContainer';

export async function AllTagList() {
  const tags = await ql().allTags();
  return <TagContainer tags={tags.allTags} disable_icon={true} />;
}
