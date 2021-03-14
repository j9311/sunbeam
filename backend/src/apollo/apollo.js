import { ApolloServer, PubSub } from "apollo-server-express"

import * as typeDefs from "./typedefs"
import * as resolvers from "./resolvers"
console.log(typeDefs)

import responseCachePlugin from "apollo-server-plugin-response-cache"

const server = new ApolloServer({
  typeDefs: Object.values(typeDefs),
  resolvers,
  plugins: [responseCachePlugin()],
})

export default server
