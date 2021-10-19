const { ApolloServer } = require('apollo-server');
const { buildSubgraphSchema } = require('@apollo/subgraph');
const { readFileSync } = require('fs');
const { parse } = require('graphql');

const typeDefs = readFileSync('./reviews.graphql').toString();
const resolvers = require('./resolvers');
const ReviewsAPI = require('./datasources/ReviewsApi');

const server = new ApolloServer({
  schema: buildSubgraphSchema([{ typeDefs: parse(typeDefs), resolvers }]),
  dataSources: () => {
    return {
      reviewsAPI: new ReviewsAPI(),
    };
  },
});

const port = 4002;
const subgraphName = 'reviews';

server.listen({ port }).then(({ url }) => {
  console.log(`🚀 Subgraph ${subgraphName} running at ${url}`);
});
