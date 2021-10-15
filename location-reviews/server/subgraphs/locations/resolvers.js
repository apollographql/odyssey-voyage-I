const resolvers = {
  Query: {
    locations() {
      return [
        { id: 1, name: 'planet', description: 'hello', photo: 'https://source.unsplash.com/featured/?space' },
        { id: 2, name: 'planet', description: 'hello', photo: 'https://source.unsplash.com/featured/?space' },
      ];
    },
    location(_, { id }) {
      return { id, name: 'planet', description: 'hello', photo: 'https://source.unsplash.com/featured/?space' };
    },
  },
  Location: {
    __resolveReference(parent, args) {
      return { id: 1, name: 'planet', description: 'hello', photo: 'https://source.unsplash.com/featured/?space' };
    },
  },
};
module.exports = resolvers;
