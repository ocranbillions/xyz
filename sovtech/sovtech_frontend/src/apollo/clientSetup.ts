import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

const BASE_URL = 'http://localhost:4000';

const httpLink = new HttpLink({
  uri: BASE_URL
});

const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});


export default apolloClient;