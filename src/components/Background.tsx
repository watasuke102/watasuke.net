/*!
 * Background.tsx
 *
 * CopyRight (c) 2021 Watasuke
 * Email  : <watasuke102@gmail.com>
 * Twitter: @Watasuke102
 * This software is released under the MIT SUSHI-WARE License.
 */

import React from 'react';
import '../styles/Background.scss'


interface Vec { x: number, y: number };

interface FigureInfo extends Vec {
  size: number,
  color: string,
  animation_x: number,
  animation_y: number,
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
    this.pos[Figure.triangle] = {
      x: 0, y: 0, size: 170 + rand(align), color: '#3dd651',
      animation_x: rand(360), animation_y: rand(360)
    };
    // 円
    // これだけ色指定を0～255のrgbで指定
    this.pos[Figure.circle] = {
      x: 0, y: 0, size: 0, color: '228,127,69',
      animation_x: 0, animation_y: 1
    };
    // 正方形
    this.pos[Figure.cube] = {
      x: 0, y: 0, size: 334 + rand(align), color: '#3d5ada',
      animation_x: 0, animation_y: 0
    };
    this.InitToBasePositions();
  }

  InitToBasePositions() {
    if (typeof window !== `undefined`) {
      const width = window.innerWidth;
      const height = window.innerHeight;
      // 三角形
      this.pos[Figure.triangle].x = width - 150;
      this.pos[Figure.triangle].y = 450;
      // 円
      this.pos[Figure.circle].x = 160;
      this.pos[Figure.circle].y = 140;
      // 正方形
      this.pos[Figure.cube].x = width / 2;
      this.pos[Figure.cube].y = height;
    }
  }

  // Animation() だとrequestAnimationFrameが機能しない
  Animation = () => {
    requestAnimationFrame(this.Animation);
    if (!this.canvas_ref) return;
    const canvas = this.canvas_ref.current;
    if (!canvas) return;
    const context = canvas.getContext('2d');
    if (!context) return;

    this.InitToBasePositions();
    context.clearRect(0, 0, canvas.width, canvas.height);
    let base_pos: FigureInfo;

    // 三角形
    // animation_x -> x座標アニメーションの進行度, animation_y -> y座標アニメーションの進行度
    {
      base_pos = this.pos[Figure.triangle];
      // 周期関数（三角関数）でアニメーション
      // ちょっと変えたかったので、x, yでそれぞれsin, cosを使ってる
      base_pos.x += Math.cos(base_pos.animation_x / 180 * Math.PI) * 6;
      base_pos.y += Math.sin(base_pos.animation_y / 180 * Math.PI) * 6;
      context.strokeStyle = base_pos.color;
      context.lineWidth = 14;
      context.lineCap = 'round';
      context.beginPath();
      base_pos.y -= (base_pos.size / 2);
      context.moveTo(base_pos.x, base_pos.y);
      base_pos.x += base_pos.size * Math.cos(Math.PI / 3);
      base_pos.y += base_pos.size * Math.sin(Math.PI / 3);
      context.lineTo(base_pos.x, base_pos.y);
      base_pos.x -= base_pos.size;
      context.lineTo(base_pos.x, base_pos.y);
      context.closePath();
      context.stroke();

      // アニメーション
      this.pos[Figure.triangle].animation_x += 0.8;
      this.pos[Figure.triangle].animation_y += 0.8;

    }

    // 円
    // animation_x -> 半径 (増加量), animation_y -> 
    {
      base_pos = this.pos[Figure.circle];
      context.lineWidth = 8;
      context.strokeStyle = `rgba(${base_pos.color}, ${base_pos.animation_y})`;
      context.beginPath();
      context.arc(base_pos.x, base_pos.y, base_pos.size + base_pos.animation_x, 0, 2 * Math.PI);
      context.closePath();
      context.stroke();

      // アニメーション
      this.pos[Figure.circle].animation_x += 0.2;
      this.pos[Figure.circle].animation_y -= 0.001;
      // 完全に消えてしばらく経ったら
      if (this.pos[Figure.circle].animation_y <= -0.25) {
        this.pos[Figure.circle].animation_x = 0;
        this.pos[Figure.circle].animation_y = 1;
      }
    }

    // 正方形
    // 正方形の回転は独自実装（context.rotateだとcanvas自体が回転するため）
    // animation_x -> 角度
    {
      base_pos = this.pos[Figure.cube];
      const rad = base_pos.animation_x / 180 * Math.PI;

      // 中央座標から4隅の座標を求める
      let left_top: Vec = { x: base_pos.x - base_pos.size / 2, y: base_pos.y - base_pos.size / 2 };
      let right_bottom: Vec = { x: left_top.x + base_pos.size, y: left_top.y + base_pos.size };
      let right_top: Vec = { x: right_bottom.x, y: left_top.y };
      let left_bottom: Vec = { x: left_top.x, y: right_bottom.y };
      // 原点中心に回転する方法しか見当たらなかったので
      // 図形の中央を原点まで移動させ、回転させたあとに戻す
      const rotate = (prop: Vec) => {
        prop.x -= base_pos.x;
        prop.y -= base_pos.y;
        let result: Vec = {
          x: prop.x * Math.cos(rad) - prop.y * Math.sin(rad),
          y: prop.x * Math.sin(rad) + prop.y * Math.cos(rad)
        };
        result.x += base_pos.x;
        result.y += base_pos.y;
        return result;
      }
      left_top = rotate(left_top);
      right_top = rotate(right_top);
      right_bottom = rotate(right_bottom);
      left_bottom = rotate(left_bottom);
      // 座標計算おわり

      context.strokeStyle = base_pos.color;
      context.lineWidth = 34;
      context.lineCap = 'round';
      context.beginPath();
      // 左上
      context.moveTo(left_top.x, left_top.y);
      // 右上
      context.lineTo(right_top.x, right_top.y);
      // 右下
      context.lineTo(right_bottom.x, right_bottom.y);
      // 左下
      context.lineTo(left_bottom.x, left_bottom.y);
      context.closePath();
      context.stroke();

      // アニメーション
      this.pos[Figure.cube].animation_x += 0.07;
    }
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
