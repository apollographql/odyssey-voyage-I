import { readFileSync } from 'fs';
import gql from 'graphql-tag';

import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { buildSubgraphSchema } from '@apollo/subgraph';

import { Context } from './Context';
import { LocationsAPI } from './datasources';
import resolvers from './resolvers';

const typeDefs = gql(
  readFileSync('./locations.graphql', { encoding: 'utf-8' })
);
async function startApolloServer() {
  const server = new ApolloServer<Context>({
    schema: buildSubgraphSchema([{ typeDefs, resolvers }]),
  });

  const port = 4001;
  const subgraphName = 'locations';

  try {
    const { url } = await startStandaloneServer(server, {
      context: async () => {
        return {
          dataSources: {
            locationsAPI: new LocationsAPI(),
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
