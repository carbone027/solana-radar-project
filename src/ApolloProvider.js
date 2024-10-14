// src/ApolloProvider.js
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql', // URL onde o Apollo Server está rodando
  cache: new InMemoryCache(),
});

const ApolloProviderWrapper = ({ children }) => (
  <ApolloProvider client={client}>{children}</ApolloProvider>
);

export default ApolloProviderWrapper;