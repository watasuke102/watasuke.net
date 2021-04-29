/*!
 * TagContainer.tsx
 *
 * CopyRight (c) 2021 Watasuke
 * Email  : <watasuke102@gmail.com>
 * Twitter: @Watasuke102
 * This software is released under the MIT SUSHI-WARE License.
 */

import { Link } from 'gatsby';
import React from 'react';
import '../styles/TagContainer.scss'

interface Props {
  tags: {
    slug: string,
    name: string,
  }[]
}

export default ({ tags }: Props) => {
  return (
    <div className='TagContainer-container'>
      <i className="fas fa-tag"></i>

      {tags.map(tag => {
        return (
          <Link to={'/blog/tag/' + tag.slug}>
            {tag.name}
          </Link>
        );
      })}

    </div >
  );
}
