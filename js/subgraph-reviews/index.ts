import { readFileSync } from 'fs';
import gql from 'graphql-tag';

import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { buildSubgraphSchema } from '@apollo/subgraph';
import { GraphQLResolverMap } from '@apollo/subgraph/dist/schema-helper';

import { Context } from './Context';
import { ReviewsAPI } from './datasources';
import resolvers from './resolvers';

const typeDefs = gql(readFileSync('./reviews.graphql', { encoding: 'utf-8' }));
async function startApolloServer() {
  const server = new ApolloServer<Context>({
    schema: buildSubgraphSchema([
      {
        typeDefs,
        resolvers,
      },
    ]),
  });

  const port = 4002;
  const subgraphName = 'reviews';

  try {
    const { url } = await startStandaloneServer(server, {
      context: async () => {
        return {
          dataSources: {
            reviewsAPI: new ReviewsAPI(),
          },
        };
      },
      listen: { port },
    });

    console.log(`🚀 Subgraph ${subgraphName} running at ${url}`);
  } catch (err) {
    console.error(err);
  }
}

startApolloServer();
