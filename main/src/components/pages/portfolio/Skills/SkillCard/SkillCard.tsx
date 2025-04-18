// watasuke.net
// CopyRight (c) 2021-2025 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @watasuke1024
// This software is released under the MIT or MIT SUSHI-WARE License.
import * as css from './SkillCard.css';
import {motion} from 'framer-motion';
import {FadeWithScroll} from '@utils/FadeWithScroll';
import {Skill} from '@data/skill_list';

interface Props {
  animation_enabled: boolean;
  lang: string;
  skill: Skill;
}

export function SkillCard(props: Props) {
  const desc = props.lang !== 'en' ? props.skill.desc_ja : props.skill.desc_en;

  return (
    <motion.div
      className={css.skillcard}
      {...(props.animation_enabled ? FadeWithScroll : {})}
    >
      <span className={css.name}>{props.skill.name}</span>
      <div className={css.right}>
        <span className={css.category}>{props.skill.category}</span>
        <span className={css.tier}>{props.skill.tier}</span>
      </div>
      <span className={css.desc}>
        {desc.charAt(0) === '\n' ? desc.slice(1) : desc}
      </span>
      <div className={css.icon}>{props.skill.icon}</div>
    </motion.div>
  );
}
