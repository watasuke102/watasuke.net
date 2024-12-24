---
name: 'common'
root: './src'
output: '**'
ignore: []
questions:
  name: 'name: '
  is_storybook_required:
    confirm: 'Do you need Storybook file?'
    initial: true
---

# `{{ pascal(inputs.name) }}/{{ pascal(inputs.name) }}.tsx`

```tsx
// watasuke.net > editor
// CopyRight (c) 2021-2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import React from 'react';
import {css} from './{{ pascal(inputs.name) }}.css';

export function {{ pascal(inputs.name) }}() {
  return(
    <></>
  );
}

```

# `{{ pascal(inputs.name) }}/{{ pascal(inputs.name) }}.css.ts`

```ts
// watasuke.net > editor
// CopyRight (c) 2021-2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import {style} from '@vanilla-extract/css';

export const css = {
  a: style({}),
};
```

# `{{ pascal(inputs.name) }}/index.ts`

```ts
// watasuke.net > editor
// CopyRight (c) 2021-2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import { {{ pascal(inputs.name) }} } from './{{ pascal(inputs.name) }}';

export { {{ pascal(inputs.name) }} };

```

# `{{ inputs.is_storybook_required || "!" }}{{ pascal(inputs.name) }}/{{ pascal(inputs.name) }}.stories.tsx`

```tsx
// watasuke.net > editor
// CopyRight (c) 2021-2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';
import '@watasuke.net/common/src/css/base.css';
import { {{ pascal(inputs.name) }} } from './{{ pascal(inputs.name) }}';

const meta: Meta<typeof {{ pascal(inputs.name) }}> = {
  component: {{ pascal(inputs.name) }},
  parameters: {
    layout: 'centered',
  },
};
export default meta;

export const Main: StoryObj<typeof {{ pascal(inputs.name) }}> = {
  render: () => <{{ pascal(inputs.name) }} />,
};

```
