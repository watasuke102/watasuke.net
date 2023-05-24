# watasuke.net

[https://watasuke.net](https://watasuke.net)で公開されているページのソース  
React+Gatsby です

## structure

Docker Compose は開発用の Straip（と、それに必要な MySQL）が載っている

`docker compose up` しただけでは Gatsby は立ち上がりません

## how to use

1. `cp sample-config.json config.json`
2. できあがった `config.json` を編集
   - `contentUrl`: 記事の中を取ってくる URL
   - `imageUrl`: 画像を取ってくる URL
   - `trackingId`: Google Analytics 4 プロパティの「測定 ID」（G-12345 みたいなやつ）
   - `adsenseId`: ca-pub-\d+みたいなやつ
   - `inArticleSlot`: おそらく10桁の数字、記事内広告ユニットを作成して出てくるHTMLの `data-ad-slot`
3. 開発する場合は `docker compose up -d --build`
4. `npm i` して `npm run dev` する

docker compose up 後に strapi フォルダができるので、/strapi/api に/api フォルダをコピー (`cp -r api strapi/`) する

Strapi にアクセスし、sitedata に `profile` と `short-profile` を追加

http://localhost:1337/admin で記事を編集し、http://localhost:8000 で確認

## LICENSE

Dual-licensed; MIT (`LICENSE-MIT` or [The MIT License – Open Source Initiative](https://opensource.org/license/mit/)) or MIT SUSHI-WARE LICENSE (`LICENSE-MIT_SUSHI.md`)


