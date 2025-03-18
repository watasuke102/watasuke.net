// watasuke.net
// CopyRight (c) 2021-2025 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @watasuke1024
// This software is released under the MIT or MIT SUSHI-WARE License.
import * as css from './ProfileCard.css';
import React from 'react';
import Link from 'next/link';
import {Avatar} from '@common';
import {ql} from '@utils/QL';

export async function ProfileCard() {
  const {sitedata} = await ql().shortProfile();
  return (
    <section className={css.container}>
      <Avatar size={80} loading='lazy' className={css.avatar} />
      <p>わたすけ</p>
      <p className={css.body}>
        {sitedata.shortProfile}
        <br />
        プロフィール詳細は<Link href='/profile'>こちら</Link>
      </p>
    </section>
  );
}
