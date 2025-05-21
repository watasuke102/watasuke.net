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
import {constant} from '../../constant';

export function Welcome() {
  return (
    <section className={css.background}>
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
            <HorizontalEmerge
              delay={
                constant.page_cutin.total +
                constant.welcome_zoom.total +
                constant.welcome_ids_expand.total +
                constant.welcome_info_emerge.delay
              }
            >
              <div className={css.name_primary}>わたすけ</div>
            </HorizontalEmerge>
            <HorizontalEmerge
              delay={
                constant.page_cutin.total +
                constant.welcome_zoom.total +
                constant.welcome_ids_expand.total +
                constant.welcome_info_emerge.delay +
                0.1
              }
            >
              <div className={css.name_secondary}>watasuke</div>
            </HorizontalEmerge>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
