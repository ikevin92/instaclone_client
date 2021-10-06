import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';

const httpLik = createUploadLink({
  uri: 'https://localhost:4000/',
});

const client = new ApolloClient({
  connectToDevTools: true,
  cache: new InMemoryCache(),
  // link: authLink.concat(httpLik),
  link: httpLik,
});

export default client;
