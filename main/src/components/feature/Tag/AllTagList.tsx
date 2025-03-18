// watasuke.net
// CopyRight (c) 2021-2025 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @watasuke1024
// This software is released under the MIT or MIT SUSHI-WARE License.
import React from 'react';
import {ql} from '@utils/QL';
import {TagContainer} from './TagContainer';

export async function AllTagList() {
  const tags = await ql().allTags();
  return <TagContainer tags={tags.allTags} disable_icon={true} />;
}
