/*!
 * portfolio.tsx
 *
 * CopyRight (c) 2021 Watasuke
 * Email  : <watasuke102@gmail.com>
 * Twitter: @Watasuke102
 * This software is released under the MIT SUSHI-WARE License.
 */

import React from 'react';
import { gsap } from 'gsap';
import '../styles/portfolio.scss'
import { isPostfixUnaryExpression } from 'typescript';

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
  UpdatePage() {
    if (this.state.place == Position.none) return;
    if (this.state.place == Position.reached_bottom) {
      this.CreateTransition(Position.reached_bottom);
      this.setState((state) => {
        return {
          current_page: state.current_page + 1,
          place: Position.none
        };
      });
    } else if (this.state.place == Position.reached_top && this.state.current_page != 0) {
      this.CreateTransition(Position.reached_top);
      this.setState((state) => {
        return {
          current_page: state.current_page - 1,
          place: Position.none
        };
      });
    }
  }
  componentDidMount() {
    this.container = document.getElementById('portfolio-container');
    window.addEventListener('scroll', () => this.UpdateScrollBar(), true);
    window.addEventListener('wheel', () => this.UpdatePage(), true);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', () => this.UpdateScrollBar(), true);
    window.addEventListener('wheel', () => this.UpdatePage(), true);
  }

  CreateTransition(pos: Position) {
    if (!this.container) return;
    const scroll_bar = document.getElementById('portfolio-scroll');
    const direction = (pos === Position.reached_bottom) ? -1 : 1;
    const timeline = gsap.timeline();
    timeline
      .to(this.container, {
        y: this.container.clientHeight * direction,
        duration: 0.5
      })
      .to(scroll_bar, {
        opacity: 0,
        duration: 0.5
      }, '<')
      .to(this.container, {
        y: 0,
        duration: 0.5
      }, "+=1")
      .to(scroll_bar, {
        opacity: 1,
        duration: 0
      });
    // (0, 0)までスクロールするとplaceがreached_topになるので
    timeline.call(() => this.container?.scrollTo(0, 1), undefined, 0.5);
  }

  render() {
    return (
      <>
        <div id='portfolio-container'>
          <li>0</li>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>6</li>

        </div>
        <h1>page: {this.state.current_page}</h1>
        <div style={{ height: this.state.scroll_height }} id='portfolio-scroll' />
      </>
    );
  }
}