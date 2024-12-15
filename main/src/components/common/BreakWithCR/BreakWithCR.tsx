// watasuke.net
// CopyRight (c) 2021-2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import React from 'react';

interface Props {
  str: string;
}

export function BreakWithCR(props: Props): JSX.Element {
  let str = props.str;
  if (props.str.slice(-1) === '\n') {
    str = props.str.slice(0, -1);
  }
  return (
    <>
      {str.split('\n').map(s => (
        <>
          {s}
          <br />
        </>
      ))}{' '}
    </>
  );
}
