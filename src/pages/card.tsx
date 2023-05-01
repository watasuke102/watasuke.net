// card.tsx
//
// CopyRight (c) 2021-2023 Watasuke
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import * as style from '@/pages/card.css';
import {Seo} from '@/common';
import React from 'react';
import {Front} from '@/feature/Card';
import {GenBreadcrumb} from '@utils/Breadcrumb';

const breadcrumb_list = GenBreadcrumb([{name: 'Card'}]);

export default function Card(): React.ReactElement {
  return (
    <>
      <div className={style.background}>
        <Front />
      </div>
    </>
  );
}

export const Head = (): React.ReactElement => (
  <Seo title={'card'} desc={'名刺'} url={'/card'} breadcrumb_list={breadcrumb_list} />
);
