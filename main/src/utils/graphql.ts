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

export type ArticleFilter = {
  isFavorite?: InputMaybe<Scalars['Boolean']['input']>;
  /** This fiels is slug[] which is used for OR search */
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
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
  tag?: Maybe<Tag>;
};


export type QueryAllArticlesArgs = {
  filter?: InputMaybe<ArticleFilter>;
};


export type QueryAllPublicArticlesArgs = {
  filter?: InputMaybe<ArticleFilter>;
};


export type QueryArticleArgs = {
  slug: Scalars['String']['input'];
};


export type QueryTagArgs = {
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

export type AllFavoriteArticlesQueryVariables = Exact<{ [key: string]: never; }>;


export type AllFavoriteArticlesQuery = { __typename?: 'Query', allPublicArticles: Array<{ __typename?: 'Article', slug: string, title: string, tldr: string, isFavorite: boolean, publishedAt: string, updatedAt: string, tags: Array<{ __typename?: 'Tag', slug: string, name: string }> }> };

export type AllArticleSlugsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllArticleSlugsQuery = { __typename?: 'Query', allPublicArticles: Array<{ __typename?: 'Article', slug: string }> };

export type ArticleQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type ArticleQuery = { __typename?: 'Query', article?: { __typename?: 'Article', slug: string, title: string, tldr: string, tldrReal?: string | null, publishedAt: string, updatedAt: string, isFavorite: boolean, isPublished: boolean, body: string, tags: Array<{ __typename?: 'Tag', slug: string, name: string }> } | null, allTags: Array<{ __typename?: 'Tag', slug: string, name: string }> };

export type ArticlesWithTagQueryVariables = Exact<{
  tagSlug: Scalars['String']['input'];
}>;


export type ArticlesWithTagQuery = { __typename?: 'Query', allPublicArticles: Array<{ __typename?: 'Article', slug: string, title: string, tldr: string, isFavorite: boolean, publishedAt: string, updatedAt: string, tags: Array<{ __typename?: 'Tag', slug: string, name: string }> }>, tag?: { __typename?: 'Tag', slug: string, name: string } | null };

export type ArticleMeadataQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type ArticleMeadataQuery = { __typename?: 'Query', article?: { __typename?: 'Article', title: string, tldr: string } | null };

export type AllTagsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllTagsQuery = { __typename?: 'Query', allTags: Array<{ __typename?: 'Tag', slug: string, name: string }> };

export type AllTagSlugsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllTagSlugsQuery = { __typename?: 'Query', allTags: Array<{ __typename?: 'Tag', slug: string }> };

export type TagQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type TagQuery = { __typename?: 'Query', tag?: { __typename?: 'Tag', slug: string, name: string } | null };

export type SitemapInfoQueryVariables = Exact<{ [key: string]: never; }>;


export type SitemapInfoQuery = { __typename?: 'Query', allPublicArticles: Array<{ __typename?: 'Article', slug: string, updatedAt: string }>, allTags: Array<{ __typename?: 'Tag', slug: string }> };

export type ContentsGitHashQueryVariables = Exact<{ [key: string]: never; }>;


export type ContentsGitHashQuery = { __typename?: 'Query', contentsGitHeadHash: string };

export type ShortProfileQueryVariables = Exact<{ [key: string]: never; }>;


export type ShortProfileQuery = { __typename?: 'Query', sitedata: { __typename?: 'Sitedata', shortProfile: string } };

export type ProfileQueryVariables = Exact<{ [key: string]: never; }>;


export type ProfileQuery = { __typename?: 'Query', sitedata: { __typename?: 'Sitedata', profile: string } };


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
export const AllFavoriteArticlesDocument = gql`
    query allFavoriteArticles {
  allPublicArticles(filter: {isFavorite: true}) {
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
export const AllArticleSlugsDocument = gql`
    query allArticleSlugs {
  allPublicArticles {
    slug
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
export const ArticlesWithTagDocument = gql`
    query articlesWithTag($tagSlug: String!) {
  allPublicArticles(filter: {tags: [$tagSlug]}) {
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
  tag(slug: $tagSlug) {
    slug
    name
  }
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
export const AllTagsDocument = gql`
    query allTags {
  allTags {
    slug
    name
  }
}
    `;
export const AllTagSlugsDocument = gql`
    query allTagSlugs {
  allTags {
    slug
  }
}
    `;
export const TagDocument = gql`
    query tag($slug: String!) {
  tag(slug: $slug) {
    slug
    name
  }
}
    `;
export const SitemapInfoDocument = gql`
    query sitemapInfo {
  allPublicArticles {
    slug
    updatedAt
  }
  allTags {
    slug
  }
}
    `;
export const ContentsGitHashDocument = gql`
    query contentsGitHash {
  contentsGitHeadHash
}
    `;
export const ShortProfileDocument = gql`
    query shortProfile {
  sitedata {
    shortProfile
  }
}
    `;
export const ProfileDocument = gql`
    query profile {
  sitedata {
    profile
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
    allFavoriteArticles(variables?: AllFavoriteArticlesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<AllFavoriteArticlesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<AllFavoriteArticlesQuery>(AllFavoriteArticlesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'allFavoriteArticles', 'query', variables);
    },
    allArticleSlugs(variables?: AllArticleSlugsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<AllArticleSlugsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<AllArticleSlugsQuery>(AllArticleSlugsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'allArticleSlugs', 'query', variables);
    },
    article(variables: ArticleQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ArticleQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ArticleQuery>(ArticleDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'article', 'query', variables);
    },
    articlesWithTag(variables: ArticlesWithTagQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ArticlesWithTagQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ArticlesWithTagQuery>(ArticlesWithTagDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'articlesWithTag', 'query', variables);
    },
    articleMeadata(variables: ArticleMeadataQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ArticleMeadataQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ArticleMeadataQuery>(ArticleMeadataDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'articleMeadata', 'query', variables);
    },
    allTags(variables?: AllTagsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<AllTagsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<AllTagsQuery>(AllTagsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'allTags', 'query', variables);
    },
    allTagSlugs(variables?: AllTagSlugsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<AllTagSlugsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<AllTagSlugsQuery>(AllTagSlugsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'allTagSlugs', 'query', variables);
    },
    tag(variables: TagQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<TagQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<TagQuery>(TagDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'tag', 'query', variables);
    },
    sitemapInfo(variables?: SitemapInfoQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<SitemapInfoQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<SitemapInfoQuery>(SitemapInfoDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'sitemapInfo', 'query', variables);
    },
    contentsGitHash(variables?: ContentsGitHashQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ContentsGitHashQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ContentsGitHashQuery>(ContentsGitHashDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'contentsGitHash', 'query', variables);
    },
    shortProfile(variables?: ShortProfileQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ShortProfileQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ShortProfileQuery>(ShortProfileDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'shortProfile', 'query', variables);
    },
    profile(variables?: ProfileQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ProfileQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ProfileQuery>(ProfileDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'profile', 'query', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;