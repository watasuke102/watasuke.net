/*!
 * portfolio.tsx
 *
 * CopyRight (c) 2021 Watasuke
 * Email  : <watasuke102@gmail.com>
 * Twitter: @Watasuke102
 * This software is released under the MIT SUSHI-WARE License.
 */

import React from 'react';
import { gsap, Power4 } from 'gsap';
import '../styles/portfolio.scss';

enum Position {
  reached_top = -1,
  none = 0,
  reached_bottom = 1,
}

interface States {
  current_page: number,
  scroll_height: number,
  place: Position
}

export default class Portfolio extends React.Component<any, States> {
  private container: HTMLElement | null;

  private pages: object[] = [
    (<>
      <li>0</li><li>1</li><li>2</li>
      <li>3</li><li>4</li><li>5</li>
    </>),
    (<>
      <li>A</li><li>B</li><li>C</li>
      <li>D</li><li>E</li><li>F</li>
    </>),
    (<>
      <li>3</li><li>4</li><li>5</li>
      <li>0</li><li>1</li><li>2</li>
    </>),
    (<>
      <li>D</li><li>E</li><li>F</li>
      <li>A</li><li>B</li><li>C</li>
    </>),
  ]

  constructor(props: any) {
    super(props);
    this.state = { current_page: 0, scroll_height: 0, place: Position.none };
    this.container = null;
    document.getElementById('portfolio-container');
  }

  UpdateScrollBar() {
    if (!this.container) return;
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
    console.log(e.deltaY);
    if (this.state.place == Position.none) return;
    // 次のページに移動させる
    if (
      this.state.place == Position.reached_bottom &&
      this.state.current_page != (this.pages.length - 1) &&
      e.deltaY > 0 // 下にスクロールしていた場合
    ) {
      this.CreateTransition(Position.reached_bottom);
      this.setState({ place: Position.none });
      // 前のページに移動させる
    } else if (
      this.state.place == Position.reached_top &&
      this.state.current_page != 0 &&
      e.deltaY < 0 // 下にスクロールしていた場合
    ) {
      this.CreateTransition(Position.reached_top);
      this.setState({ place: Position.none });
    }
  }
  componentDidMount() {
    this.container = document.getElementById('portfolio-container');
    window.addEventListener('scroll', () => this.UpdateScrollBar(), true);
    window.addEventListener('wheel', (e) => this.UpdatePage(e), true);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', () => this.UpdateScrollBar(), true);
    window.addEventListener('wheel', (e) => this.UpdatePage(e), true);
  }

  // ページ移動アニメーションの実行
  CreateTransition(pos: Position) {
    if (!this.container)
      return;
    // Elements
    const scroll_bar = document.getElementById('portfolio-scroll');
    const container_2nd = document.getElementById(
      (pos === Position.reached_top) ?
        'portfolio-container_previous' : 'portfolio-container_after'
    );
    // ページを戻る際は予め下までスクロールしておく
    if (pos === Position.reached_top)
      container_2nd?.scrollTo(0, container_2nd.scrollHeight);
    // アニメーション関連
    const duration = 1; // アニメーションにかかる時間
    const direction = (pos === Position.reached_top) ? 1 : -1;
    const timeline = gsap.timeline();
    timeline
      .to(scroll_bar, {
        opacity: 0,
        duration: duration
      })
      .to(this.container, {
        ease: Power4.easeOut,
        translateY: direction + '00%',
        duration: duration
      }, '<')
      .to(container_2nd, {
        ease: Power4.easeOut,
        translateY: '0%',
        duration: duration
      }, '<') // ページ移動前になにもないページで待機させたければ'<'を削除する
      // もとに戻す
      .to(this.container, {
        y: 0,
        duration: 0
      })
      .to(container_2nd, {
        translateY: (-direction) + '00%',
        duration: 0
      }, '<')
      .to(scroll_bar, {
        opacity: 1,
        duration: 0
      }, '<');
    // 内容を入れ替え
    timeline.call(() => this.setState((state) => {
      return { current_page: state.current_page - direction }
    }), undefined, duration);
    // 一番端までスクロールするとplaceがreachedになるので
    const scroll_to = (pos === Position.reached_top) ? this.container.scrollHeight - 1 : 1;
    timeline.call(() => this.container?.scrollTo(0, scroll_to), undefined, 0.5);
  }

  render() {
    return (
      <>
        <div id='portfolio-container_previous'>
          {this.pages[this.state.current_page - 1]}
        </div>
        <div id='portfolio-container'>
          {this.pages[this.state.current_page]}
        </div>
        <div id='portfolio-container_after'>
          {this.pages[this.state.current_page + 1]}
        </div>
        <h1>page: {this.state.current_page}</h1>
        <div style={{ height: this.state.scroll_height }} id='portfolio-scroll' />
      </>
    );
  }
}