// watasuke.net
// CopyRight (c) 2021-2025 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @watasuke1024
// This software is released under the MIT or MIT SUSHI-WARE License.

export const page_cutin = {
  delay: 0.2,
  duration: 0.3,
  total: 0.2 + 0.3,
} as const;

export const welcome_container_section_size = 240;
export const welcome_zoom = {
  base: page_cutin.total,
  delay: 0.0,
  duration: 0.6,
  total: 0.0 + 0.6,
} as const;
export const welcome_ids_expand = {
  base: welcome_zoom.base + welcome_zoom.total,
  delay: -0.35,
  duration: 0.4,
  total: -0.35 + 0.4,
} as const;
export const welcome_name_emerge = {
  base: welcome_ids_expand.base + welcome_ids_expand.total,
  delay: -0.3,
  duration: 0.7,
  total: -0.3 + 0.7,
} as const;
export const welcome_ids_float = {
  base: welcome_name_emerge.base + welcome_name_emerge.total,
  delay: -0.4,
  duration: 0.4,
  total: -0.4 + 0.4,
} as const;
export const welcome_ids_border_fadein = {
  base: welcome_ids_float.base + welcome_ids_float.total,
  delay: -0.1,
  duration: 0.5,
  total: -0.1 + 0.5,
} as const;
export const welcome_last_fadein = {
  base: welcome_ids_border_fadein.base + welcome_ids_border_fadein.total,
  delay: -0.0,
  duration: 0.4,
  total: -0.0 + 0.4,
} as const;
