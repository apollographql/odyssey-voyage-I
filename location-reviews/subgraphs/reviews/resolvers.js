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
};
module.exports = resolvers;
