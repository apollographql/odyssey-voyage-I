const resolvers = {
  Query: {
    latestReviews: (_, __, { dataSources }) => {
      return dataSources.reviewsAPI.getLatestReviews();
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
    location: ({ locationId }) => {
      return { id: locationId };
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
};

module.exports = resolvers;
