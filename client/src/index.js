import App from './App';
import React from 'react';
import { createRoot } from 'react-dom/client'

import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  createHttpLink
} from '@apollo/client';

import theme from './theme.js';
import {ChakraProvider} from '@chakra-ui/react';

const httpLink = createHttpLink({
  uri: 'http://127.0.0.1:4000'
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});

const root = createRoot(document.getElementById('root'));

root.render(
  <ChakraProvider theme={theme}>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </ChakraProvider>
);
