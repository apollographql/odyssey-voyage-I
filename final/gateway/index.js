const {ApolloServer} = require('apollo-server');
const {ApolloGateway} = require('@apollo/gateway');
require('dotenv').config();

const gateway = new ApolloGateway();

const server = new ApolloServer({
  gateway
});

const port = process.env.PORT || 4000;

server
  .listen({port})
  .then(({url}) => {
    console.log(`🚀 Gateway ready at ${url}`);
  })
  .catch(err => {
    console.error(err);
  });
