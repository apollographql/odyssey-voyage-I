import { GraphQLResolverMap } from '@apollo/subgraph/dist/schema-helper';

import { Context } from './Context';

const resolvers: GraphQLResolverMap<Context> = {
  Query: {
    locations: (_, __, { dataSources }) => {
      return dataSources.locationsAPI.getAllLocations();
    },
    location: (_, { id }, { dataSources }) => {
      return dataSources.locationsAPI.getLocation(id);
    },
  },
  Location: {
    __resolveReference: ({ id }, { dataSources }) => {
      return dataSources.locationsAPI.getLocation(id);
    },
  },
};

export default resolvers;
