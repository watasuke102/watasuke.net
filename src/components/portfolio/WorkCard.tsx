/*!
 * WorkCard.tsx
 *
 * CopyRight (c) 2021-2022 Watasuke
 * Email  : <watasuke102@gmail.com>
 * Twitter: @Watasuke102
 * This software is released under the MIT SUSHI-WARE License.
 */

import React from 'react';
import {motion} from 'framer-motion';
import '../../styles/WorkCard.scss';

interface Props {
  title: string;
  url: string;
  image: React.ReactElement;
  desc: string;
}

export default (props: Props) => {
  return (
    <motion.div
      className='WorkCard-container'
      initial={{opacity: 0, y: 30}}
      whileInView={{opacity: 1, y: 0}}
      transition={{duration: 0.5}}
      viewport={{once: true, amount: 0.8}}
    >
      {props.image}
      <div className='desc'>
        <a href={props.url}>{props.title}</a>
        <p>
          {props.desc.split('\\n').map(s => (
            <>
              {s}
              <br />
            </>
          ))}
        </p>
      </div>
    </motion.div>
  );
};
