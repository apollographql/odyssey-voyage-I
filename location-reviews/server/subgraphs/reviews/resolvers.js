const resolvers = {
  Review: {
    __resolveReference(parent, args) {
      return { id: 1, rating: 5, comment: 'hello world' };
    },
  },
  Location: {
    overallRating() {
      return 3;
    },
    reviews() {
      return [{ id: 1, rating: 5, comment: 'hello world' }];
    },
  },
  Mutation: {
    review() {
      return {}; // why do we need to return something here?
    },
  },
  ReviewMutation: {
    submitReview(_, { review }) {
      return { code: 200, success: true, message: 'success', review: { id: 1, ...review } };
    },
  },
};
module.exports = resolvers;
