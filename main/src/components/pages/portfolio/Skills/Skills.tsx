// watasuke.net
// CopyRight (c) 2021-2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import * as css from './Skills.css';
import {Toggle} from '../Toggle/Toggle';
import {AnimatePresence, motion} from 'framer-motion';
import React from 'react';
import {FadeWithScroll} from '@utils/FadeWithScroll';
import {Skill, skills} from '@data/skill_list';
import {SkillCard as SkillCard2} from './SkillCard';
import {Heading} from '../Heading';

interface Props {
  animation_enabled: boolean;
  lang: string;
}

export function Skills(props: Props): React.ReactElement {
  const [groupby, set_groupby] = React.useState('category');
  const [next_groupby, set_next_groupby] = React.useState('');
  const next_groupby_ref = React.useRef('');
  next_groupby_ref.current = next_groupby;

  const SkillCard = React.useMemo(() => {
    const skill_group = Map.groupBy(skills, e => (groupby !== 'tier' ? e.category : e.tier));

    if (groupby !== 'tier') {
      skill_group.forEach(e => e.sort((a, b) => a.tier - b.tier));
    }

    const cards: {group: string; list: React.ReactElement[]}[] = [];
    skill_group.forEach(e => {
      cards.push({
        group: groupby !== 'tier' ? e[0].category : `tier ${e[0].tier}`,
        list: e.map((e, i) => (
          <SkillCard2 key={`skill_${i}`} animation_enabled={props.animation_enabled} skill={e} lang={props.lang} />
        )),
      });
    });
    return cards;
  }, [props, groupby]);

  const toggle_changed = React.useCallback((next: string) => {
    set_groupby('');
    set_next_groupby(next);
  }, []);

  const animation_completed = React.useCallback(() => {
    if (next_groupby_ref.current !== '') {
      set_groupby(next_groupby_ref.current);
    }
    set_next_groupby('');
  }, []);

  const container_variants = {
    variants: {
      init: {opacity: 0},
      main: {opacity: 1},
    },
    initial: 'init',
    animate: 'main',
    exit: 'init',
    transition: {duration: 0.1},
    onAnimationComplete: animation_completed,
  };

  return (
    <section>
      <Heading color='#61afef' text='Skills' />
      <div className={css.toggle}>
        <span className={css.label}>Group by:</span>
        <Toggle
          first='category'
          second='tier'
          current={groupby}
          set_state={props.animation_enabled ? toggle_changed : set_groupby}
        />
      </div>

      <AnimatePresence>
        {next_groupby === '' && (
          <motion.div className={css.skill_container} {...(props.animation_enabled ? container_variants : {})}>
            {SkillCard.map((e, i) => (
              <>
                <motion.span className={css.group_name} {...(props.animation_enabled ? FadeWithScroll : {})}>
                  {e.group}
                </motion.span>
                <div className={css.group} key={i}>
                  {e.list}
                </div>
              </>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
