import * as React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import Router from './Routes';
import Home from '.';

const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache()
});


function MyApp() {
  return (
    <ApolloProvider client={client}>
      <Home />
  </ApolloProvider>
  )
}

export default MyApp;