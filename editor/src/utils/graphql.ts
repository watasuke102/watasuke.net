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

export type Neighbor = {
  __typename?: 'Neighbor';
  newer?: Maybe<Article>;
  older?: Maybe<Article>;
};

export type Query = {
  __typename?: 'Query';
  allArticles: Array<Article>;
  allPublicArticles: Array<Article>;
  allTags: Array<Tag>;
  article?: Maybe<Article>;
  contentsGitHeadHash: Scalars['String']['output'];
  neighbors: Neighbor;
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


export type AllArticlesQuery = { __typename?: 'Query', allArticles: Array<{ __typename?: 'Article', slug: string, title: string, isFavorite: boolean, publishedAt: string, updatedAt: string, isPublished: boolean }> };

export type ArticleEditPageQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type ArticleEditPageQuery = { __typename?: 'Query', article?: { __typename?: 'Article', slug: string, title: string, tldr: string, tldrReal?: string | null, publishedAt: string, updatedAt: string, isFavorite: boolean, isPublished: boolean, body: string, tags: Array<{ __typename?: 'Tag', slug: string, name: string }> } | null, allTags: Array<{ __typename?: 'Tag', slug: string, name: string }> };

export type ArticlePreviewPageQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type ArticlePreviewPageQuery = { __typename?: 'Query', article?: { __typename?: 'Article', slug: string, title: string, body: string } | null };

export type AllTagsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllTagsQuery = { __typename?: 'Query', allTags: Array<{ __typename?: 'Tag', slug: string, name: string }> };

export type ProfileQueryVariables = Exact<{ [key: string]: never; }>;


export type ProfileQuery = { __typename?: 'Query', sitedata: { __typename?: 'Sitedata', profile: string } };

export type NewTagMutationVariables = Exact<{
  slug: Scalars['String']['input'];
  title: Scalars['String']['input'];
}>;


export type NewTagMutation = { __typename?: 'Mutation', newTag: string };

export type NewArticleMutationVariables = Exact<{
  slug: Scalars['String']['input'];
  title: Scalars['String']['input'];
}>;


export type NewArticleMutation = { __typename?: 'Mutation', newArticle: string };

export type UpdateArticleMutationVariables = Exact<{
  slug: Scalars['String']['input'];
  title: Scalars['String']['input'];
  tldr: Scalars['String']['input'];
  tags: Array<Scalars['String']['input']> | Scalars['String']['input'];
  isFavorite: Scalars['Boolean']['input'];
  body: Scalars['String']['input'];
}>;


export type UpdateArticleMutation = { __typename?: 'Mutation', updateArticle: string };

export type PublishArticleMutationVariables = Exact<{
  slug: Scalars['String']['input'];
  should_commit_and_push: Scalars['Boolean']['input'];
}>;


export type PublishArticleMutation = { __typename?: 'Mutation', publishArticle: string };

export type RenewArticleMutationVariables = Exact<{
  slug: Scalars['String']['input'];
  commit_message: Scalars['String']['input'];
}>;


export type RenewArticleMutation = { __typename?: 'Mutation', renewArticle: string };

export type UpdateProfileMutationVariables = Exact<{
  profile: Scalars['String']['input'];
}>;


export type UpdateProfileMutation = { __typename?: 'Mutation', updateProfile: string };

export type RenewProfileMutationVariables = Exact<{
  commit_message: Scalars['String']['input'];
}>;


export type RenewProfileMutation = { __typename?: 'Mutation', renewProfile: string };


export const AllArticlesDocument = gql`
    query allArticles {
  allArticles {
    slug
    title
    isFavorite
    publishedAt
    updatedAt
    isPublished
  }
}
    `;
export const ArticleEditPageDocument = gql`
    query articleEditPage($slug: String!) {
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
export const ArticlePreviewPageDocument = gql`
    query articlePreviewPage($slug: String!) {
  article(slug: $slug) {
    slug
    title
    body
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
export const ProfileDocument = gql`
    query profile {
  sitedata {
    profile
  }
}
    `;
export const NewTagDocument = gql`
    mutation newTag($slug: String!, $title: String!) {
  newTag(slug: $slug, title: $title)
}
    `;
export const NewArticleDocument = gql`
    mutation newArticle($slug: String!, $title: String!) {
  newArticle(slug: $slug, title: $title)
}
    `;
export const UpdateArticleDocument = gql`
    mutation updateArticle($slug: String!, $title: String!, $tldr: String!, $tags: [String!]!, $isFavorite: Boolean!, $body: String!) {
  updateArticle(
    slug: $slug
    title: $title
    tldr: $tldr
    tags: $tags
    isFavorite: $isFavorite
    body: $body
  )
}
    `;
export const PublishArticleDocument = gql`
    mutation publishArticle($slug: String!, $should_commit_and_push: Boolean!) {
  publishArticle(slug: $slug, shouldCommitAndPush: $should_commit_and_push)
}
    `;
export const RenewArticleDocument = gql`
    mutation renewArticle($slug: String!, $commit_message: String!) {
  renewArticle(slug: $slug, commitMessage: $commit_message)
}
    `;
export const UpdateProfileDocument = gql`
    mutation updateProfile($profile: String!) {
  updateProfile(profile: $profile)
}
    `;
export const RenewProfileDocument = gql`
    mutation renewProfile($commit_message: String!) {
  renewProfile(commitMessage: $commit_message)
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string, variables?: any) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, _variables) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    allArticles(variables?: AllArticlesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<AllArticlesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<AllArticlesQuery>(AllArticlesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'allArticles', 'query', variables);
    },
    articleEditPage(variables: ArticleEditPageQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ArticleEditPageQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ArticleEditPageQuery>(ArticleEditPageDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'articleEditPage', 'query', variables);
    },
    articlePreviewPage(variables: ArticlePreviewPageQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ArticlePreviewPageQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ArticlePreviewPageQuery>(ArticlePreviewPageDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'articlePreviewPage', 'query', variables);
    },
    allTags(variables?: AllTagsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<AllTagsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<AllTagsQuery>(AllTagsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'allTags', 'query', variables);
    },
    profile(variables?: ProfileQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ProfileQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ProfileQuery>(ProfileDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'profile', 'query', variables);
    },
    newTag(variables: NewTagMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<NewTagMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<NewTagMutation>(NewTagDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'newTag', 'mutation', variables);
    },
    newArticle(variables: NewArticleMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<NewArticleMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<NewArticleMutation>(NewArticleDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'newArticle', 'mutation', variables);
    },
    updateArticle(variables: UpdateArticleMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<UpdateArticleMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdateArticleMutation>(UpdateArticleDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'updateArticle', 'mutation', variables);
    },
    publishArticle(variables: PublishArticleMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<PublishArticleMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<PublishArticleMutation>(PublishArticleDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'publishArticle', 'mutation', variables);
    },
    renewArticle(variables: RenewArticleMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<RenewArticleMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<RenewArticleMutation>(RenewArticleDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'renewArticle', 'mutation', variables);
    },
    updateProfile(variables: UpdateProfileMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<UpdateProfileMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdateProfileMutation>(UpdateProfileDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'updateProfile', 'mutation', variables);
    },
    renewProfile(variables: RenewProfileMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<RenewProfileMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<RenewProfileMutation>(RenewProfileDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'renewProfile', 'mutation', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;