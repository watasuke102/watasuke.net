// watasuke.net
// CopyRight (c) 2021-2025 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @watasuke1024
// This software is released under the MIT or MIT SUSHI-WARE License.
import * as css from './Works.css';
import React from 'react';
import {cs} from '@watasuke.net/common';
import {
  Work,
  work_list,
  WorkCategory,
  WorkCategoryArray as work_category_array,
  WorkListKey,
} from '@data/work_list';

export function Works(props: {lang: 'ja' | 'en'}) {
  const category_classname: Record<WorkCategory, string> = {
    Pickup: css.multiselect_green,
    Website: css.multiselect_blue,
    'Web App': css.multiselect_cyan,
    Tool: css.multiselect_purple,
    Music: css.multiselect_soundcloud,
    Other: css.multiselect_gray,
  };
  const tag_classname: Record<Work['tags'][number]['kind'], string> = {
    lang: css.multiselect_green,
    'fw/lib': css.multiselect_blue,
    tool: css.multiselect_purple,
    other: css.multiselect_gray,
  };

  const groupby = React.useMemo(() => {
    const initial_acc = work_category_array.reduce(
      (acc, category) => {
        acc[category] = [];
        return acc;
      },
      {} as Record<
        WorkCategory,
        {
          key: WorkListKey;
          work: Work;
        }[]
      >,
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
      {Object.keys(groupby).map(category => (
        <details open key={category} className={css.category_section}>
          <summary>
            {/* 
              If give className to <summary>, the triangle that shows open/close status will disappear,
              so category name is wrapped by <span> 
            */}
            <span
              className={cs(
                css.multiselect_item,
                category_classname[category as WorkCategory],
              )}
            >
              {category}
            </span>
          </summary>
          <div className={css.grid_view}>
            {groupby[category as WorkCategory].map((e, index) => (
              <div
                key={`${category}work${index}`}
                // give key in order to make possible to scroll into this item
                // item can own multiple categories, so same item can appear multiple times,
                // so use class instead of id
                className={cs(e.key, css.item)}
              >
                <div className={css.img_wrapper}>
                  {e.work.img ? (
                    <img
                      src={e.work.img}
                      alt={e.work.title(props.lang)}
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
                    {e.work.title(props.lang)}
                  </span>
                  <div>
                    <div className={css.multiselect}>
                      {e.work.tags.map((tag, i) => (
                        <span
                          key={`${index}tag${i}`}
                          className={cs(
                            css.multiselect_item,
                            tag_classname[tag.kind],
                          )}
                        >
                          {tag.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </details>
      ))}
    </section>
  );
}
