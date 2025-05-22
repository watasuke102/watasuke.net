// watasuke.net
// CopyRight (c) 2021-2025 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @watasuke1024
// This software is released under the MIT or MIT SUSHI-WARE License.
import * as css from './Welcome.css';
import {motion} from 'framer-motion';
import {Avatar} from '@common';
import {easing} from '@watasuke.net/common';
import {HorizontalEmerge} from '@pages/portfolio/components/HorizontalEmerge';
import {FadeFloatIn} from '@pages/portfolio/components/FadeFloatIn';
import {constant} from '../../constant';
import IconDoubleDown from '@assets/icons/general/double-down.svg';
import IconGitHub from '@assets/icons/Links/github.svg';
import IconTwitter from '@assets/icons/Links/twitter.svg';
import IconInstagram from '@assets/icons/Links/instagram.svg';
import IconSoundcloud from '@assets/icons/Links/soundcloud.svg';

export function Welcome() {
  return (
    <section className={css.background}>
      <motion.h1
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{
          delay:
            constant.page_cutin.total +
            constant.welcome_zoom.total +
            constant.welcome_ids_expand.total +
            constant.welcome_name_emerge.total +
            constant.welcome_ids_float.total +
            constant.welcome_last_fadein.delay,
          duration: constant.welcome_last_fadein.duration,
        }}
      >
        Hi there 👋
      </motion.h1>

      <motion.div
        initial={{opacity: 0, transform: 'scale(1.3)'}}
        animate={{
          opacity: 1,
          transform: 'scale(1.0)',
        }}
        transition={{
          delay: constant.page_cutin.total + constant.welcome_zoom.delay,
          duration: constant.welcome_zoom.duration,
          ease: easing.out_expo.array,
        }}
        className={css.container}
      >
        <Avatar
          size={constant.welcome_container_section_size as 80 | 240}
          loading='eager'
        />
        <motion.div
          initial={{width: 0, height: 0}}
          animate={{
            width: constant.welcome_container_section_size,
            height: constant.welcome_container_section_size,
          }}
          transition={{
            delay:
              constant.page_cutin.total +
              constant.welcome_zoom.total +
              constant.welcome_ids_expand.delay,
            duration: constant.welcome_ids_expand.duration,
            ease: easing.out_circ.array,
          }}
        >
          {/* to keep contents display regardless of wrapper size that is changed by animation */}
          <div className={css.ids}>
            <div>
              <HorizontalEmerge
                delay={
                  constant.page_cutin.total +
                  constant.welcome_zoom.total +
                  constant.welcome_ids_expand.total +
                  constant.welcome_name_emerge.delay
                }
              >
                <div className={css.name_primary}>わたすけ</div>
              </HorizontalEmerge>
              <HorizontalEmerge
                delay={
                  constant.page_cutin.total +
                  constant.welcome_zoom.total +
                  constant.welcome_ids_expand.total +
                  constant.welcome_name_emerge.delay +
                  0.1
                }
              >
                <div className={css.name_secondary}>watasuke</div>
              </HorizontalEmerge>
            </div>

            <FadeFloatIn
              delay={
                constant.page_cutin.total +
                constant.welcome_zoom.total +
                constant.welcome_ids_expand.total +
                constant.welcome_name_emerge.total +
                constant.welcome_ids_float.delay
              }
            >
              <div className={css.icon_container}>
                <a href='https://github.com/watasuke102' className={css.icon}>
                  <IconGitHub />
                </a>
                <a
                  href='https://instagram.com/watasuke102'
                  className={css.icon}
                >
                  <IconInstagram />
                </a>
                <span className={css.id_text}>@watasuke102</span>
              </div>
            </FadeFloatIn>
            <FadeFloatIn
              delay={
                constant.page_cutin.total +
                constant.welcome_zoom.total +
                constant.welcome_ids_expand.total +
                constant.welcome_name_emerge.total +
                constant.welcome_ids_float.delay +
                0.1
              }
            >
              <div className={css.icon_container}>
                <a href='https://x.com/watasuke1024' className={css.icon}>
                  <IconTwitter />
                </a>
                <span className={css.id_text}>@watasuke1024</span>
              </div>
            </FadeFloatIn>
            <FadeFloatIn
              delay={
                constant.page_cutin.total +
                constant.welcome_zoom.total +
                constant.welcome_ids_expand.total +
                constant.welcome_name_emerge.total +
                constant.welcome_ids_float.delay +
                0.2
              }
            >
              <div className={css.icon_container}>
                <a href='https://soundcloud.com/watasuke' className={css.icon}>
                  <IconSoundcloud />
                </a>
                <span className={css.id_text}>watasuke</span>
              </div>
            </FadeFloatIn>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{
          delay:
            constant.page_cutin.total +
            constant.welcome_zoom.total +
            constant.welcome_ids_expand.total +
            constant.welcome_name_emerge.total +
            constant.welcome_ids_float.total +
            constant.welcome_last_fadein.delay,
          duration: constant.welcome_last_fadein.duration,
        }}
        className={css.scroll_prompt}
      >
        <span>
          <IconDoubleDown />
        </span>
        <span>scroll down</span>
        <IconDoubleDown />
      </motion.div>
    </section>
  );
}
