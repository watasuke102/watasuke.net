// Skills.tsx
//
// CopyRight (c) 2021-2023 Watasuke
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import * as portfolio_common from '@/pages/portfolio/common.css';
import {BreakWithCR, Toggle} from '@/common';
import {AnimatePresence, motion} from 'framer-motion';
import {graphql, useStaticQuery} from 'gatsby';
import React from 'react';
import toml from 'toml';
import {FadeWithScroll} from '@utils/FadeWithScroll';
import * as style from './Skills.css';
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
  const [next_groupby, set_next_groupby] = React.useState('');
  const next_groupby_ref = React.useRef('');
  next_groupby_ref.current = next_groupby;

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
      cards.push({
        group: groupby !== 'tier' ? e[0].category : `tier ${e[0].tier}`,
        list: e.map((e, i) => (
          <motion.div className={style.skillcard} key={i} {...(props.animation_enabled ? FadeWithScroll : {})}>
            <span className={style.name}>{e.name}</span>
            <div className={style.right}>
              <span className={style.category}>{e.category}</span>
              <span className={style.tier}>{e.tier}</span>
            </div>
            <span className={style.desc}>
              <BreakWithCR str={props.lang !== 'en' ? e.desc_ja : e.desc_en} />
            </span>
            <div className={style.icon}>
              <Icon icon={e.icon} />
            </div>
          </motion.div>
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
    <div className={portfolio_common.container}>
      <h2>Skills</h2>

      <div className={style.toggle}>
        <span className={style.label}>Group by:</span>
        <Toggle
          first='category'
          second='tier'
          current={groupby}
          set_state={props.animation_enabled ? toggle_changed : set_groupby}
        />
      </div>

      <AnimatePresence>
        {next_groupby === '' && (
          <motion.div className={style.skill_container} {...(props.animation_enabled ? container_variants : {})}>
            {SkillCard.map((e, i) => (
              <>
                <motion.span className={style.group_name} {...(props.animation_enabled ? FadeWithScroll : {})}>
                  {e.group}
                </motion.span>
                <div className={style.group} key={i}>
                  {e.list}
                </div>
              </>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <div className={portfolio_common.next_page} />
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
