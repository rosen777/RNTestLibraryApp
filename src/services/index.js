import {ApolloClient, InMemoryCache} from '@apollo/client';

// Initialize Apollo Client
export const client = new ApolloClient({
  uri: 'https://countries.trevorblades.com',
  cache: new InMemoryCache(),
});
