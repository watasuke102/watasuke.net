# watasuke.net

![](/src/assets/thumbnail.jpg)

[https://watasuke.net](https://watasuke.net)で公開されているページのソース  
TypeScript, React, vanilla-extract, Gatsby, Next.js, Rust, etc...

## 記事について

誤字・脱字・間違い・権利侵害など、記事の中身に関する報告は 記事へのコメント (Discussion) or Issue or Twitter (@Watasuke102)でお願いします

## repository structure

monorepo by npm workspace

- main
  - `watasuke.net` でホストされているページ本体
  - Gatsby
- cms
  - 記事およびプロフィール等の情報を管理するサーバーサイドソフトウェア
  - Rust + Rocket + Juniper
- editor
  - 記事を編集するページ
  - Next.js
- common
  - `main` および `editor` の両方から用いられるコンポーネント等
- config
  - ESLintやTypeScriptの設定とenv file (`config.ts`)
- graphql
  - `cms` によって生成されるGraphQLのschema＋ `main` と `editor` で用いるAPIのdocuments

## how to use

### prepare

1. `cp config/sample-config.ts config/config.ts`
2. `cp cms/config-sample.toml cms/config.toml`
3. できあがった `config.ts` を編集
   - `apiUrl`: cms.watasuke.netが動作しているURL
   - `trackingId`: Google Analytics 4 プロパティの「測定 ID」（G-12345 みたいなやつ）
   - `adsenseId`: ca-pub-\d+みたいなやつ
   - `inArticleSlot`: おそらく10桁の数字、記事内広告ユニットを作成して出てくるHTMLの `data-ad-slot`
4. `npm i`

### launch

3. `cd cms && cargo run &`
4. main: `npm run dev`, editor: `npm -w editor run dev`

## LICENSE

Dual-licensed; MIT (`LICENSE-MIT` or [The MIT License – Open Source Initiative](https://opensource.org/license/mit/)) or MIT SUSHI-WARE LICENSE (`LICENSE-MIT_SUSHI.md`)
