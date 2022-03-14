const resolvers = {
  Query: {
    locations(_, __, {dataSources}) {
      return dataSources.locationsAPI.getAllLocations();
    },
    location(_, {id}, {dataSources}) {
      return dataSources.locationsAPI.getLocation(id);
    }
  },
  Location: {
    __resolveReference({id}, {dataSources}) {
      return dataSources.locationsAPI.getLocation(id);
    },
    stats({ id }, _, { dataSources }) {
      return dataSources.locationsAPI.getLocation(id)
    } 
  },
  ActivityStats: {
    lengthOfDay({ locationId }, _, { dataSources }) {
      const { lengthOfDay } =  dataSources.locationsAPI.getLocation(locationId)
      return lengthOfDay
    }
  } 
};

module.exports = resolvers;
