// watasuke.net
// CopyRight (c) 2021-2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import * as css from './TagContainer.css';
import {Link} from 'gatsby';
import React from 'react';
import IconTag from '@assets/icons/general/tag.svg';

interface Props {
  disable_icon?: boolean;
  tags: {
    slug: string;
    name: string;
  }[];
}

export const TagContainer = (props: Props): React.ReactElement => {
  return (
    <section className={css.container} aria-label='すべてのタグ'>
      {!props.disable_icon && (
        <div className={css.icon}>
          <IconTag />
        </div>
      )}

      <div>
        {props.tags.map(tag => {
          return (
            <Link key={tag.slug} className={css.link} to={'/blog/tag/' + tag.slug}>
              {tag.name}
            </Link>
          );
        })}
      </div>
    </section>
  );
};
