// watasuke.net
// CopyRight (c) 2021-2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import * as css from './ProfileCard.css';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import {ql} from '@utils/QL';

export async function ProfileCard() {
  const {sitedata} = await ql().shortProfile();
  return (
    <section className={css.container}>
      <Image
        className={css.avatar}
        width={80}
        height={80}
        src='/icon.jpg'
        alt='icon'
      />
      <p>わたすけ</p>
      <p className={css.body}>
        {sitedata.shortProfile}
        <br />
        プロフィール詳細は<Link href='/profile'>こちら</Link>
      </p>
    </section>
  );
}
