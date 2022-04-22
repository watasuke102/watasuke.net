/*!
 * PortfolioContainer.tsx
 *
 * CopyRight (c) 2021-2022 Watasuke
 * Email  : <watasuke102@gmail.com>
 * Twitter: @Watasuke102
 * software is released under the MIT SUSHI-WARE License.
 */

import React from 'react';
import {AnimatePresence, motion, useAnimation} from 'framer-motion';
import '../../styles/PortfolioContainer.scss';

enum Position {
  reached_top = -1,
  none,
  reached_bottom,
}

interface Props {
  children: React.ReactNode[];
}

// onedark like
// const BackgroundColors = ['#4b4692', '#61afef', '#98c379', '#e06c75', '#2f332f'];
const BackgroundColors = ['#4b4692', '#468492', '#5a9246', '#925d46', '#2f332f'];

export default function PortfolioContainer(props: Props) {
  const [scroll_height, SetScrollHeight] = React.useState(0);
  const bg_control = useAnimation();

  const [place, SetPlace] = React.useState(Position.none);
  const place_ref = React.useRef(Position.none);
  place_ref.current = place;

  const [current_page, SetCurrentPage] = React.useState(2);
  const current_page_ref = React.useRef(0);
  current_page_ref.current = current_page;

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
    } else if (percent >= 0.98) {
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
    if (!changeable && place_ref.current == Position.none) return;
    // 次のページに移動させる
    if (
      (place_ref.current == Position.reached_bottom || changeable) &&
      current_page_ref.current != props.children.length - 1 &&
      e.deltaY > 0 // 下にスクロールしていた場合
    ) {
      SetIsMovingPage(true);
      SetPlace(Position.reached_bottom);
      // 前のページに移動させる
    } else if (
      (place_ref.current == Position.reached_top || changeable) &&
      current_page_ref.current != 0 &&
      e.deltaY < 0 // 上にスクロールしていた場合
    ) {
      SetIsMovingPage(true);
      SetPlace(Position.reached_top);
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
      document.getElementById('PortfolioContainer-container')?.scrollTo(0, 0);
      SetCurrentPage(current => current + place_ref.current);
      SetPlace(Position.reached_top);
      SetIsMovingPage(false);
      bg_control.start({backgroundColor: BackgroundColors[current_page_ref.current]});
    }
  }, [is_moving_page]);

  // 背景色要素とページ数は一致していなければならない
  if (BackgroundColors.length != props.children.length) {
    throw Error(
      `[ERROR] BackgroundColors.len != children.len (${BackgroundColors.length} != ${props.children.length})`,
    );
  }

  if (typeof navigator !== `undefined`) {
    if (navigator.userAgent.match(/iPhone|Android.+Mobile/)) {
      return (
        <div id='PortfolioContainer-container_mobile' style={{backgroundColor: BackgroundColors[0]}}>
          {props.children}
        </div>
      );
    } else {
      return (
        <motion.div
          initial={{backgroundColor: BackgroundColors[current_page_ref.current]}}
          animate={bg_control}
          transition={{duration: 1}}
          id='PortfolioContainer-background'
        >
          <AnimatePresence>
            {!is_moving_page && (
              <motion.div
                initial={{opacity: 0, scale: 0.9}}
                animate={{opacity: 1, scale: 1}}
                exit={{opacity: 0, scale: 0.9}}
                transition={{duration: 0.5, ease: 'circOut'}}
                onAnimationComplete={OnAnimationComplete}
                id='PortfolioContainer-container'
              >
                {props.children[current_page]}
              </motion.div>
            )}
          </AnimatePresence>
          <div style={{height: scroll_height}} id='PortfolioContainer-scroll' />
        </motion.div>
      );
    }
  }
  return <></>;
}
