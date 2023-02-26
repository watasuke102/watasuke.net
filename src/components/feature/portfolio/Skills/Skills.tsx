// Skills.tsx
//
// CopyRight (c) 2021-2023 Watasuke
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT SUSHI-WARE License.
import {BreakWithCR, Toggle} from '@/common';
import {motion} from 'framer-motion';
import {graphql, useStaticQuery} from 'gatsby';
import React from 'react';
import toml from 'toml';
import {FadeWithScroll} from '@utils/FadeWithScroll';
import './Skills.scss';
import IconArch from '@assets/icons/Skills/arch.svg';
import IconC from '@assets/icons/Skills/c.svg';
import IconCmake from '@assets/icons/Skills/cmake.svg';
import IconCpp from '@assets/icons/Skills/cpp.svg';
import IconDocker from '@assets/icons/Skills/docker.svg';
import IconFile from '@assets/icons/Skills/file.svg';
import IconFlutter from '@assets/icons/Skills/flutter.svg';
import IconGatsby from '@assets/icons/Skills/gatsby.svg';
import IconGit from '@assets/icons/Skills/git.svg';
import IconMysql from '@assets/icons/Skills/mysql.svg';
import IconNeovim from '@assets/icons/Skills/neovim.svg';
import IconNextjs from '@assets/icons/Skills/nextjs.svg';
import IconQt from '@assets/icons/Skills/qt.svg';
import IconReact from '@assets/icons/Skills/react-logo.svg';
import IconRust from '@assets/icons/Skills/rust.svg';
import IconSass from '@assets/icons/Skills/sass.svg';
import IconTypescript from '@assets/icons/Skills/typescript.svg';
import IconVSCode from '@assets/icons/Skills/vscode.svg';
import IconWayland from '@assets/icons/Skills/wayland.svg';

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
  const [groupby, set_groupby] = React.useState('category');

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
      if (groupby !== 'tier') {
        skill_group.set(e.category, skill_group.get(e.category) ?? []);
        skill_group.get(e.category)?.push(e);
      } else {
        const tier = String(e.tier);
        skill_group.set(tier, skill_group.get(tier) ?? []);
        skill_group.get(tier)?.push(e);
      }
    }, {});

    const cards: {group: string; list: React.ReactElement[]}[] = [];
    skill_group.forEach(e => {
      console.log(e[0]);
      cards.push({
        group: groupby !== 'tier' ? e[0].category : `tier ${e[0].tier}`,
        list: e.map((e, i) => (
          <motion.div className='skillcard' key={i} {...(props.animation_enabled ? FadeWithScroll : {})}>
            <span className='name'>{e.name}</span>
            <div className='right'>
              <span className='category'>{e.category}</span>
              <span className='tier'>{e.tier}</span>
            </div>
            <span className='desc'>
              <BreakWithCR str={props.lang !== 'en' ? e.desc_ja : e.desc_en} />
            </span>
            <div className='icon'>
              <Icon icon={e.icon} />
            </div>
          </motion.div>
        )),
      });
    });
    return cards;
  }, [props, groupby]);

  return (
    <div id='portfolio-skills'>
      <h2>Skills</h2>

      <div className='toggle'>
        <span className='label'>Group by:</span>
        <Toggle first='category' second='tier' current={groupby} set_state={set_groupby} />
      </div>

      <div id='skill-container'>
        {SkillCard.map((e, i) => (
          <>
            <motion.span className='group_name' {...(props.animation_enabled ? FadeWithScroll : {})}>
              {e.group}
            </motion.span>
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

function Icon(props: {icon: string}): React.ReactElement {
  switch (props.icon) {
    case 'c':
      return <IconC />;
    case 'rust':
      return <IconRust />;
    case 'typescript':
      return <IconTypescript />;
    case 'sass':
      return <IconSass />;
    case 'cpp':
      return <IconCpp />;

    case 'react':
      return <IconReact />;
    case 'nextjs':
      return <IconNextjs />;
    case 'wayland':
      return <IconWayland />;
    case 'qt':
      return <IconQt />;
    case 'gatsby':
      return <IconGatsby />;
    case 'flutter':
      return <IconFlutter />;

    case 'vscode':
      return <IconVSCode />;
    case 'neovim':
      return <IconNeovim />;
    case 'git':
      return <IconGit />;
    case 'arch':
      return <IconArch />;
    case 'cmake':
      return <IconCmake />;
    case 'file':
      return <IconFile />;
    case 'mysql':
      return <IconMysql />;
    case 'docker':
      return <IconDocker />;
  }
  return <></>;
}
