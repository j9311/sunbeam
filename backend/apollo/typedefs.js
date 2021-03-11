import { gql } from "apollo-server"

export const Query = gql`
  type Query {
    getAllSets: [Set]
    getSet(id: String!): Set
    getMoment(id: String!, setID: String): Moment
    verifyLogin(token: String!): User
  }
`

export const Set = gql`
  type Set {
    id: String!

    name: String
    image: String
    rarity: String

    moments: [Moment]
    uniqueMoments: Int
  }
`
export const Moment = gql`
  type Moment {
    playID: String
    setID: String

    set: Set
    image: String
    description: String

    name: String
    jerseyNumber: Int
    team: String
    date: Float

    playType: String
    playCategory: String
  }
`
export const MomentListing = gql`
  type Price {
    price: Float
    serial: Float
  }

  type MomentListing {
    moment: Moment
    time: Float
    prices: [Price]
  }
`

export const User = gql`
  type User {
    email: String
    name: String
    picture: String
  }
`
