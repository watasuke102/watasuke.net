---
name: 'common'
root: './src'
output: '**'
ignore: []
questions:
  name: 'name: '
---

# `{{ pascal(inputs.name) }}/{{ pascal(inputs.name) }}.tsx`

```tsx
// watasuke.net
// CopyRight (c) 2021-2025 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @watasuke1024
// This software is released under the MIT or MIT SUSHI-WARE License.
import React from 'react';
import * as css from './{{ pascal(inputs.name) }}.css';

export function {{ pascal(inputs.name) }}() {
  return(
    <></>
  );
}

```

# `{{ pascal(inputs.name) }}/{{ pascal(inputs.name) }}.css.ts`

```ts
// watasuke.net
// CopyRight (c) 2021-2025 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @watasuke1024
// This software is released under the MIT or MIT SUSHI-WARE License.
import {style} from '@vanilla-extract/css';

export const a = style({});
```

# `{{ pascal(inputs.name) }}/index.ts`

```ts
// watasuke.net
// CopyRight (c) 2021-2025 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @watasuke1024
// This software is released under the MIT or MIT SUSHI-WARE License.
import { {{ pascal(inputs.name) }} } from './{{ pascal(inputs.name) }}';

export { {{ pascal(inputs.name) }} };

```
