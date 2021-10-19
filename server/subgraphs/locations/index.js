const { ApolloServer } = require('apollo-server');
const { buildSubgraphSchema } = require('@apollo/subgraph');
const { readFileSync } = require('fs');
const { parse } = require('graphql');

const typeDefs = readFileSync('./locations.graphql').toString();
const resolvers = require('./resolvers');
const LocationsAPI = require('./datasources/LocationsApi');

const server = new ApolloServer({
  schema: buildSubgraphSchema([{ typeDefs: parse(typeDefs), resolvers }]),
  dataSources: () => {
    return {
      locationsAPI: new LocationsAPI(),
    };
  },
});

const port = 4001;
const subgraphName = 'locations';

server.listen({ port }).then(({ url }) => {
  console.log(`🚀 Subgraph ${subgraphName} running at ${url}`);
});
