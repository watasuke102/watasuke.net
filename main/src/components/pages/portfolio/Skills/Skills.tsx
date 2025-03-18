// watasuke.net
// CopyRight (c) 2021-2025 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @watasuke1024
// This software is released under the MIT or MIT SUSHI-WARE License.
import * as css from './Skills.css';
import {motion} from 'framer-motion';
import React from 'react';
import {FadeWithScroll} from '@utils/FadeWithScroll';
import {SkillCard} from './SkillCard';
import {Toggle} from '../Toggle/Toggle';
import {Heading} from '../Heading';
import {skills, tier_description} from '@data/skill_list';

interface Props {
  animation_enabled: boolean;
  lang: string;
}

export function Skills(props: Props) {
  const [groupby, set_groupby] = React.useState('category');

  const skill_cards = React.useMemo(() => {
    const skill_group = Map.groupBy(skills, e =>
      groupby !== 'tier' ? e.category : e.tier,
    );
    if (groupby !== 'tier') {
      skill_group.forEach(e => e.sort((a, b) => a.tier - b.tier));
    }

    const cards: {group: string; list: React.ReactNode[]}[] = [];
    skill_group.forEach(e => {
      cards.push({
        group: groupby !== 'tier' ? e[0].category : `tier ${e[0].tier}`,
        list: e.map((e, i) => (
          <SkillCard
            key={`skill_${i}`}
            animation_enabled={props.animation_enabled}
            skill={e}
            lang={props.lang}
          />
        )),
      });
    });
    return cards;
  }, [props, groupby]);

  return (
    <section>
      <Heading color='#61afef' text='Skills' />
      <div className={css.toggle}>
        <span className={css.label}>Group by:</span>
        <Toggle
          first='category'
          second='tier'
          current={groupby}
          set_state={set_groupby}
        />
      </div>

      <h3 className={css.tier_desc_heading}>
        {props.lang !== 'en' ? 'tierについて' : 'about tier'}
      </h3>
      <div className={css.tier_desc_wrapper}>
        <div>
          {Object.keys(tier_description).map(key => {
            const desc = tier_description[Number(key)];
            return (
              <div key={key} className={css.tier_desc_item}>
                <span>tier {key}</span>
                <span>{props.lang !== 'en' ? desc.ja : desc.en}</span>
              </div>
            );
          })}
        </div>
      </div>

      <div className={css.skill_container}>
        {skill_cards.map((e, i) => (
          <div key={i}>
            <motion.span
              className={css.group_name}
              {...(props.animation_enabled ? FadeWithScroll : {})}
            >
              {e.group}
            </motion.span>
            <div className={css.group}>{e.list}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
