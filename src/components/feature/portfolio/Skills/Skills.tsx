// Skills.tsx
//
// CopyRight (c) 2021-2023 Watasuke
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT SUSHI-WARE License.
import {BreakWithCR} from '@/common';
import {motion} from 'framer-motion';
import {graphql, useStaticQuery} from 'gatsby';
import React from 'react';
import toml from 'toml';
import './Skills.scss';

interface Props {
  animation_enabled: boolean;
  lang: string;
}

interface Skill {
  name: string;
  icon: string;
  tier: number;
  category: string;
  desc_ja: string;
  desc_en: string;
}

export const Skills = (props: Props): React.ReactElement => {
  const SkillCard = React.useMemo(() => {
    const skill_group = new Map<string, Skill[]>();
    const skill_list: Skill[] = toml.parse(
      useStaticQuery(graphql`
        query {
          portfolioToml(name: {eq: "Skills.toml"}) {
            body
          }
        }
      `).portfolioToml.body,
    ).skill;

    skill_list.forEach(e => {
      skill_group.set(e.category, skill_group.get(e.category) ?? []);
      skill_group.get(e.category)?.push(e);
    }, {});

    const cards: {group: string; list: React.ReactElement[]}[] = [];
    skill_group.forEach(e => {
      cards.push({
        group: e[0].category,
        list: e.map((e, i) => (
          <div className='skillcard' key={i}>
            <span className='name'>{e.name}</span>
            <div className='right'>
              <span className='category'>{e.category}</span>
              <span className='tier'>{e.tier}</span>
            </div>
            <span className='desc'>
              <BreakWithCR str={props.lang !== 'en' ? e.desc_ja : e.desc_en} />
            </span>
          </div>
        )),
      });
    });
    return cards;
  }, []);

  return (
    <div id='portfolio-skills'>
      <h2>Skills</h2>
      <div id='skill-container'>
        {SkillCard.map((e, i) => (
          <>
            <span className='group_name'>{e.group}</span>
            <div className='group' key={i}>
              {e.list}
            </div>
          </>
        ))}
      </div>
      <div className='next-page' />
    </div>
  );
};
