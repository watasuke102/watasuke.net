// watasuke.net
// CopyRight (c) 2021-2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import * as css from './Background.css';
import {useReducedMotion} from 'framer-motion';
import React from 'react';

interface FigureInfo {
  x: number;
  y: number;
  size: number;
  color: string;
  animation_x: number;
  animation_y: number;
}

enum Figure {
  triangle,
  circle,
  hexagon, // 六角形
}

function rand(x: number) {
  return Math.floor(Math.random() * x);
}

export default function Background(): React.ReactElement {
  const should_reduce_motion = useReducedMotion();
  const canvas_ref = React.useRef<HTMLCanvasElement>();
  const align = 10;

  React.useEffect(() => {
    const pos: FigureInfo[] = [];
    pos[Figure.triangle] = {
      x: 0,
      y: 0,
      size: 170 + rand(align),
      color: '#61afef',
      animation_x: rand(360),
      animation_y: rand(360),
    };
    pos[Figure.circle] = {
      x: 0,
      y: 0,
      size: 0,
      // 透明度を変更するために、色指定を0～255のrgbで指定する必要があるらしい
      color: '224, 108, 117',
      animation_x: 0,
      animation_y: 1,
    };
    pos[Figure.hexagon] = {
      x: 0,
      y: 0,
      size: 400 + rand(align),
      color: '#98c379',
      animation_x: 0,
      animation_y: 0,
    };

    const InitToBasePositions = () => {
      if (typeof window !== 'undefined') {
        const width = window.innerWidth;
        const height = window.innerHeight;
        pos[Figure.triangle].x = width * 0.85;
        pos[Figure.triangle].y = height / 2;
        pos[Figure.circle].x = width * 0.2;
        pos[Figure.circle].y = height * 0.2;
        pos[Figure.hexagon].x = width / 2;
        pos[Figure.hexagon].y = height;
      }
    };

    // Animation() だとrequestAnimationFrameが機能しない
    const Animation = (): void => {
      requestAnimationFrame(Animation);
      if (!canvas_ref) return;
      const canvas = canvas_ref.current;
      if (!canvas) return;
      const context = canvas.getContext('2d');
      if (!context) return;

      InitToBasePositions();
      context.clearRect(0, 0, canvas.width, canvas.height);
      let base_pos: FigureInfo;

      // animation_x -> x座標アニメーションの進行度, animation_y -> y座標アニメーションの進行度
      {
        base_pos = pos[Figure.triangle];
        // 周期関数（三角関数）でアニメーション
        // ちょっと変えたかったので、x, yでそれぞれsin, cosを使ってる
        base_pos.x += Math.cos((base_pos.animation_x / 180) * Math.PI) * 6;
        base_pos.y += Math.sin((base_pos.animation_y / 180) * Math.PI) * 6;
        context.strokeStyle = base_pos.color;
        context.lineWidth = 14;
        context.lineCap = 'round';
        context.beginPath();
        base_pos.y -= base_pos.size / 2;
        context.moveTo(base_pos.x, base_pos.y);
        base_pos.x += base_pos.size * Math.cos(Math.PI / 3);
        base_pos.y += base_pos.size * Math.sin(Math.PI / 3);
        context.lineTo(base_pos.x, base_pos.y);
        base_pos.x -= base_pos.size;
        context.lineTo(base_pos.x, base_pos.y);
        context.closePath();
        context.stroke();

        // アニメーション
        pos[Figure.triangle].animation_x += 0.8;
        pos[Figure.triangle].animation_y += 0.8;
      }

      // animation_x -> 半径 (増加量), animation_y -> unused
      {
        base_pos = pos[Figure.circle];
        context.lineWidth = 8;
        context.strokeStyle = `rgba(${base_pos.color}, ${base_pos.animation_y})`;
        context.beginPath();
        context.arc(base_pos.x, base_pos.y, base_pos.size + base_pos.animation_x, 0, 2 * Math.PI);
        context.closePath();
        context.stroke();

        // アニメーション
        pos[Figure.circle].animation_x += 0.2;
        pos[Figure.circle].animation_y -= 0.001;
        // 完全に消えてしばらく経ったら
        if (pos[Figure.circle].animation_y <= -0.25) {
          pos[Figure.circle].animation_x = 0;
          pos[Figure.circle].animation_y = 1;
        }
      }

      // animation_x -> 角度, animation_y -> unused
      {
        base_pos = pos[Figure.hexagon];
        context.save();
        {
          context.translate(base_pos.x, base_pos.y);
          context.rotate((base_pos.animation_x / 180) * Math.PI);

          context.strokeStyle = base_pos.color;
          context.lineWidth = 24;
          context.lineCap = 'round';
          context.beginPath();

          context.moveTo(0, -base_pos.size / 2);
          for (let i = 0; i < 5; ++i) {
            context.rotate((2 * Math.PI) / 6);
            context.lineTo(0, -base_pos.size / 2);
          }

          context.closePath();
          context.stroke();
        }
        context.restore();
        // アニメーション
        pos[Figure.hexagon].animation_x += 0.03;
      }
    };

    const UpdateCanvasSize = () => {
      const canvas = canvas_ref.current;
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
      InitToBasePositions();
    };

    InitToBasePositions();
    UpdateCanvasSize();
    requestAnimationFrame(Animation);
    window.addEventListener('resize', UpdateCanvasSize);
    return () => window.removeEventListener('resize', UpdateCanvasSize);
  }, []);

  return should_reduce_motion ? <></> : <canvas ref={canvas_ref} className={css.canvas} />;
}
