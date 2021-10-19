const resolvers = {
  Query: {
    locations(_, __, { dataSources }) {
      return dataSources.locationsAPI.getAllLocations();
    },
    location(_, { id }, { dataSources }) {
      return dataSources.locationsAPI.getLocation(id);
    },
  },
  Location: {
    __resolveReference({ id }, _, { dataSources }) {
      return dataSources.locationsAPI.getLocation(id);
    },
  },
};
module.exports = resolvers;
