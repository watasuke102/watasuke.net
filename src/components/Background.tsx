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


interface FigureInfo {
  x: number,
  y: number,
  size: number,
};

enum Figure {
  triangle, circle, cube
}

function rand(x: number) {
  return Math.floor(Math.random() * x);
}

export default class Background extends React.Component<any> {
  private canvas_ref = React.createRef<HTMLCanvasElement>();
  private pos: FigureInfo[] = [];
  constructor(props: any) {
    super(props);
    // sizeのランダム範囲
    const align = 10;
    // 三角形
    this.pos[Figure.triangle] = { x: 0, y: 0, size: 160 + rand(align) };
    // 円
    this.pos[Figure.circle] = { x: 0, y: 0, size: 100 + rand(align) };
    // 正方形
    this.pos[Figure.cube] = { x: 0, y: 0, size: 400 + rand(align) };
    this.InitToBasePositions();
  }

  InitToBasePositions() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    // 三角形
    this.pos[Figure.triangle].x = width - 150;
    this.pos[Figure.triangle].y = 450;
    // 円
    this.pos[Figure.circle].x = 160;
    this.pos[Figure.circle].y = 140;
    // 正方形
    this.pos[Figure.cube].x = 0;
    this.pos[Figure.cube].y = height;
  }

  // Animation() だとrequestAnimationFrameが機能しない
  Animation = () => {
    requestAnimationFrame(this.Animation);
    console.log('ANIMARTION');
    const canvas = this.canvas_ref.current;
    if (!canvas) return;
    const context = canvas.getContext('2d');
    if (!context) return;

    // =====================
    // 描画
    this.InitToBasePositions();
    context.clearRect(0, 0, canvas.width, canvas.height);
    let pos: FigureInfo;

    // 三角形
    pos = this.pos[Figure.triangle];
    context.strokeStyle = '#3dd651';
    context.lineWidth = 7;
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

    // 円
    pos = this.pos[Figure.circle];
    context.lineWidth = 18;
    context.strokeStyle = '#e47f45';
    context.beginPath();
    context.arc(pos.x, pos.y, pos.size, 0, 2 * Math.PI);
    context.closePath();
    context.stroke();

    // 正方形
    pos = this.pos[Figure.cube];
    context.lineWidth = 25;
    context.strokeStyle = '#3d5ada';
    // 中央座標から左上の座標を求める
    pos.x -= pos.size / 2;
    pos.y -= pos.size / 2;
    context.strokeRect(pos.x, pos.y, pos.size, pos.size);

  }

  componentDidMount() {
    this.UpdateCanvasSize();
    requestAnimationFrame(this.Animation);
    window.addEventListener('resize', this.UpdateCanvasSize);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.UpdateCanvasSize);
  }

  // UpdateCanvasSize() とするとEventListenerから呼んだときにrefがundefinedになる
  UpdateCanvasSize = () => {
    const canvas = this.canvas_ref.current;
    if (canvas) {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    this.InitToBasePositions();
  }

  render() {
    return <canvas ref={this.canvas_ref} className='Background-canvas' />;
  }
}
