/*!
 * PortfolioContainer.tsx
 *
 * CopyRight (c) 2021 Watasuke
 * Email  : <watasuke102@gmail.com>
 * Twitter: @Watasuke102
 * This software is released under the MIT SUSHI-WARE License.
 */

import React from 'react';
import { gsap, Power4 } from 'gsap';
import '../styles/PortfolioContainer.scss';

enum Position {
  reached_top = -1,
  none = 0,
  reached_bottom = 1,
}

interface Props {
  children: React.ReactNode[],
}

interface States {
  current_page: number,
  scroll_height: number,
  is_moving_page: boolean
  place: Position,
}

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
    document.getElementById('PortfolioContainer-container');
  }

  UpdateScrollBar() {
    if (!this.container) return;
    console.log('scroll listener');

    // 要素がスクロール不可能だった場合は非表示
    if (this.container && this.container.clientHeight >= this.container.scrollHeight) {
      this.setState({ scroll_height: 0 });
      return;
    }
    // 画面全体に対するスクロール量の割合
    const percent = this.container.scrollTop / (this.container.scrollHeight - this.container.clientHeight);
    // 画面一番下に到達してしばらくしてから移動できるようにする
    const interval = 100;
    if (percent === 0) {
      setTimeout(() => this.setState({ place: Position.reached_top }), interval);
    } else if (percent === 1) {
      setTimeout(() => this.setState({ place: Position.reached_bottom }), interval);
    }
    this.setState({
      scroll_height: this.container.clientHeight * percent
    });
  }

  // ページ切り替えアニメーションの開始
  // 実際にstate.current_pageを切り替えるのはアニメーション内
  UpdatePage(e: WheelEvent) {
    if (this.state.is_moving_page) {
      e.preventDefault();
      return;
    }
    console.log('WHEEl');
    let changeable: boolean = false;
    // 要素がスクロール不可能だった場合は常にページ移動可能に
    if (this.container && this.container.clientHeight >= this.container.scrollHeight)
      changeable = true;
    // 要素がスクロール可能かつ画面端までスクロールしてなければページ移動しない
    if (!changeable && this.state.place == Position.none) return;

    // 次のページに移動させる
    if (
      (this.state.place == Position.reached_bottom || changeable) &&
      this.state.current_page != (this.props.children.length - 1) &&
      e.deltaY > 0 // 下にスクロールしていた場合
    ) {
      this.CreateTransition(Position.reached_bottom);
      this.setState({ place: Position.none });
      // 前のページに移動させる
    } else if (
      (this.state.place == Position.reached_top || changeable) &&
      this.state.current_page != 0 &&
      e.deltaY < 0 // 上にスクロールしていた場合
    ) {
      this.CreateTransition(Position.reached_top);
      this.setState({ place: Position.none });
    }
  }
  ScrollListener = () => this.UpdateScrollBar();
  WheelListener = (e: WheelEvent) => this.UpdatePage(e);
  componentDidMount() {
    this.container = document.getElementById('PortfolioContainer-container');
    window.addEventListener('scroll', this.ScrollListener, true);
    window.addEventListener('wheel', this.WheelListener, { passive: false });
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.ScrollListener, true);
    window.removeEventListener('wheel', this.WheelListener);
  }

  // ページ移動アニメーションの実行
  CreateTransition(pos: Position) {
    if (!this.container)
      return;
    this.setState({ is_moving_page: true });
    // Elements
    const scroll_bar = document.getElementById('PortfolioContainer-scroll');
    const container_2nd = document.getElementById(
      (pos === Position.reached_top) ?
        'PortfolioContainer-container_previous' : 'PortfolioContainer-container_after'
    );
    // ページを戻る際は予め下までスクロールしておく
    if (pos === Position.reached_top)
      container_2nd?.scrollTo(0, container_2nd.scrollHeight);
    // アニメーション関連
    const duration = 1; // アニメーションにかかる時間
    const direction = -pos;
    const timeline = gsap.timeline();
    timeline
      .to(scroll_bar, { opacity: 0, duration: duration })
      .to(this.container, {
        duration: duration,
        ease: Power4.easeOut,
        translateY: direction + '00%',
      }, '<')
      .to(container_2nd, {
        duration: duration,
        ease: Power4.easeOut,
        translateY: '0%',
        onComplete: () => {
          this.UpdateScrollBar();
          this.setState({ is_moving_page: false });
        },
      }, '<') // ページ移動前になにもないページで待機させたければ'<'を削除する
      // もとに戻す
      .to(this.container, {
        duration: 0,
        y: 0,
      })
      .to(container_2nd, {
        duration: 0,
        translateY: (-direction) + '00%',
      }, '<')
      .to(scroll_bar, { opacity: 1, duration: 0 }, '<');
    // 内容を入れ替え
    timeline.call(() => this.setState((state) => {
      return { current_page: state.current_page - direction }
    }), undefined, duration);
    // 一番端までスクロールするとplaceがreachedになるので
    const scroll_to = (pos === Position.reached_top) ? this.container.scrollHeight : 0;
    timeline.call(() => this.container?.scrollTo(0, scroll_to), undefined, 0.5);
  }

  render() {
    return (
      <>
        <div id='PortfolioContainer-container_previous'>
          {this.props.children[this.state.current_page - 1]}
        </div>
        <div id='PortfolioContainer-container'>
          {this.props.children[this.state.current_page]}
        </div>
        <div id='PortfolioContainer-container_after'>
          {this.props.children[this.state.current_page + 1]}
        </div>
        <div style={{ height: this.state.scroll_height }} id='PortfolioContainer-scroll' />
      </>
    );
  }
}
