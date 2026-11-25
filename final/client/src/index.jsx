import App from './App';
import React from 'react';
import {createRoot} from 'react-dom/client';

import {ApolloClient, HttpLink, InMemoryCache} from '@apollo/client';
import {ApolloProvider} from '@apollo/client/react';

import system from './theme';
import {ChakraProvider} from '@chakra-ui/react';

const client = new ApolloClient({
  link: new HttpLink({uri: 'http://127.0.0.1:4000'}),
  cache: new InMemoryCache()
});

const root = createRoot(document.getElementById('root'));

root.render(
  <ChakraProvider value={system}>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </ChakraProvider>
);
