// watasuke.net
// CopyRight (c) 2021-2025 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @watasuke1024
// This software is released under the MIT or MIT SUSHI-WARE License.
import {JSX} from 'react';

type Props = {
  size: 80 | 240;
  loading: NonNullable<JSX.IntrinsicElements['img']['loading']>;
  className?: JSX.IntrinsicElements['img']['className'];
};

export function Avatar(props: Props) {
  const loading = props.loading ?? 'lazy';
  return (
    <picture>
      <source
        srcSet={`/avatar/${props.size}.webp ${props.size}w`}
        type='image/webp'
      />
      <source
        srcSet={`/avatar/${props.size}.jpg ${props.size}w`}
        type='image/jpeg'
      />
      <img
        className={props.className ?? ''}
        width={props.size}
        height={props.size}
        loading={loading}
        decoding='async'
        src='/icon.jpg'
        alt='「わたすけ」のアイコン'
      />
    </picture>
  );
}
