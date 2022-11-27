/*!
 * TagContainer.tsx
 *
 * CopyRight (c) 2021-2022 Watasuke
 * Email  : <watasuke102@gmail.com>
 * Twitter: @Watasuke102
 * This software is released under the MIT SUSHI-WARE License.
 */

import React from 'react';
import {Link} from 'gatsby';
import './TagContainer.scss';

interface Props {
  disable_icon?: boolean;
  tags: {
    slug: string;
    name: string;
  }[];
}

export default (props: Props) => {
  return (
    <div className='TagContainer-container'>
      {!props.disable_icon && <i className='fas fa-tag' />}

      <div>
        {props.tags.map(tag => {
          return <Link to={'/blog/tag/' + tag.slug}>{tag.name}</Link>;
        })}
      </div>
    </div>
  );
};
