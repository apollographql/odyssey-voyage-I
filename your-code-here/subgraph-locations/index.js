const { ApolloServer } = require('apollo-server');
const { readFileSync } = require('fs');
const { parse } = require('graphql');
const { buildSubgraphSchema } = require('@apollo/subgraph');

const typeDefs = readFileSync('./locations.graphql').toString();
const resolvers = require('./resolvers');
const LocationsAPI = require('./datasources/LocationsApi');

console.log('TYPEDEFS', parse(typeDefs))
console.log('RESOLVERS', resolvers)
console.log('BUILD SUBGRAPH SCHEMA', buildSubgraphSchema([{
  typeDefs: parse(typeDefs),
  resolvers,
}]))

const server = new ApolloServer({
  schema: buildSubgraphSchema([{
    typeDefs: parse(typeDefs),
    resolvers,
  }]),
  dataSources: () => {
    return {
      locationsAPI: new LocationsAPI(),
    };
  },
});

const port = 4001;
const subgraphName = 'locations'

server.listen({ port }).then(({ url }) => {
  console.log(`🚀 Subgraph ${subgraphName} running at ${url}`);
});
