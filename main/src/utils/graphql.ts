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

export type Monthly = {
  __typename?: 'Monthly';
  body: Scalars['String']['output'];
  month: Scalars['Int']['output'];
  publishedAt: Scalars['String']['output'];
  tldr: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
  year: Scalars['Int']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  newArticle: Scalars['String']['output'];
  newMonthly: Scalars['String']['output'];
  newTag: Scalars['String']['output'];
  publishArticle: Scalars['String']['output'];
  publishMonthly: Scalars['String']['output'];
  renewArticle: Scalars['String']['output'];
  renewMonthly: Scalars['String']['output'];
  renewProfile: Scalars['String']['output'];
  updateArticle: Scalars['String']['output'];
  updateMonthly: Scalars['String']['output'];
  updateProfile: Scalars['String']['output'];
};


export type MutationNewArticleArgs = {
  slug: Scalars['String']['input'];
  title: Scalars['String']['input'];
};


export type MutationNewMonthlyArgs = {
  month: Scalars['Int']['input'];
  year: Scalars['Int']['input'];
};


export type MutationNewTagArgs = {
  slug: Scalars['String']['input'];
  title: Scalars['String']['input'];
};


export type MutationPublishArticleArgs = {
  shouldCommitAndPush: Scalars['Boolean']['input'];
  slug: Scalars['String']['input'];
};


export type MutationPublishMonthlyArgs = {
  month: Scalars['Int']['input'];
  shouldCommitAndPush: Scalars['Boolean']['input'];
  year: Scalars['Int']['input'];
};


export type MutationRenewArticleArgs = {
  commitMessage: Scalars['String']['input'];
  slug: Scalars['String']['input'];
};


