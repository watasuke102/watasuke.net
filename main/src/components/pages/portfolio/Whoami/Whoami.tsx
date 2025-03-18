// watasuke.net
// CopyRight (c) 2021-2025 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @watasuke1024
// This software is released under the MIT or MIT SUSHI-WARE License.
import * as css from './Whoami.css';
import {BioEn, BioJa} from '@data/bio';

interface Props {
  animation_enabled: boolean;
  lang: string;
}

export function Whoami(props: Props) {
  return (
    <section className={css.bio}>
      <h2>
        <code className={css.heading}>$ whoami</code>
      </h2>
      {props.lang !== 'en' ? <BioJa /> : <BioEn />}
    </section>
  );
}
