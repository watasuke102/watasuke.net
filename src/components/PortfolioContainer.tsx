/*!
 * PortfolioContainer.tsx
 *
 * CopyRight (c) 2021-2022 Watasuke
 * Email  : <watasuke102@gmail.com>
 * Twitter: @Watasuke102
 * This software is released under the MIT SUSHI-WARE License.
 */

import React from 'react';
import {AnimatePresence, motion} from 'framer-motion';
import '../styles/PortfolioContainer.scss';

enum Position {
  reached_top = -1,
  none,
  reached_bottom,
}

interface Props {
  children: React.ReactNode[];
}

interface States {
  current_page: number;
  scroll_height: number;
  is_moving_page: boolean;
  place: Position;
}

const BackgroundColors = ['#4b4692', '#98c379', '#e06c75', '#61afef', '#2f332f'];

export default class PortfolioContainer extends React.Component<Props, States> {
  private container: HTMLElement | null;

  constructor(props: Props) {
    super(props);
    this.state = {
      current_page: 0,
      scroll_height: 0,
      is_moving_page: false,
      place: Position.none,
    };
    this.container = null;
  }

  UpdateScrollBar() {
    if (!this.container) return;

    // 要素がスクロール不可能だった場合は非表示
    if (this.container && this.container.clientHeight >= this.container.scrollHeight) {
      this.setState({scroll_height: 0});
      return;
    }
    // 画面全体に対するスクロール量の割合
    const percent = this.container.scrollTop / (this.container.scrollHeight - this.container.clientHeight);
    // 画面一番下に到達してしばらくしてから移動できるようにする
    const interval = 100;
    if (percent === 0) {
      setTimeout(() => this.setState({place: Position.reached_top}), interval);
    } else if (percent >= 0.98) {
      setTimeout(() => this.setState({place: Position.reached_bottom}), interval);
    } else {
      this.setState({place: Position.none});
    }
    this.setState({
      scroll_height: this.container.clientHeight * percent,
    });
  }

  // ページ切り替えアニメーションの開始
  // 実際にstate.current_pageを切り替えるのはアニメーション内
  UpdatePage(e: WheelEvent) {
    if (this.state.is_moving_page) {
      e.preventDefault();
      return;
    }
    let changeable: boolean = false;
    // 要素がスクロール不可能だった場合は常にページ移動可能に
    if (this.container && this.container.clientHeight >= this.container.scrollHeight) changeable = true;
    // 要素がスクロール可能かつ画面端までスクロールしてなければページ移動しない
    if (!changeable && this.state.place == Position.none) return;
    // 次のページに移動させる
    if (
      (this.state.place == Position.reached_bottom || changeable) &&
      this.state.current_page != this.props.children.length - 1 &&
      e.deltaY > 0 // 下にスクロールしていた場合
    ) {
      this.setState({place: Position.reached_bottom, is_moving_page: true});
      // 前のページに移動させる
    } else if (
      (this.state.place == Position.reached_top || changeable) &&
      this.state.current_page != 0 &&
      e.deltaY < 0 // 上にスクロールしていた場合
    ) {
      this.setState({place: Position.reached_top, is_moving_page: true});
    }
  }

  ScrollListener = () => this.UpdateScrollBar();
  WheelListener = (e: WheelEvent) => this.UpdatePage(e);
  componentDidMount() {
    this.container = document.getElementById('PortfolioContainer-container');
    window.addEventListener('scroll', this.ScrollListener, true);
    window.addEventListener('wheel', this.WheelListener, {passive: false});
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.ScrollListener, true);
    window.removeEventListener('wheel', this.WheelListener);
  }

  render() {
    if (typeof navigator !== `undefined`) {
      if (navigator.userAgent.match(/iPhone|Android.+Mobile/)) {
        return <div id='PortfolioContainer-container_mobile'>{this.props.children}</div>;
      } else {
        return (
          <motion.div
            initial={{backgroundColor: '#2f332f'}}
            animate={{backgroundColor: BackgroundColors[this.state.current_page]}}
            transition={{duration: 1}}
            id='PortfolioContainer-background'
          >
            <AnimatePresence>
              {!this.state.is_moving_page && (
                <motion.div
                  initial={{opacity: 0, scale: 0.9}}
                  animate={{opacity: 1, scale: 1}}
                  exit={{opacity: 0, scale: 0.9}}
                  transition={{duration: 0.5, ease: 'circOut'}}
                  onAnimationComplete={() => {
                    if (this.state.is_moving_page) {
                      console.log(this.props.children[0]?.valueOf());
                      // フェードアウト後なら、スクロールをリセットしてページ切り替え
                      document.getElementById('PortfolioContainer-container')?.scrollTo(0, 0);
                      this.setState(state => ({
                        is_moving_page: false,
                        current_page: state.current_page + state.place,
                        place: Position.reached_top,
                      }));
                    }
                  }}
                  id='PortfolioContainer-container'
                >
                  {this.props.children[this.state.current_page]}
                </motion.div>
              )}
            </AnimatePresence>
            <div style={{height: this.state.scroll_height}} id='PortfolioContainer-scroll' />
          </motion.div>
        );
      }
    }
    return <></>;
  }
}