export type MutationRenewMonthlyArgs = {
  commitMessage: Scalars['String']['input'];
  month: Scalars['Int']['input'];
  year: Scalars['Int']['input'];
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


export type MutationUpdateMonthlyArgs = {
  body: Scalars['String']['input'];
  month: Scalars['Int']['input'];
  tldr: Scalars['String']['input'];
  year: Scalars['Int']['input'];
};


export type MutationUpdateProfileArgs = {
  profile: Scalars['String']['input'];
};

export type Neighbor = {
  __typename?: 'Neighbor';
  newer?: Maybe<Article>;
  older?: Maybe<Article>;
};

export type Query = {
  __typename?: 'Query';
  allArticles: Array<Article>;
  allMonthlies: Array<Monthly>;
  allPublicArticles: Array<Article>;
  allPublicMonthlies: Array<Monthly>;
  allTags: Array<Tag>;
  article?: Maybe<Article>;
  contentsGitHeadHash: Scalars['String']['output'];
  monthly?: Maybe<Monthly>;
  neighbors: Neighbor;
  sitedata: Sitedata;
  tag?: Maybe<Tag>;
};


export type QueryAllArticlesArgs = {
  filter?: InputMaybe<ArticleFilter>;
};


export type QueryAllMonthliesArgs = {
  year?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryAllPublicArticlesArgs = {
  filter?: InputMaybe<ArticleFilter>;
};


export type QueryAllPublicMonthliesArgs = {
  year?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryArticleArgs = {
  slug: Scalars['String']['input'];
};


export type QueryMonthlyArgs = {
  month: Scalars['Int']['input'];
  year: Scalars['Int']['input'];
};


export type QueryNeighborsArgs = {
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

export type ArticleForArticlePageQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type ArticleForArticlePageQuery = { __typename?: 'Query', article?: { __typename?: 'Article', slug: string, title: string, publishedAt: string, updatedAt: string, body: string, tags: Array<{ __typename?: 'Tag', slug: string, name: string }> } | null, neighbors: { __typename?: 'Neighbor', older?: { __typename?: 'Article', slug: string, title: string } | null, newer?: { __typename?: 'Article', slug: string, title: string } | null } };

export type ArticleForInnerEmbedQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type ArticleForInnerEmbedQuery = { __typename?: 'Query', article?: { __typename?: 'Article', title: string, tldr: string } | null };

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

export type AllMonthliesQueryVariables = Exact<{ [key: string]: never; }>;


export type AllMonthliesQuery = { __typename?: 'Query', allPublicMonthlies: Array<{ __typename?: 'Monthly', year: number, month: number, tldr: string }> };

export type MonthlyPageQueryVariables = Exact<{
  year: Scalars['Int']['input'];
  month: Scalars['Int']['input'];
}>;


export type MonthlyPageQuery = { __typename?: 'Query', monthly?: { __typename?: 'Monthly', year: number, month: number, tldr: string, body: string } | null, allPublicMonthlies: Array<{ __typename?: 'Monthly', month: number }> };

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
export const ArticleForArticlePageDocument = gql`
    query articleForArticlePage($slug: String!) {
  article(slug: $slug) {
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
  neighbors(slug: $slug) {
    older {
      slug
      title
    }
    newer {
      slug
      title
    }
  }
}
    `;
export const ArticleForInnerEmbedDocument = gql`
    query articleForInnerEmbed($slug: String!) {
  article(slug: $slug) {
    title
    tldr
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
export const AllMonthliesDocument = gql`
    query allMonthlies {
  allPublicMonthlies {
    year
    month
    tldr
  }
}
    `;
export const MonthlyPageDocument = gql`
    query monthlyPage($year: Int!, $month: Int!) {
  monthly(year: $year, month: $month) {
    year
    month
    tldr
    body
  }
  allPublicMonthlies(year: $year) {
    month
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
    allArticles(variables?: AllArticlesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<AllArticlesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<AllArticlesQuery>({ document: AllArticlesDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'allArticles', 'query', variables);
    },
    allFavoriteArticles(variables?: AllFavoriteArticlesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<AllFavoriteArticlesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<AllFavoriteArticlesQuery>({ document: AllFavoriteArticlesDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'allFavoriteArticles', 'query', variables);
    },
    allArticleSlugs(variables?: AllArticleSlugsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<AllArticleSlugsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<AllArticleSlugsQuery>({ document: AllArticleSlugsDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'allArticleSlugs', 'query', variables);
    },
    articleForArticlePage(variables: ArticleForArticlePageQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<ArticleForArticlePageQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ArticleForArticlePageQuery>({ document: ArticleForArticlePageDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'articleForArticlePage', 'query', variables);
    },
    articleForInnerEmbed(variables: ArticleForInnerEmbedQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<ArticleForInnerEmbedQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ArticleForInnerEmbedQuery>({ document: ArticleForInnerEmbedDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'articleForInnerEmbed', 'query', variables);
    },
    articlesWithTag(variables: ArticlesWithTagQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<ArticlesWithTagQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ArticlesWithTagQuery>({ document: ArticlesWithTagDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'articlesWithTag', 'query', variables);
    },
    articleMeadata(variables: ArticleMeadataQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<ArticleMeadataQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ArticleMeadataQuery>({ document: ArticleMeadataDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'articleMeadata', 'query', variables);
    },
    allTags(variables?: AllTagsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<AllTagsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<AllTagsQuery>({ document: AllTagsDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'allTags', 'query', variables);
    },
    allTagSlugs(variables?: AllTagSlugsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<AllTagSlugsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<AllTagSlugsQuery>({ document: AllTagSlugsDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'allTagSlugs', 'query', variables);
    },
    tag(variables: TagQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<TagQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<TagQuery>({ document: TagDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'tag', 'query', variables);
    },
    allMonthlies(variables?: AllMonthliesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<AllMonthliesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<AllMonthliesQuery>({ document: AllMonthliesDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'allMonthlies', 'query', variables);
    },
    monthlyPage(variables: MonthlyPageQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<MonthlyPageQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<MonthlyPageQuery>({ document: MonthlyPageDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'monthlyPage', 'query', variables);
    },
    sitemapInfo(variables?: SitemapInfoQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<SitemapInfoQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<SitemapInfoQuery>({ document: SitemapInfoDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'sitemapInfo', 'query', variables);
    },
    contentsGitHash(variables?: ContentsGitHashQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<ContentsGitHashQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ContentsGitHashQuery>({ document: ContentsGitHashDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'contentsGitHash', 'query', variables);
    },
    shortProfile(variables?: ShortProfileQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<ShortProfileQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ShortProfileQuery>({ document: ShortProfileDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'shortProfile', 'query', variables);
    },
    profile(variables?: ProfileQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<ProfileQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ProfileQuery>({ document: ProfileDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'profile', 'query', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;