import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";

export const apolloClient = new ApolloClient({
  link: createHttpLink({
    uri: `undefined/graphql`,
    credentials: "include",
  }),
  cache: new InMemoryCache(),
});
