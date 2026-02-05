// watasuke.net
// CopyRight (c) 2021-2026 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @watasuke1024
// This software is released under the MIT or MIT SUSHI-WARE License.
type EmbedCardType = (props: {url: string}) => JSX.Element;
type InnerEmbedCardType = (props: {slug: string}) => JSX.Element;

export {EmbedCardType, InnerEmbedCardType};
