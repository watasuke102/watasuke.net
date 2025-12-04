// watasuke.net
// CopyRight (c) 2021-2025 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @watasuke1024
// This software is released under the MIT or MIT SUSHI-WARE License.
'use client';

import {css} from './Spinner.css';
import React from 'react';
import {PuffLoader} from 'react-spinners';
import {color} from '@watasuke.net/common';

export function Spinner() {
  return (
    <div className={css.container}>
      <div>
        <PuffLoader loading color={color.p0} size={110} />
        <span className={css.label}>Loading...</span>
      </div>
    </div>
  );
}
