const {ApolloServer, gql} = require('apollo-server');
const {buildSubgraphSchema} = require('@apollo/subgraph');
const {readFileSync} = require('fs');

const typeDefs = gql(readFileSync('./reviews.graphql', {encoding: 'utf-8'}));
const resolvers = require('./resolvers');
const ReviewsAPI = require('./datasources/ReviewsApi');

const server = new ApolloServer({
  schema: buildSubgraphSchema({typeDefs, resolvers}),
  dataSources: () => {
    return {
      reviewsAPI: new ReviewsAPI()
    };
  }
});

const port = 4002;
const subgraphName = 'reviews';

server
  .listen({port})
  .then(({url}) => {
    console.log(`🚀 Subgraph ${subgraphName} running at ${url}`);
  })
  .catch(err => {
    console.error(err);
  });
