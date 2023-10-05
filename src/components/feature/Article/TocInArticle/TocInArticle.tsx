// TocInArticle.tsx
//
// CopyRight (c) 2021-2023 Watasuke
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import {toc_list} from '../TableOfContents.css';
import * as style from './TocInArticle.css';
import {AnimatePresence, motion} from 'framer-motion';
import React from 'react';
import Heading from '@mytypes/Heading';
import IconCollapse from '@assets/icons/general/up.svg';

interface Props {
  table_of_contents: Heading[];
}

export function TocInArticle(props: Props): React.ReactElement {
  const [tocOpening, SetTocOpening] = React.useState(true);
  return (
    <div className={style.container}>
      <div className={style.top_items}>
        <div className={style.close_button} onClick={() => SetTocOpening(!tocOpening)}>
          <motion.div
            animate={{
              transform: tocOpening ? 'rotate(0deg)' : 'rotate(-180deg)',
            }}
            transition={{duration: 0.2}}
          >
            <IconCollapse />
          </motion.div>
        </div>
        <span className={style.heading}>目次</span>
      </div>
      <AnimatePresence>
        <motion.div
          className={style.toc}
          animate={{
            opacity: tocOpening ? 1 : 0,
            maxHeight: tocOpening ? 300 : 0,
            overflowY: tocOpening ? 'scroll' : 'hidden',
          }}
          transition={{
            ease: 'easeOut',
            duration: 0.2,
          }}
        >
          <ol className={style.list_wrapper}>
            {props.table_of_contents.map(item => (
              <li key={item.body} className={toc_list[item.size]}>
                <a href={`#${item.body.toLowerCase()}`}>{item.body}</a>
              </li>
            ))}
          </ol>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
