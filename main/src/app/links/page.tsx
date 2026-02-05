// watasuke.net
// CopyRight (c) 2021-2026 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @watasuke1024
// This software is released under the MIT or MIT SUSHI-WARE License.
import * as css from '@pages/links.css';
import {Background, Breadcrumb} from '@common';
import React from 'react';
import {GenBreadcrumb} from '@utils/Breadcrumb';
import {gen_template, JsonLd} from '@utils/Metadata';
import {social_links, social_links_desc} from '@data/social_links';

const breadcrumb_list = GenBreadcrumb([{name: 'Links'}]);
export const {viewport, metadata} = gen_template(
  'リンク集',
  'わたすけに関連したリンクをまとめています',
  '/links',
);

export default function Links() {
  return (
    <>
      <Background />
      <JsonLd breadcrumb_list={breadcrumb_list} />
      <Breadcrumb breadcrumb_list={breadcrumb_list} />
      <main>
        <h1>リンク集</h1>
        <p>
          <code>/(わたすけ|watasuke(1024?)?)/</code> に関連するリンクです
        </p>
        <div className={css.container}>
          {Object.entries(social_links).map(([key, e]) => {
            return (
              <a href={e.href} key={key} className={css.link_item}>
                <div className={css.link_item_icon}>{e.children}</div>
                <h2 className={css.link_item_title}>{e.title}</h2>
                <span className={css.link_item_desc}>
                  {social_links_desc[key as keyof typeof social_links_desc]}
                </span>
              </a>
            );
          })}
        </div>
      </main>
    </>
  );
}
