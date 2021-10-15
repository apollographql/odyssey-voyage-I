const resolvers = {
  Query: {
    locations() {
      return [
        { id: 1, name: 'planet', description: 'hello', photo: 'url' },
        { id: 2, name: 'planet', description: 'hello', photo: 'url' },
      ];
    },
    location(_, { id }) {
      return { id, name: 'planet', description: 'hello', photo: 'url' };
    },
  },
  Location: {
    __resolveReference(parent, args) {
      return { id: 1, name: 'planet', description: 'hello', photo: 'url' };
    },
  },
};
module.exports = resolvers;
