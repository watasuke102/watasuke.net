/*!
 * Background.tsx
 *
 * CopyRight (c) 2021 Watasuke
 * Email  : <watasuke102@gmail.com>
 * Twitter: @Watasuke102
 * This software is released under the MIT SUSHI-WARE License.
 */

import React from 'react';
import '../styles/Background'

export default class Background extends React.Component {
  private canvas_ref = React.createRef<HTMLCanvasElement>();

  componentDidMount() {
    this.UpdateCanvasSize();
    window.addEventListener('resize', this.UpdateCanvasSize);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.UpdateCanvasSize);
  }

  UpdateCanvasSize = () => {
    const canvas = this.canvas_ref.current;
    if (canvas) {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    this.Animation();
  }

  Animation() {
    const canvas = this.canvas_ref.current;
    if (!canvas) {
      console.error('canvas is invalid');
      return;
    }
    const context = canvas.getContext('2d');
    if (!context) {
      console.error('context is invalid');
      return;
    }
    interface Vec { x: number, y: number, size: number }
    let pos: Vec = { x: 240, y: 200, size: 200 };

    // canvasに正三角形を描画
    context.strokeStyle = '#00ff00';
    context.lineWidth = 10;
    context.lineCap = 'round';
    context.beginPath();
    pos.y -= (pos.size / 2);
    context.moveTo(pos.x, pos.y);
    pos.x += pos.size * Math.cos(Math.PI / 3);
    pos.y += pos.size * Math.sin(Math.PI / 3);
    context.lineTo(pos.x, pos.y);
    pos.x -= pos.size;
    context.lineTo(pos.x, pos.y);
    context.closePath();
    context.stroke();
  }

  render() {
    return <canvas ref={this.canvas_ref} className='Background-canvas' />;
  }
}
