// watasuke.net
// CopyRight (c) 2021-2025 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @watasuke1024
// This software is released under the MIT or MIT SUSHI-WARE License.
import {AdsInArticle} from './src/Ads';
import {Body} from './src/Markdown/Body/Body';
import {ExtractHeading} from './src/ExtractHeading';
import {Switch} from './src/Switch/Switch';
import {TocMapper} from './src/TocMapper';
import {classify_url_embed_type} from './src/ClassifyUrlEmbedType';
import {classnames} from './src/classnames';
import {color} from './src/css/color';
import {easing} from './src/easing';
import type Heading from './src/Heading';
import type {UrlEmbedType} from './src/ClassifyUrlEmbedType';

export {
  AdsInArticle,
  Body as Markdown,
  ExtractHeading,
  Heading,
  Switch,
  TocMapper,
  UrlEmbedType,
  classify_url_embed_type,
  classnames as cs,
  color,
  easing,
};
