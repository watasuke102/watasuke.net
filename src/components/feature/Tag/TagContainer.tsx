/*!
 * TagContainer.tsx
 *
 * CopyRight (c) 2021-2023 Watasuke
 * Email  : <watasuke102@gmail.com>
 * Twitter: @Watasuke102
 * This software is released under the MIT SUSHI-WARE License.
 */
import {Link} from 'gatsby';
import React from 'react';
import './TagContainer.scss';

interface Props {
  disable_icon?: boolean;
  tags: {
    slug: string;
    name: string;
  }[];
}

export const TagContainer = (props: Props): React.ReactElement => {
  return (
    <div className='TagContainer-container'>
      {!props.disable_icon && <i className='fas fa-tag' />}

      <div>
        {props.tags.map(tag => {
          return (
            <Link key={tag.slug} to={'/blog/tag/' + tag.slug}>
              {tag.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
};
