let reviews = [
  { id: 1, rating: 5, comment: 'hello location1', locationId: '1' },
  { id: 2, rating: 2, comment: 'hellooooo', locationId: '1' },
  { id: 3, rating: 3, comment: 'hi', locationId: '1' },
];

const resolvers = {
  Review: {
    __resolveReference({ id }) {
      return reviews.find((r) => r.id === id);
    },
  },
  Location: {
    overallRating() {
      return 3;
    },
    reviews({ id }) {
      return reviews.filter((r) => r.locationId === id);
    },
  },
  Mutation: {
    review() {
      return {}; // why do we need to return something here?
    },
  },
  ReviewMutation: {
    submitReview(_, { review }) {
      const newReview = { id: reviews.length + 1, ...review };
      reviews = [...reviews, newReview];
      return { code: 200, success: true, message: 'success', review: newReview };
    },
  },
};
module.exports = resolvers;
