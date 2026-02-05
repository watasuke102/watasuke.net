// watasuke.net
// CopyRight (c) 2021-2026 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @watasuke1024
// This software is released under the MIT or MIT SUSHI-WARE License.
import {CodegenConfig} from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: './graphql/schema.graphql',
  generates: {
    'main/src/utils/graphql.ts': {
      documents: './graphql/main.graphql',
      plugins: ['typescript', 'typescript-operations', 'typescript-graphql-request'],
    },
    'editor/src/utils/graphql.ts': {
      documents: './graphql/editor.graphql',
      plugins: ['typescript', 'typescript-operations', 'typescript-graphql-request'],
    },
  },
};

export default config;
