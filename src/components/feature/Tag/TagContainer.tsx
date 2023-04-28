// TagContainer.tsx
//
// CopyRight (c) 2021-2023 Watasuke
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import {Link} from 'gatsby';
import React from 'react';
import * as style from './TagContainer.css';

interface Props {
  disable_icon?: boolean;
  tags: {
    slug: string;
    name: string;
  }[];
}

export const TagContainer = (props: Props): React.ReactElement => {
  return (
    <div className={style.container}>
      {!props.disable_icon && <i className={`${style.icon} fas fa-tag`} />}

      {props.tags.map(tag => {
        return (
          <Link key={tag.slug} className={style.link} to={'/blog/tag/' + tag.slug}>
            {tag.name}
          </Link>
        );
      })}
    </div>
  );
};
