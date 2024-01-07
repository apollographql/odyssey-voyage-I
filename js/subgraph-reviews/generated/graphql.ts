import { GraphQLResolveInfo } from 'graphql';
import gql from 'graphql-tag';

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
};

export type Location = {
  __typename?: 'Location';
  id: Scalars['ID']['output'];
  /** The calculated overall rating based on all reviews */
  overallRating?: Maybe<Scalars['Float']['output']>;
  /** All submitted reviews about this location */
  reviewsForLocation: Array<Maybe<Review>>;
};

export type LocationReviewInput = {
  /** Written text */
  comment: Scalars['String']['input'];
  /** Location Id */
  locationId: Scalars['String']['input'];
  /** A number from 1 - 5 with 1 being lowest and 5 being highest */
  rating: Scalars['Int']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  submitReview?: Maybe<SubmitReviewResponse>;
};

export type MutationSubmitReviewArgs = {
  locationReview?: InputMaybe<LocationReviewInput>;
};

export type Query = {
  __typename?: 'Query';
  /** The three latest reviews submitted for FlyBy's locations */
  latestReviews: Array<Review>;
};

export type Review = {
  __typename?: 'Review';
  /** Written text */
  comment?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  /** The location the review is about */
  location?: Maybe<Location>;
  /** A number from 1 - 5 with 1 being lowest and 5 being highest */
  rating?: Maybe<Scalars['Int']['output']>;
};

export type SubmitReviewResponse = {
  __typename?: 'SubmitReviewResponse';
  /** Similar to HTTP status code, represents the status of the mutation */
  code: Scalars['Int']['output'];
  /** Newly created review */
  locationReview?: Maybe<Review>;
  /** Human-readable message for the UI */
  message: Scalars['String']['output'];
  /** Indicates whether the mutation was successful */
  success: Scalars['Boolean']['output'];
};

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> {
  subscribe: SubscriptionSubscribeFn<
    { [key in TKey]: TResult },
    TParent,
    TContext,
    TArgs
  >;
  resolve?: SubscriptionResolveFn<
    TResult,
    { [key in TKey]: TResult },
    TContext,
    TArgs
  >;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {}
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {}
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Location: ResolverTypeWrapper<Location>;
  LocationReviewInput: LocationReviewInput;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  Review: ResolverTypeWrapper<Review>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  SubmitReviewResponse: ResolverTypeWrapper<SubmitReviewResponse>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean']['output'];
  Float: Scalars['Float']['output'];
  ID: Scalars['ID']['output'];
  Int: Scalars['Int']['output'];
  Location: Location;
  LocationReviewInput: LocationReviewInput;
  Mutation: {};
  Query: {};
  Review: Review;
  String: Scalars['String']['output'];
  SubmitReviewResponse: SubmitReviewResponse;
};

export type LocationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Location'] = ResolversParentTypes['Location']
> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  overallRating?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType
  >;
  reviewsForLocation?: Resolver<
    Array<Maybe<ResolversTypes['Review']>>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']
> = {
  submitReview?: Resolver<
    Maybe<ResolversTypes['SubmitReviewResponse']>,
    ParentType,
    ContextType,
    Partial<MutationSubmitReviewArgs>
  >;
};

export type QueryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']
> = {
  latestReviews?: Resolver<
    Array<ResolversTypes['Review']>,
    ParentType,
    ContextType
  >;
};

export type ReviewResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Review'] = ResolversParentTypes['Review']
> = {
  comment?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  location?: Resolver<
    Maybe<ResolversTypes['Location']>,
    ParentType,
    ContextType
  >;
  rating?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SubmitReviewResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['SubmitReviewResponse'] = ResolversParentTypes['SubmitReviewResponse']
> = {
  code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  locationReview?: Resolver<
    Maybe<ResolversTypes['Review']>,
    ParentType,
    ContextType
  >;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Location?: LocationResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Review?: ReviewResolvers<ContextType>;
  SubmitReviewResponse?: SubmitReviewResponseResolvers<ContextType>;
};
