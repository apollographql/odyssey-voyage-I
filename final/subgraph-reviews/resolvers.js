const resolvers = {
  Query: {
    latestReviews(_, __, {dataSources}) {
      return dataSources.reviewsAPI.getLatestReviews();
    }
  },
  Review: {
    location({locationId}) {
      return {id: locationId};
    }
  },
  Location: {
    overallRating({id}, _, {dataSources}) {
      return dataSources.reviewsAPI.getOverallRatingForLocation(id);
    },
    reviews({id}, _, {dataSources}) {
      return dataSources.reviewsAPI.getReviewsForLocation(id);
    }
  },
  Mutation: {
    submitReview(_, {locationReview}, {dataSources}) {
      const newReview = dataSources.reviewsAPI.submitReviewForLocation(locationReview);
      return {code: 200, success: true, message: 'success', locationReview: newReview};
    }
  }
};

module.exports = resolvers;
