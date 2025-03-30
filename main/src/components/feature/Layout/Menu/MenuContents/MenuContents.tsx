// watasuke.net
// CopyRight (c) 2021-2025 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @watasuke1024
// This software is released under the MIT or MIT SUSHI-WARE License.
import * as css from './MenuContents.css';
import React from 'react';
import {SimpleInnerLinks, ShareList} from '@common';
import {TocMapper} from '@watasuke.net/common';
import {Heading} from '@watasuke.net/common';
import IconUp from '@assets/icons/general/up.svg';

interface Props {
  headings?: Heading[];
}

export function MenuContents(props: Props) {
  return (
    <>
      {props.headings && (
        <>
          <h2 className={css.heading}>Table of Contents</h2>
          <nav className={css.toc_wrapper}>
            <TocMapper headings={props.headings} />
          </nav>
        </>
      )}

      <h2 className={css.heading}>Share this page</h2>
      <ShareList />

      <h2 className={css.heading}>Links</h2>
      <SimpleInnerLinks />
      <hr style={{opacity: 1}} />

      <button
        onClick={() => window.scroll({top: 0, behavior: 'smooth'})}
        className={css.menu_button}
      >
        <span className={css.menu_button_icon}>
          <IconUp />
        </span>
        <span>Go to page top</span>
      </button>
    </>
  );
}
