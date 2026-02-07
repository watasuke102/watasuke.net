// watasuke.net
// CopyRight (c) 2021-2026 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @watasuke1024
// This software is released under the MIT or MIT SUSHI-WARE License.
'use client';
import Giscus from '@giscus/react';

type Props = {
  category: 'Article' | 'Monthly';
};

export function CommentArea(props: Props) {
  return (
    <section>
      <h2>Comments</h2>
      <p>
        Powered by <a href='https://github.com/giscus/giscus'>Giscus</a>
      </p>
      <Giscus
        repo='watasuke102/watasuke.net'
        repoId='MDEwOlJlcG9zaXRvcnkzNTc4OTQwNzk='
        category={props.category}
        categoryId='DIC_kwDOFVUHv84CgSPQ'
        mapping='og:title'
        strict='0'
        reactionsEnabled='1'
        emitMetadata='0'
        inputPosition='top'
        theme='dark_dimmed'
        lang='ja'
        loading='lazy'
      />
    </section>
  );
}
