/*!
 * PortfolioContainer.tsx
 *
 * CopyRight (c) 2021-2023 Watasuke
 * Email  : <watasuke102@gmail.com>
 * Twitter: @Watasuke102
 * software is released under the MIT SUSHI-WARE License.
 */
import {AnimatePresence, motion, useAnimation} from 'framer-motion';
import React from 'react';
import {Transition} from '@utils/Transition';
import './PortfolioContainer.scss';

enum Position {
  reached_top = -1,
  none,
  reached_bottom,
}

interface Props {
  children: React.ReactElement[];
  animation_enabled: boolean;
  page_transition_enabled: boolean;
}

// onedark like
const BackgroundColors = ['#98c379', '#468492', '#6b65bf', '#925d46', '#282c34'];

export const PortfolioContainer = (props: Props): React.ReactElement => {
  const [scroll_height, SetScrollHeight] = React.useState(0);
  const bg_control = useAnimation();

  const [place, SetPlace] = React.useState(Position.none);
  const place_ref = React.useRef(Position.none);
  place_ref.current = place;

  const [current_page, SetCurrentPage] = React.useState(0);
  const current_page_ref = React.useRef(0);
  current_page_ref.current = current_page;

  const [next_page, SetNextPage] = React.useState(current_page);
  const next_page_ref = React.useRef(0);
  next_page_ref.current = next_page;

  const [is_moving_page, SetIsMovingPage] = React.useState(false);
  const is_moving_page_ref = React.useRef(is_moving_page);
  is_moving_page_ref.current = is_moving_page;

  const UpdateScrollBar = () => {
    const container = document.getElementById('PortfolioContainer-container');
    if (!container) return;

    // 要素がスクロール不可能だった場合は非表示
    if (container && container.clientHeight >= container.scrollHeight) {
      SetScrollHeight(0);
      return;
    }
    // 画面全体に対するスクロール量の割合
    const percent = container.scrollTop / (container.scrollHeight - container.clientHeight);
    // 画面一番下に到達してしばらくしてから移動できるようにする
    const interval = 100;
    if (percent === 0) {
      setTimeout(() => SetPlace(Position.reached_top), interval);
    } else if (percent >= 0.999) {
      setTimeout(() => SetPlace(Position.reached_bottom), interval);
    } else {
      SetPlace(Position.none);
    }
    SetScrollHeight(container.clientHeight * percent);
  };

  // ページ切り替えアニメーションの開始
  // 実際にstate.current_pageを切り替えるのはアニメーション内
  const StartPageTransition = (e: WheelEvent) => {
    if (is_moving_page_ref.current) {
      e.preventDefault();
      return;
    }

    let changeable: boolean = false;
    // 要素がスクロール不可能だった場合は常にページ移動可能に
    const container = document.getElementById('PortfolioContainer-container');
    if (container && container.clientHeight >= container.scrollHeight) changeable = true;
    // 要素がスクロール可能かつ画面端までスクロールしてなければページ移動しない
    if (!changeable && place_ref.current === Position.none) return;
    // 次のページに移動させる
    if (
      (place_ref.current === Position.reached_bottom || changeable) &&
      current_page_ref.current !== props.children.length - 1 &&
      e.deltaY > 0 // 下にスクロールしていた場合
    ) {
      SetIsMovingPage(true);
      SetNextPage(current => current + 1);
      // 前のページに移動させる
    } else if (
      (place_ref.current === Position.reached_top || changeable) &&
      current_page_ref.current !== 0 &&
      e.deltaY < 0 // 上にスクロールしていた場合
    ) {
      SetIsMovingPage(true);
      SetNextPage(current => current - 1);
    }
  };

  React.useEffect(() => {
    document.getElementById('PortfolioContainer-container')?.addEventListener('scroll', UpdateScrollBar);
    window.addEventListener('wheel', StartPageTransition);
    return () => {
      document.getElementById('PortfolioContainer-container')?.removeEventListener('scroll', UpdateScrollBar);
      window.removeEventListener('wheel', StartPageTransition);
    };
  }, []);

  const OnAnimationComplete = React.useCallback(() => {
    if (is_moving_page_ref.current) {
      // フェードアウト後なら、スクロールをリセットしてページ切り替え
      bg_control.start({backgroundColor: BackgroundColors[next_page_ref.current]});
      document.getElementById('PortfolioContainer-container')?.scrollTo(0, 0);
      SetCurrentPage(next_page_ref.current);
      SetPlace(Position.reached_top);
      SetIsMovingPage(false);
    }
  }, [is_moving_page]);

  // 背景色要素とページ数は一致していなければならない
  if (BackgroundColors.length !== props.children.length) {
    throw Error(
      `[ERROR] BackgroundColors.len !== children.len (${BackgroundColors.length} !== ${props.children.length})`,
    );
  }

  if (!props.page_transition_enabled) {
    return (
      <div id='PortfolioContainer-container_mobile' style={{backgroundColor: BackgroundColors[0]}}>
        {props.children.map((page, i) => (
          <div key={page.key} style={{backgroundColor: BackgroundColors[i]}}>
            {page}
          </div>
        ))}
      </div>
    );
  }

  return (
    <motion.div
      initial={{backgroundColor: BackgroundColors[current_page_ref.current]}}
      animate={bg_control}
      transition={Transition(props.animation_enabled, {duration: 1})}
      id='PortfolioContainer-background'
    >
      <AnimatePresence>
        {!is_moving_page && (
          <motion.div
            initial={{opacity: 0, scale: 0.9}}
            animate={{opacity: 1, scale: 1}}
            exit={{opacity: 0, scale: 0.9}}
            transition={Transition(props.animation_enabled, {
              scale: {
                duration: 0.5,
                ease: 'circOut',
              },
              opacity: {
                duration: 0.5,
                ease: 'linear',
              },
            })}
            onAnimationComplete={OnAnimationComplete}
            id='PortfolioContainer-container'
          >
            {props.children[current_page]}
          </motion.div>
        )}
      </AnimatePresence>
      <div style={{height: scroll_height}} id='PortfolioContainer-scroll' />

      <div id='PortfolioContainer-page_indicator'>
        {['Welcome', 'Skills', 'History', 'Links'].map((str, index) => (
          <div
            key={index}
            className={'indicator_container' + (index === current_page ? ' current' : '')}
            onClick={() => {
              SetNextPage(index);
              SetIsMovingPage(true);
            }}
          >
            <span className='name'>{str}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};
