// watasuke.net
// CopyRight (c) 2021-2026 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @watasuke1024
// This software is released under the MIT or MIT SUSHI-WARE License.
import * as css from './Welcome.css';
import {motion} from 'framer-motion';
import {Avatar} from '@common';
import {color, easing} from '@watasuke.net/common';
import {HorizontalEmerge} from '@pages/portfolio/components/HorizontalEmerge';
import {FadeFloatIn} from '@pages/portfolio/components/FadeFloatIn';
import * as constant from '@pages/portfolio/constant';
import IconDoubleDown from '@assets/icons/general/double-down.svg';
import IconGitHub from '@assets/icons/Links/github.svg';
import IconTwitter from '@assets/icons/Links/twitter.svg';
import IconInstagram from '@assets/icons/Links/instagram.svg';
import IconSoundcloud from '@assets/icons/Links/soundcloud.svg';

const ids_border_length_percent = 12;
const [ids_border_initial, ids_border_final] = ['00', 'ff'].map(
  alpha =>
    `linear-gradient(45deg,
      ${color.bg}${alpha} ${ids_border_length_percent}%,
      transparent         ${ids_border_length_percent}%,
      transparent         ${100 - ids_border_length_percent}%,
      ${color.bg}${alpha} ${100 - ids_border_length_percent}%)`,
);

export function Welcome() {
  return (
    <>
      <div className={css.dummy} />
      <section className={css.background}>
        <motion.h1
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{
            delay:
              constant.welcome_last_fadein.base +
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
            delay: constant.welcome_zoom.base + constant.welcome_zoom.delay,
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
                constant.welcome_ids_expand.base +
                constant.welcome_ids_expand.delay,
              duration: constant.welcome_ids_expand.duration,
              ease: easing.out_circ.array,
            }}
          >
            {/* to keep contents display regardless of wrapper size that is changed by animation */}
            <motion.div
              initial={{borderImageSource: ids_border_initial}}
              animate={{borderImageSource: ids_border_final}}
              transition={{
                delay:
                  constant.welcome_ids_border_fadein.base +
                  constant.welcome_ids_border_fadein.delay,
                duration: 0.3,
              }}
              className={css.ids}
            >
              <div>
                <HorizontalEmerge
                  delay={
                    constant.welcome_name_emerge.base +
                    constant.welcome_name_emerge.delay
                  }
                  duration={constant.welcome_name_emerge.duration}
                >
                  <div className={css.name_primary}>わたすけ</div>
                </HorizontalEmerge>
                <HorizontalEmerge
                  delay={
                    constant.welcome_name_emerge.base +
                    constant.welcome_name_emerge.delay +
                    0.1
                  }
                  duration={constant.welcome_name_emerge.duration}
                >
                  <div className={css.name_secondary}>watasuke</div>
                </HorizontalEmerge>
              </div>

              <FadeFloatIn
                delay={
                  constant.welcome_ids_float.base +
                  constant.welcome_ids_float.delay
                }
                duration={constant.welcome_ids_float.duration}
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
                  constant.welcome_ids_float.base +
                  constant.welcome_ids_float.delay +
                  0.1
                }
                duration={constant.welcome_ids_float.duration}
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
                  constant.welcome_ids_float.base +
                  constant.welcome_ids_float.delay +
                  0.2
                }
                duration={constant.welcome_ids_float.duration}
              >
                <div className={css.icon_container}>
                  <a
                    href='https://soundcloud.com/watasuke'
                    className={css.icon}
                  >
                    <IconSoundcloud />
                  </a>
                  <span className={css.id_text}>watasuke</span>
                </div>
              </FadeFloatIn>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{
            delay:
              constant.welcome_last_fadein.base +
              constant.welcome_last_fadein.delay,
            duration: constant.welcome_last_fadein.duration,
          }}
          className={css.scroll_prompt}
        >
          <span className={css.down_arrow}>
            <IconDoubleDown />
          </span>
          <span className={css.scroll_prompt_text}>scroll down</span>
        </motion.div>
      </section>
    </>
  );
}
