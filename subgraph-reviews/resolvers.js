const resolvers = {
  Review: {
    __resolveReference({ id }, { dataSources }) {
      return dataSources.reviewsAPI.getReview(id);
    },
  },
  Location: {
    overallRating({ id }, _, { dataSources }) {
      return dataSources.reviewsAPI.getOverallRatingForLocation(id);
    },
    reviews({ id }, _, { dataSources }) {
      return dataSources.reviewsAPI.getReviewsForLocation(id);
    },
  },
  Mutation: {
    submitReview(_, { review }, { dataSources }) {
      const newReview = dataSources.reviewsAPI.submitReviewForLocation(review);
      return { code: 200, success: true, message: 'success', review: newReview };
    },
  },
};
module.exports = resolvers;
