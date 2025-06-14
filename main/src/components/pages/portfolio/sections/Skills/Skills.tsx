// watasuke.net
// CopyRight (c) 2021-2025 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @watasuke1024
// This software is released under the MIT or MIT SUSHI-WARE License.
import * as css from './Skills.css';
import React from 'react';
import {motion} from 'framer-motion';
import {color, Switch} from '@watasuke.net/common';
import {GridView, SelectItem} from '@pages/portfolio/components/NotionLike';
import {floatup_with_scroll} from '@pages/portfolio/components/FloatUpWithScroll/FloatUpWithScroll';
import {gen_skills, Skill, tier_description} from '@data/skill_list';

interface Props {
  lang: 'ja' | 'en';
}

export function Skills(props: Props) {
  const [groupby, set_groupby] = React.useState<'category' | 'tier'>(
    'category',
  );
  const group_color = {
    // category
    Language: color.p0,
    'FW/Lib': color.blue,
    Tool: color.yellow,
    // tier
    'tier 1': color.p0,
    'tier 2': color.blue,
    'tier 3': color.yellow,
  };
  const skills = React.useMemo(() => {
    const grouped = Object.groupBy(
      gen_skills(props.lang).map(e => ({
        ...e,
        desc: e.desc.charAt(0) === '\n' ? e.desc.slice(1) : e.desc,
      })),
      skill => (groupby === 'category' ? skill.category : `tier ${skill.tier}`),
    );
    Object.keys(grouped).forEach(key =>
      grouped[key as keyof typeof grouped]?.sort((a, b) => {
        if (groupby === 'tier') {
          return a.tier.localeCompare(b.tier);
        }
        const category_order = {
          Language: 0,
          'FW/Lib': 1,
          Tool: 2,
        } satisfies Record<Skill['category'], number>;
        return category_order[a.category] - category_order[b.category];
      }),
    );
    return grouped;
  }, [props.lang, groupby]);

  return (
    <section className={css.container}>
      <h2>Skills</h2>
      <details>
        <summary>{props.lang !== 'en' ? 'tierについて' : 'About tier'}</summary>
        {Object.entries(tier_description).map(([key, desc]) => {
          return (
            <div key={key} className={css.tier_desc_item}>
              <span className={css.tier_desc_label}>tier {key}</span>
              <span>{props.lang !== 'en' ? desc.ja : desc.en}</span>
            </div>
          );
        })}
      </details>

      <div className={css.switch_container}>
        <span className={css.switch_label}>
          {props.lang !== 'en' ? 'グループ : ' : 'Group by : '}
        </span>
        <span>{props.lang !== 'en' ? 'カテゴリ' : 'Category'}</span>
        <Switch
          checked={groupby === 'tier'}
          on_click={() =>
            set_groupby(groupby === 'category' ? 'tier' : 'category')
          }
          same_color
        />
        <span>tier</span>
      </div>

      <GridView<Skill>
        group_color={group_color}
        items={skills}
        renderer={({group, item, index}) => (
          <motion.section
            key={`skill-${group}${index}`}
            {...floatup_with_scroll}
            className={css.item}
          >
            <div className={css.title_area}>
              {item.icon && <div className={css.icon}>{item.icon}</div>}
              <h3 className={css.title}>{item.name}</h3>
            </div>
            <div>
              {groupby === 'category' ? (
                <SelectItem
                  color={group_color[`tier ${item.tier}`]}
                  label={`tier ${item.tier}`}
                />
              ) : (
                <SelectItem
                  color={group_color[item.category]}
                  label={item.category}
                />
              )}
            </div>
            <p className={css.desc}>{item.desc}</p>
          </motion.section>
        )}
      />
    </section>
  );
}
