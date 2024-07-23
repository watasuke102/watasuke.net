// watasuke.net
// CopyRight (c) 2021-2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import * as css from './SkillCard.css';
import {motion} from 'framer-motion';
import {FadeWithScroll} from '@utils/FadeWithScroll';
import {Skill} from '../skill_list';

interface Props {
  animation_enabled: boolean;
  lang: string;
  skill: Skill;
}

export function SkillCard(props: Props): JSX.Element {
  return (
    <motion.div className={css.skillcard} {...(props.animation_enabled ? FadeWithScroll : {})}>
      <span className={css.name}>{props.skill.name}</span>
      <div className={css.right}>
        <span className={css.category}>{props.skill.category}</span>
        <span className={css.tier}>{props.skill.tier}</span>
      </div>
      <span className={css.desc}>{props.lang !== 'en' ? props.skill.desc_ja : props.skill.desc_en}</span>
      <div className={css.icon}>{props.skill.icon}</div>
    </motion.div>
  );
}
