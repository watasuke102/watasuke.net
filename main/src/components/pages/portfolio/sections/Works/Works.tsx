// watasuke.net
// CopyRight (c) 2021-2025 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @watasuke1024
// This software is released under the MIT or MIT SUSHI-WARE License.
import * as css from './Works.css';
import React from 'react';
import {motion} from 'framer-motion';
import {color, cs, Markdown} from '@watasuke.net/common';
import {SelectItem, GridView} from '@pages/portfolio/components/NotionLike';
import {floatup_with_scroll} from '@pages/portfolio/components/FloatUpWithScroll/FloatUpWithScroll';
import {useSidepeak} from '../../components/SidePeak';
import {
  Work,
  work_list,
  WorkCategory,
  WorkCategoryArray,
  WorkListKey,
} from '@data/work_list';

interface Props {
  lang: 'ja' | 'en';
}

export function Works(props: Props) {
  const category_color: Record<WorkCategory, string> = {
    Pickup: color.p0,
    Website: color.blue,
    'Web App': color.cyan,
    Tool: color.purple,
    Music: color.brand.soundcloud,
    Other: color.g3,
  };
  const tag_color: Record<Work['tags'][number]['kind'], string> = {
    lang: color.p0,
    'fw/lib': color.blue,
    tool: color.purple,
    other: color.g3,
  };

  const {open_sidepeak} = useSidepeak();
  const desc_map = React.useMemo(
    () =>
      Object.keys(work_list).reduce(
        (acc, key) => {
          return {
            ...acc,
            [key]: (
              <Markdown
                embed_card={() => <></>}
                inner_embed_card={() => <></>}
                md={work_list[key as WorkListKey].desc_md(props.lang)}
              />
            ),
          };
        },
        {} as Record<WorkListKey, React.ReactNode>,
      ),
    [props.lang],
  );

  type WorkAndKey = {
    key: WorkListKey;
    work: Work;
  };
  // object.groupBy() cannot create the object whose item is duplicated
  const groupby = React.useMemo(() => {
    // initialize acc in order to ensure the order of the categories
    const initial_acc = WorkCategoryArray.reduce(
      (acc, category) => {
        acc[category] = [];
        return acc;
      },
      {} as Record<WorkCategory, WorkAndKey[]>,
    );
    return Object.keys(work_list).reduce((acc, key) => {
      const work = work_list[key as keyof typeof work_list];
      work.category.forEach(category => {
        acc[category].push({
          key: key as WorkListKey,
          work,
        });
      });
      return acc;
    }, initial_acc);
  }, []);

  return (
    <section className={css.container}>
      <h2>Works</h2>
      <GridView<WorkAndKey>
        group_color={category_color}
        items={groupby}
        renderer={({group, item, index}) => (
          <motion.button
            key={`${group}work${index}`}
            {...floatup_with_scroll}
            onClick={() => open_sidepeak(desc_map[item.key])}
            // give key in order to make possible to scroll into this item
            // item can own multiple categories, so same item can appear multiple times,
            // so use class instead of id
            className={cs(item.key, css.item)}
          >
            <div className={css.img_wrapper}>
              {item.work.img ? (
                <img
                  src={item.work.img}
                  alt={item.work.title(props.lang)}
                  loading='lazy'
                  decoding='async'
                  className={css.item_thumbnail}
                />
              ) : (
                <div className={css.dummy_img} />
              )}
            </div>
            <div className={css.properties}>
              <span className={css.property_title}>
                {item.work.title(props.lang)}
              </span>
              <div>
                <div className={css.multiselect}>
                  {item.work.tags.map((tag, i) => (
                    <SelectItem
                      color={tag_color[tag.kind]}
                      label={tag.name}
                      key={`${index}tag${i}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.button>
        )}
      />
    </section>
  );
}
