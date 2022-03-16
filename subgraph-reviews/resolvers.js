const resolvers = {
  Query: {
    latestReviews: (_, __, {dataSources}) => {
      return dataSources.reviewsAPI.getLatestReviews();
    }
  },
  Review: {
    location: ({locationId}) => {
      return {id: locationId};
    }
  },
  Location: {
    overallRating: ({id}, _, {dataSources}) => {
      return dataSources.reviewsAPI.getOverallRatingForLocation(id);
    },
    reviews: ({id}, _, {dataSources}) => {
      return dataSources.reviewsAPI.getReviewsForLocation(id);
    }
  },
  Activity: {
    overallRating: ({id}, _, {dataSources}) => {
      return dataSources.reviewsAPI.getOverallRatingForActivity(id);
    },
    reviews: ({id}, _, {dataSources}) => {
      return dataSources.reviewsAPI.getReviewsForActivity(id);
    }
  },
  Review: {
    attraction: (review) => {
      if (review.locationId) {
        return { __typename: 'Location', id: review.locationId }
      } else if (review.activityId) {
        return { __typename: 'Activity', id: review.activityId }
      }
      return null
    }
  },
  Mutation: {
    submitReview: (_, {review}, {dataSources}) => {
      const newReview = dataSources.reviewsAPI.submitReviewForLocation(review);
      return {code: 200, success: true, message: 'success', review: newReview};
    }
  }
};

module.exports = resolvers;
