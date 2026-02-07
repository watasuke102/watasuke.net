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


export type QueryAllPublicArticlesArgs = {
  filter?: InputMaybe<ArticleFilter>;
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

export type IndexPageQueryVariables = Exact<{ [key: string]: never; }>;


export type IndexPageQuery = { __typename?: 'Query', allArticles: Array<{ __typename?: 'Article', slug: string, title: string, isFavorite: boolean, publishedAt: string, updatedAt: string, isPublished: boolean }>, allMonthlies: Array<{ __typename?: 'Monthly', year: number, month: number, updatedAt: string, publishedAt: string }> };

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

export type MonthlyEditPageQueryVariables = Exact<{
  year: Scalars['Int']['input'];
  month: Scalars['Int']['input'];
}>;


export type MonthlyEditPageQuery = { __typename?: 'Query', monthly?: { __typename?: 'Monthly', year: number, month: number, tldr: string, body: string, updatedAt: string, publishedAt: string } | null };

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

export type NewMonthlyMutationVariables = Exact<{
  year: Scalars['Int']['input'];
  month: Scalars['Int']['input'];
}>;


export type NewMonthlyMutation = { __typename?: 'Mutation', newMonthly: string };

export type UpdateMonthlyMutationVariables = Exact<{
  year: Scalars['Int']['input'];
  month: Scalars['Int']['input'];
  tldr: Scalars['String']['input'];
  body: Scalars['String']['input'];
}>;


export type UpdateMonthlyMutation = { __typename?: 'Mutation', updateMonthly: string };

export type PublishMonthlyMutationVariables = Exact<{
  year: Scalars['Int']['input'];
  month: Scalars['Int']['input'];
  should_commit_and_push: Scalars['Boolean']['input'];
}>;


export type PublishMonthlyMutation = { __typename?: 'Mutation', publishMonthly: string };

export type RenewMonthlyMutationVariables = Exact<{
  year: Scalars['Int']['input'];
  month: Scalars['Int']['input'];
  commit_message: Scalars['String']['input'];
}>;


export type RenewMonthlyMutation = { __typename?: 'Mutation', renewMonthly: string };

export type UpdateProfileMutationVariables = Exact<{
  profile: Scalars['String']['input'];
}>;


export type UpdateProfileMutation = { __typename?: 'Mutation', updateProfile: string };

export type RenewProfileMutationVariables = Exact<{
  commit_message: Scalars['String']['input'];
}>;


export type RenewProfileMutation = { __typename?: 'Mutation', renewProfile: string };


export const IndexPageDocument = gql`
    query indexPage {
  allArticles {
    slug
    title
    isFavorite
    publishedAt
    updatedAt
    isPublished
  }
  allMonthlies {
    year
    month
    updatedAt
    publishedAt
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
export const MonthlyEditPageDocument = gql`
    query monthlyEditPage($year: Int!, $month: Int!) {
  monthly(year: $year, month: $month) {
    year
    month
    tldr
    body
    updatedAt
    publishedAt
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
export const NewMonthlyDocument = gql`
    mutation newMonthly($year: Int!, $month: Int!) {
  newMonthly(year: $year, month: $month)
}
    `;
export const UpdateMonthlyDocument = gql`
    mutation updateMonthly($year: Int!, $month: Int!, $tldr: String!, $body: String!) {
  updateMonthly(year: $year, month: $month, tldr: $tldr, body: $body)
}
    `;
export const PublishMonthlyDocument = gql`
    mutation publishMonthly($year: Int!, $month: Int!, $should_commit_and_push: Boolean!) {
  publishMonthly(
    year: $year
    month: $month
    shouldCommitAndPush: $should_commit_and_push
  )
}
    `;
export const RenewMonthlyDocument = gql`
    mutation renewMonthly($year: Int!, $month: Int!, $commit_message: String!) {
  renewMonthly(year: $year, month: $month, commitMessage: $commit_message)
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
    indexPage(variables?: IndexPageQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<IndexPageQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<IndexPageQuery>({ document: IndexPageDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'indexPage', 'query', variables);
    },
    articleEditPage(variables: ArticleEditPageQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<ArticleEditPageQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ArticleEditPageQuery>({ document: ArticleEditPageDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'articleEditPage', 'query', variables);
    },
    articlePreviewPage(variables: ArticlePreviewPageQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<ArticlePreviewPageQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ArticlePreviewPageQuery>({ document: ArticlePreviewPageDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'articlePreviewPage', 'query', variables);
    },
    allTags(variables?: AllTagsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<AllTagsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<AllTagsQuery>({ document: AllTagsDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'allTags', 'query', variables);
    },
    monthlyEditPage(variables: MonthlyEditPageQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<MonthlyEditPageQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<MonthlyEditPageQuery>({ document: MonthlyEditPageDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'monthlyEditPage', 'query', variables);
    },
    profile(variables?: ProfileQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<ProfileQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ProfileQuery>({ document: ProfileDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'profile', 'query', variables);
    },
    newTag(variables: NewTagMutationVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<NewTagMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<NewTagMutation>({ document: NewTagDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'newTag', 'mutation', variables);
    },
    newArticle(variables: NewArticleMutationVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<NewArticleMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<NewArticleMutation>({ document: NewArticleDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'newArticle', 'mutation', variables);
    },
    updateArticle(variables: UpdateArticleMutationVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<UpdateArticleMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdateArticleMutation>({ document: UpdateArticleDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'updateArticle', 'mutation', variables);
    },
    publishArticle(variables: PublishArticleMutationVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<PublishArticleMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<PublishArticleMutation>({ document: PublishArticleDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'publishArticle', 'mutation', variables);
    },
    renewArticle(variables: RenewArticleMutationVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<RenewArticleMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<RenewArticleMutation>({ document: RenewArticleDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'renewArticle', 'mutation', variables);
    },
    newMonthly(variables: NewMonthlyMutationVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<NewMonthlyMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<NewMonthlyMutation>({ document: NewMonthlyDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'newMonthly', 'mutation', variables);
    },
    updateMonthly(variables: UpdateMonthlyMutationVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<UpdateMonthlyMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdateMonthlyMutation>({ document: UpdateMonthlyDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'updateMonthly', 'mutation', variables);
    },
    publishMonthly(variables: PublishMonthlyMutationVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<PublishMonthlyMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<PublishMonthlyMutation>({ document: PublishMonthlyDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'publishMonthly', 'mutation', variables);
    },
    renewMonthly(variables: RenewMonthlyMutationVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<RenewMonthlyMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<RenewMonthlyMutation>({ document: RenewMonthlyDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'renewMonthly', 'mutation', variables);
    },
    updateProfile(variables: UpdateProfileMutationVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<UpdateProfileMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdateProfileMutation>({ document: UpdateProfileDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'updateProfile', 'mutation', variables);
    },
    renewProfile(variables: RenewProfileMutationVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<RenewProfileMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<RenewProfileMutation>({ document: RenewProfileDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'renewProfile', 'mutation', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;