import { ApolloServer, PubSub } from "apollo-server-express"

import * as typeDefs from "./typedefs"
import * as resolvers from "./resolvers"
console.log(typeDefs)

const server = new ApolloServer({
  typeDefs: Object.values(typeDefs),
  resolvers,
})

export default server
