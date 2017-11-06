import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";

const client = new ApolloClient({
  // By default, this client will send queries to the
  //  `/graphql` endpoint on the same host
  cache: new InMemoryCache(),
  link: new HttpLink({ uri: "http://localhost:8000/graphql" })
});

export { client };
