const { ApolloServer } = require('apollo-server');
const { readFileSync } = require('fs');
const { parse } = require('graphql');

const typeDefs = readFileSync('./locations.graphql').toString();
const resolvers = require('./resolvers');
const LocationsAPI = require('./datasources/LocationsApi');

const server = new ApolloServer({
  typeDefs: parse(typeDefs),
  resolvers,
  dataSources: () => {
    return {
      locationsAPI: new LocationsAPI(),
    };
  },
});

const port = 4001;

server.listen({ port }).then(({ url }) => {
  console.log(`🚀 Server running at ${url}`);
});
