// watasuke.net
// CopyRight (c) 2021-2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import * as css from './TagContainer.css';
import Link from 'next/link';
import React from 'react';
import IconTag from '@assets/icons/general/tag.svg';

interface Props {
  disable_icon?: boolean;
  tags: readonly {
    readonly slug: string;
    readonly name: string;
  }[];
}

export function TagContainer(props: Props) {
  return (
    <section className={css.container}>
      {!props.disable_icon && (
        <div className={css.icon}>
          <IconTag />
        </div>
      )}

      <div className={css.tag_list}>
        {props.tags.map(tag => {
          return (
            <Link
              key={tag.slug}
              className={css.link}
              href={'/blog/tag/' + tag.slug}
            >
              {tag.name}
            </Link>
          );
        })}
      </div>
    </section>
  );
}
