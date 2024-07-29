import {CodegenConfig} from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: './graphql/schema.graphql',
  documents: ['./graphql/main.graphql', './graphql/editor.graphql'],
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
