import React from "react"
import App from "./App"
import ApolloClient from "apollo-client"
import { ApolloProvider, createHttpLink, InMemoryCache } from "@apollo/client"
import { setContext } from "apollo-link-context"
console.log(process.env)
const httpLink = createHttpLink({
  uri:
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://spy-glass.herokuapp.com",
})

// const authLink = setContext(() => {
//   const token = localStorage.getItem("jwtToken")
//   return {
//     headers: {
//       Authorization: token ? `Bearer ${token}` : "",
//     },
//   }
// })

const client = new ApolloClient({
  // authLink.concat
  link: httpLink,
  cache: new InMemoryCache(),
})
console.log(client)
export default (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
)
