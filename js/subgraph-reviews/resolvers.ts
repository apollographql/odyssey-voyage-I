import { GraphQLResolverMap } from '@apollo/subgraph/dist/schema-helper';

import { Context } from './Context';
import { ReviewData } from './datasources';

const resolvers: GraphQLResolverMap<Context> = {
  Query: {
    latestReviews: (_, __, { dataSources }) => {
      return dataSources.reviewsAPI.getLatestReviews();
    },
  },
  Mutation: {
    submitReview: (_, { locationReview }, { dataSources }) => {
      const newReview =
        dataSources.reviewsAPI.submitReviewForLocation(locationReview);
      return {
        code: 200,
        success: true,
        message: 'success',
        locationReview: newReview,
      };
    },
  },
  Location: {
    overallRating: ({ id }, _, { dataSources }) => {
      return dataSources.reviewsAPI.getOverallRatingForLocation(id);
    },
    reviewsForLocation: ({ id }, _, { dataSources }) => {
      return dataSources.reviewsAPI.getReviewsForLocation(id);
    },
  },
  Review: {
    location: (review: ReviewData) => {
      const locationId = review.locationId;
      return { id: locationId, reviewsForLocation: [] };
    },
  },
};

export default resolvers;
