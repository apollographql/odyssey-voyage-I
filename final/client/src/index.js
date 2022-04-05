import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  createHttpLink
} from '@apollo/client';

import theme from './theme.js';
import {ChakraProvider} from '@chakra-ui/react';

const gqlServerAddress =
  process.env.NODE_ENV !== 'production'
    ? 'http://localhost:4000'
    : process.env.REACT_APP_GQL_SERVER;

const httpLink = createHttpLink({
  uri: gqlServerAddress
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});

ReactDOM.render(
  <ChakraProvider theme={theme}>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </ChakraProvider>,
  document.getElementById('root')
);
