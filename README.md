# watasuke.net

[https://watasuke.net](https://watasuke.net)で公開されているページのソース  
React+Gatsby です

## how to use

開発： `docker-compose up -d --build` の後に `npm i` して `npm run dev` する

docker-compose up 後に strapi フォルダができるので、/strapi/api に/api フォルダをコピー (`cp -r api strapi/`) する

sitedata には profile と short-profile を追加

http://localhost:1337/admin で記事を編集し、http://localhost:8000 で確認

## LICENSE

MIT SUSHI-WARE LICENSE
