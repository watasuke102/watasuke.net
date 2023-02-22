// Skills.tsx
//
// CopyRight (c) 2021-2023 Watasuke
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT SUSHI-WARE License.
import {motion} from 'framer-motion';
import React from 'react';
import './Skills.scss';

const SkillCard = (props: {name: string; body?: string}): React.ReactElement => {
  return (
    <motion.div
      className='skillcard'
      initial={{opacity: 0, y: 30}}
      whileInView={{opacity: 1, y: 0}}
      transition={{duration: 0.5}}
      viewport={{once: true, amount: 0.3}}
    >
      <p className='name'>{props.name}</p>
      {props.body && <p className='body'>{props.body}</p>}
    </motion.div>
  );
};

export const Skills = (): React.ReactElement => (
  <div id='portfolio-skills'>
    <h2>Skills</h2>
    <div id='skill-container'>
      <div className='categoly'>
        <p className='heading'>Languages</p>
        <SkillCard name='C/C++' body='使用歴が最も長い言語です' />
        <SkillCard name='Rust' body='DiscordのBot、自作OSに' />
        <SkillCard name='TypeScript' body='Reactと一緒に使います' />
        <SkillCard name='HTML' />
      </div>
      <div className='categoly'>
        <p className='heading'>Frameworks/Libraries</p>
        <SkillCard name='React' body='Next.js, Gatsbyを使ったことがあります' />
        <SkillCard name='Qt' />
        <SkillCard name='OpenSiv3D' />
        <SkillCard name='Flutter' body='使用回数は少ないです' />
      </div>
      <div className='categoly'>
        <p className='heading'>Tools</p>
        <SkillCard name='VSCode' body='愛用しているエディタ' />
        <SkillCard name='Linux' body='Arch Linuxを主に使用しています' />
        <SkillCard name='Git' body='コミットなど基本的な知識はあります' />
        <SkillCard name='GitHub' />
        <SkillCard name='Docker' body='このサイトは一部docker-composeによって運用されています' />
      </div>
      <div className='categoly'>
        <p className='heading'>Other</p>
        <SkillCard name='MySQL' />
        <SkillCard name='CSS/SCSS' />
        <SkillCard name='AviUtl' />
        <SkillCard name='Blender' body='高度なモデリングはできません' />
        <SkillCard name='DTM' body='かなり低頻度' />
      </div>
    </div>
    <div className='next-page' />
  </div>
);
