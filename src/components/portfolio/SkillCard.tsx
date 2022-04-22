/*!
 * SkillCard.tsx
 *
 * CopyRight (c) 2021-2022 Watasuke
 * Email  : <watasuke102@gmail.com>
 * Twitter: @Watasuke102
 * This software is released under the MIT SUSHI-WARE License.
 */

import React from 'react';
import '../../styles/SkillCard.scss';

interface Props {
  name: string;
  body?: string;
}

export default (props: Props) => {
  return (
    <div className='SkillCard-container'>
      <p className='name'>{props.name}</p>
      {props.body && <p className='body'>{props.body}</p>}
    </div>
  );
};
