const { ApolloServer } = require('apollo-server');
const { buildSubgraphSchema } = require('@apollo/subgraph');
const { readFileSync } = require('fs');
const { parse } = require('graphql');

const typeDefs = readFileSync('./reviews.graphql').toString();
const resolvers = require('./resolvers');

const server = new ApolloServer({
  schema: buildSubgraphSchema([{ typeDefs: parse(typeDefs), resolvers }]),
  dataSources: () => {
    return {
      // TODO: add data sources here
    };
  },
});

const port = 4002;
const subgraphName = 'reviews';

server.listen({ port }).then(({ url }) => {
  console.log(`🚀 Subgraph ${subgraphName} running at ${url}`);
});
