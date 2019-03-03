import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import fetch from "node-fetch";

/*const client = new ApolloClient({
  link: new HttpLink({
    uri: "http://localhost:8080/graphql",
    fetch
  }),
  cache: new InMemoryCache()
});*/

const client = new ApolloClient({
  link: new HttpLink({
    uri: "http://192.168.0.142:1337/graphql",
    fetch
  }),
  cache: new InMemoryCache()
});

export default client;
