/*!
 * portfolio.tsx
 *
 * CopyRight (c) 2021 Watasuke
 * Email  : <watasuke102@gmail.com>
 * Twitter: @Watasuke102
 * This software is released under the MIT SUSHI-WARE License.
 */

import React from 'react';
import '../styles/portfolio.scss'

enum Position {
  none,
  reached_bottom,
  reached_top,
}

interface States {
  current_page: number,
  scroll_height: number,
  place: Position
}

export default class Portfolio extends React.Component<any, States> {
  constructor(props: any) {
    super(props);
    this.state = { current_page: 0, scroll_height: 0, place: Position.none };
  }

  UpdateScrollBar() {
    const container = document.getElementById('portfolio-container');
    if (!container) return;
    // 画面全体に対するスクロール量の割合
    const percent = container.scrollTop / (container.scrollHeight - container.clientHeight);
    let place: Position = Position.none;
    if (Position)
    if (percent === 0) {
      place = Position.reached_top;
    } else if (percent === 1) {
      place = Position.reached_bottom;
    }
    this.setState({
      scroll_height: container.clientHeight * percent,
      place: place
    });
  }
  componentDidMount() {
    window.addEventListener('scroll', () => this.UpdateScrollBar(), true);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', () => this.UpdateScrollBar(), true);
  }

  render() {
    return (
      <div id='portfolio-container'>
        <h1>page: {this.state.current_page}</h1>
        <li>0</li>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>

        <div style={{ height: this.state.scroll_height }} className='portfolio-scroll' />
      </div>
    );
  }
}