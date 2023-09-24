import {ApolloClient, InMemoryCache, HttpLink} from '@apollo/client';
import fetch from 'cross-fetch';

// Initialize Apollo Client
export const client = new ApolloClient({
  link: new HttpLink({uri: 'https://countries.trevorblades.com', fetch}),
  cache: new InMemoryCache(),
});
