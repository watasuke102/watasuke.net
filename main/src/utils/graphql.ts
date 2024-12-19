import { GraphQLClient, RequestOptions } from 'graphql-request';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
type GraphQLClientRequestHeaders = RequestOptions['requestHeaders'];
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
  isPublished: Scalars['Boolean']['output'];
  publishedAt: Scalars['String']['output'];
  slug: Scalars['String']['output'];
  tags: Array<Tag>;
  title: Scalars['String']['output'];
  tldr: Scalars['String']['output'];
  tldrReal?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  newArticle: Scalars['String']['output'];
  newTag: Scalars['String']['output'];
  publishArticle: Scalars['String']['output'];
  renewArticle: Scalars['String']['output'];
  renewProfile: Scalars['String']['output'];
  updateArticle: Scalars['String']['output'];
  updateProfile: Scalars['String']['output'];
};


export type MutationNewArticleArgs = {
  slug: Scalars['String']['input'];
  title: Scalars['String']['input'];
};


export type MutationNewTagArgs = {
  slug: Scalars['String']['input'];
  title: Scalars['String']['input'];
};


export type MutationPublishArticleArgs = {
  shouldCommitAndPush: Scalars['Boolean']['input'];
  slug: Scalars['String']['input'];
};


export type MutationRenewArticleArgs = {
  commitMessage: Scalars['String']['input'];
  slug: Scalars['String']['input'];
};


export type MutationRenewProfileArgs = {
  commitMessage: Scalars['String']['input'];
};


export type MutationUpdateArticleArgs = {
  body: Scalars['String']['input'];
  isFavorite: Scalars['Boolean']['input'];
  slug: Scalars['String']['input'];
  tags: Array<Scalars['String']['input']>;
  title: Scalars['String']['input'];
  tldr: Scalars['String']['input'];
};


export type MutationUpdateProfileArgs = {
  profile: Scalars['String']['input'];
};

export type Query = {
  __typename?: 'Query';
  allArticles: Array<Article>;
  allPublicArticles: Array<Article>;
  allTags: Array<Tag>;
  article?: Maybe<Article>;
  contentsGitHeadHash: Scalars['String']['output'];
  sitedata: Sitedata;
};


export type QueryArticleArgs = {
  slug: Scalars['String']['input'];
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

export type AllArticlesQueryVariables = Exact<{ [key: string]: never; }>;


export type AllArticlesQuery = { __typename?: 'Query', allPublicArticles: Array<{ __typename?: 'Article', slug: string, title: string, tldr: string, isFavorite: boolean, publishedAt: string, updatedAt: string, tags: Array<{ __typename?: 'Tag', slug: string, name: string }> }> };

export type AllTagsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllTagsQuery = { __typename?: 'Query', allTags: Array<{ __typename?: 'Tag', slug: string, name: string }> };

export type ContentsGitHashQueryVariables = Exact<{ [key: string]: never; }>;


export type ContentsGitHashQuery = { __typename?: 'Query', contentsGitHeadHash: string };

export type ArticleMeadataQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type ArticleMeadataQuery = { __typename?: 'Query', article?: { __typename?: 'Article', title: string, tldr: string } | null };

export type ArticleQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type ArticleQuery = { __typename?: 'Query', article?: { __typename?: 'Article', slug: string, title: string, tldr: string, tldrReal?: string | null, publishedAt: string, updatedAt: string, isFavorite: boolean, isPublished: boolean, body: string, tags: Array<{ __typename?: 'Tag', slug: string, name: string }> } | null, allTags: Array<{ __typename?: 'Tag', slug: string, name: string }> };


export const AllArticlesDocument = gql`
    query allArticles {
  allPublicArticles {
    slug
    title
    tldr
    isFavorite
    publishedAt
    updatedAt
    tags {
      slug
      name
    }
  }
}
    `;
export const AllTagsDocument = gql`
    query allTags {
  allTags {
    slug
    name
  }
}
    `;
export const ContentsGitHashDocument = gql`
    query contentsGitHash {
  contentsGitHeadHash
}
    `;
export const ArticleMeadataDocument = gql`
    query articleMeadata($slug: String!) {
  article(slug: $slug) {
    title
    tldr
  }
}
    `;
export const ArticleDocument = gql`
    query article($slug: String!) {
  article(slug: $slug) {
    slug
    title
    tldr
    tldrReal
    publishedAt
    updatedAt
    isFavorite
    isPublished
    tags {
      slug
      name
    }
    body
  }
  allTags {
    slug
    name
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string, variables?: any) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, _variables) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    allArticles(variables?: AllArticlesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<AllArticlesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<AllArticlesQuery>(AllArticlesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'allArticles', 'query', variables);
    },
    allTags(variables?: AllTagsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<AllTagsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<AllTagsQuery>(AllTagsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'allTags', 'query', variables);
    },
    contentsGitHash(variables?: ContentsGitHashQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ContentsGitHashQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ContentsGitHashQuery>(ContentsGitHashDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'contentsGitHash', 'query', variables);
    },
    articleMeadata(variables: ArticleMeadataQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ArticleMeadataQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ArticleMeadataQuery>(ArticleMeadataDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'articleMeadata', 'query', variables);
    },
    article(variables: ArticleQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ArticleQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ArticleQuery>(ArticleDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'article', 'query', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;