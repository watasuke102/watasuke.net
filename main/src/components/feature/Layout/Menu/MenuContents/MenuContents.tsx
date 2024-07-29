// watasuke.net
// CopyRight (c) 2021-2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import * as css from './MenuContents.css';
import React from 'react';
import {SimpleInnerLinks, ShareList} from '@common';
import {TocMapper} from '@watasuke.net/common';
import {HeadingContext} from '@feature/TableOfContents';
import IconUp from '@assets/icons/general/up.svg';

export function MenuContents(): JSX.Element {
  const headings = React.useContext(HeadingContext);

  return (
    <>
      {headings && (
        <>
          <h2 className={css.heading}>Table of Contents</h2>
          <nav className={css.toc_wrapper}>
            <TocMapper headings={headings} />
          </nav>
        </>
      )}

      <h2 className={css.heading}>Share this page</h2>
      <ShareList />

      <h2 className={css.heading}>Links</h2>
      <SimpleInnerLinks />
      <hr style={{opacity: 1}} />

      <button onClick={() => window.scroll({top: 0, behavior: 'smooth'})} className={css.menu_button}>
        <span className={css.menu_button_icon}>
          <IconUp />
        </span>
        <span>Go to page top</span>
      </button>
    </>
  );
}
