const locations = [
  { id: '1', name: 'planet1', description: 'hello', photo: 'https://source.unsplash.com/featured/?space' },
  { id: '2', name: 'planet2', description: 'hello', photo: 'https://source.unsplash.com/featured/?space' },
];
const resolvers = {
  Query: {
    locations() {
      return locations;
    },
    location(_, { id }) {
      return locations.find((l) => l.id === id);
    },
  },
  Location: {
    __resolveReference({ id }, args) {
      return locations.find((l) => l.id === id);
    },
  },
};
module.exports = resolvers;
