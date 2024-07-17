// watasuke.net > common
// CopyRight (c) 2021-2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
type EmbedCardType = (props: {url: string}) => JSX.Element;
type InnerEmbedCardType = (props: {slug: string}) => JSX.Element;

export {EmbedCardType, InnerEmbedCardType};
