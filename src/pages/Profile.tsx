/*!
 * Profile.tsx
 *
 * CopyRight (c) 2021 Watasuke
 * Email  : <watasuke102@gmail.com>
 * Twitter: @Watasuke102
 * This software is released under the MIT SUSHI-WARE License.
 */

import React from 'react';
import '../styles/Profile';

export default function Profile() {
  return (
    <div className='Profile-container'>
      <h2>プロフィール</h2>
      <h2>基本情報</h2>
      <p>とある高専生のわたすけ（@Watasuke102）です。<br />
        2004/10/21生まれです。2020年に高専に入学しました。<br />
        <strong>英検準2級</strong>、<strong>P検2級</strong>を持っています（アピールポイント）</p>
      <ul>
        <li><a href="https://twitter.com/watasuke102">Twitter</a> （@Watasuke102）</li>
        <li>Discord （わたすけ#8113）</li>
        <li><a href="https://github.com/watasuke102">GitHub</a> （watasuke102）</li>
        <li><a href="https://soundcloud.com/watasuke">SoundCloud（watasuke）</a></li>
      </ul>
      <h3>しゅみ</h3>
      <p>色んな所に広く浅く手をつけるタイプなので、結構色々あります。</p>
      <p>技術的な趣味等は<a href="https://github.com/watasuke102">GitHub</a>のREADME・ポートフォリオのほうがわかりやすいと思います。</p>
      <h4>Linux</h4>
      <p>Linuxを使っています。ゲーム・DTM・動画編集以外はLinuxでやってます。<br />
          ArchLinux+KDE Plasmaの組み合わせをメインに使用してます。</p>
      <h4>プログラミング</h4>
      <p>プログラミングをしています。<br />
            今まで作ったものはポートフォリオに載っていると思います。</p>
      <h5>よく使う言語・ライブラリ</h5>
      <ul>
        <li>
          <p><strong>C++</strong><br />
                  中3からやってます。あんまりわかってないです。</p>
          <ul>
            <li>Qt<br />
                GUIアプリケーションを作るときはこれ使ってます。</li>
            <li>OpenSiv3D<br />
                こっちはゲーム作るときに使います。DXライブラリの当たり判定実装に詰まって使い始めました。</li>
          </ul>
        </li>
        <li><strong>TypeScript</strong><br />
            React.jsと一緒に使います。あんまりわかってないです。<br />Next.jsとGatsby.jsを使ったことがあります。</li>
        <li><strong>Python</strong><br />
            あんまりわかってないです</li>
        <li><strong>Flutter（Dart）</strong><br />
            クロスプラットフォームアプリ・もしくはスマホ用のアプリを作るときはこれを使います。あまり深く考えないでもいい感じのデザインになるので良いです。  </li>
        <li><strong>HSP</strong><br />
            一番最初（小4）に触れた言語です。多分もう書けません・・・。</li>
      </ul>

      <h4>パソコン</h4>
      <p>常にパソコンを触っております。自作経験は自分用1、他人1の計2回です。</p>
      <table>
        <thead>
          <tr>
            <th>パーツ</th>
            <th>現在のスペック</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>OS</td>
            <td>Windows10 Home + Arch Linux</td>
          </tr>
          <tr>
            <td>CPU</td>
            <td>Ryzen5 2600</td>
          </tr>
          <tr>
            <td>GPU</td>
            <td>GTX 1060 6GB</td>
          </tr>
          <tr>
            <td>RAM</td>
            <td>24GB</td>
          </tr>
          <tr>
            <td>SSD</td>
            <td>240GB SATA（OS）、480GB M.2（ゲーム）</td>
          </tr>
          <tr>
            <td>HDD</td>
            <td>2TB</td>
          </tr>
        </tbody>
      </table>
      <h4>ゲーム</h4>
      <p>しょっちゅうゲームしています。主にやるのはAPEXとデレステです。</p>
      <p>APEXはシーズン5/8でプラチナIVに到達する程度の実力です。2021/04/05にレイスで2406ダメージを出して、初めて2000ハンマー取りました。やった～</p>
      <p>デレステは2020/09/10に始めました。2020/11/14にPLV100になりました。いまのところ杏・凪・幸子を推しています。</p>
      <h4><strong>東方</strong></h4>
      <p>東方が好きです。原作STGもしてます。いろいろクリアしてます。</p>
      <p>
        Easyは天空璋までほぼクリア済みだったはず<br />
        Normalは地霊殿以外クリア済み<br />
        2020/03/20 永夜抄Exクリア（冥界組）
      </p>
      <table>
        <thead>
          <tr>
            <th>作品名</th>
            <th>クリア状況（<strong>Hard</strong>）</th>
            <th>クリア時使用キャラ</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>紅魔郷</td>
            <td>○</td>
            <td>魔理沙B</td>
          </tr>
          <tr>
            <td>妖々夢</td>
            <td>○</td>
            <td>咲夜A</td>
          </tr>
          <tr>
            <td>永夜抄</td>
            <td>○</td>
            <td>結界組</td>
          </tr>
          <tr>
            <td>風神録</td>
            <td>○</td>
            <td>魔理沙B（バグ利用）</td>
          </tr>
          <tr>
            <td>地霊殿</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>星蓮船</td>
            <td>☓</td>
            <td></td>
          </tr>
          <tr>
            <td>神霊廟</td>
            <td>☓</td>
            <td></td>
          </tr>
          <tr>
            <td>輝針城</td>
            <td>☓</td>
            <td></td>
          </tr>
          <tr>
            <td>紺珠伝</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>天空璋</td>
            <td>☓</td>
            <td></td>
          </tr>
        </tbody>
      </table>
      <p>〇＝ノーコンクリア、△＝コンティニューあり、×＝未クリア、空白＝未プレイ</p>
      <p>紺珠伝は完全無欠です</p>

      <h4>その他</h4>
      <p>たまーにDTM（Studio One）したり、動画編集（AviUtl）したり、3DCG（Blender）したりしてます。</p>
      <p>作った曲はSoundCloudに載せてるので、ぜひ</p>
      <iframe src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1008232588&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true" width="100%" height="300px" frameBorder="no" scrolling="no"><span data-mce-type="bookmark" className="mce_SELRES_start">﻿</span></iframe>

      <h2>連絡先</h2>
      <p>なんかあったら投げてください。Twitterのメンション/DMが一番確実だと思います。</p>
      <ul>
        <li>Twitter：<a href="https://twitter.com/Watasuke102">@Watasuke102</a></li>
        <li>E-mail：<a href="mailto:watasuke102@gmail.com">watasuke102@gmail.com</a></li>
      </ul>
    </div>
  );
}
