import { GraphQLClient } from 'graphql-request';
import { GraphQLClientRequestHeaders } from 'graphql-request/build/cjs/types';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Article = {
  __typename?: 'Article';
  body: Scalars['String']['output'];
  isFavorite: Scalars['Boolean']['output'];
  publishedAt: Scalars['String']['output'];
  slug: Scalars['String']['output'];
  tags: Array<Tag>;
  title: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
  year: Scalars['Int']['output'];
};

export type Query = {
  __typename?: 'Query';
  articles: Array<Article>;
  sitedata: Sitedata;
  tags: Array<Tag>;
};

export type Sitedata = {
  __typename?: 'Sitedata';
  profile: Scalars['String']['output'];
  shortProfile: Scalars['String']['output'];
};

export type Tag = {
  __typename?: 'Tag';
  name: Scalars['String']['output'];
  slug: Scalars['String']['output'];
};

export type AllQueryVariables = Exact<{ [key: string]: never; }>;


export type AllQuery = { __typename?: 'Query', articles: Array<{ __typename?: 'Article', slug: string, title: string, publishedAt: string, updatedAt: string, body: string, tags: Array<{ __typename?: 'Tag', slug: string, name: string }> }>, tags: Array<{ __typename?: 'Tag', slug: string, name: string }>, sitedata: { __typename?: 'Sitedata', profile: string, shortProfile: string } };


export const AllDocument = gql`
    query all {
  articles {
    slug
    title
    publishedAt
    updatedAt
    tags {
      slug
      name
    }
    body
  }
  tags {
    slug
    name
  }
  sitedata {
    profile
    shortProfile
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    all(variables?: AllQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<AllQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<AllQuery>(AllDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'all', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;