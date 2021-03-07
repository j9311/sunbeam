import { gql } from "apollo-server"

export const Query = gql`
  type Query {
    getAllSets: [Set]
    getSet(id: String!): Set
    getMoment(id: String!): Moment
  }
`

export const Set = gql`
  type Set {
    id: String!

    name: String
    description: String
    image: String

    moments: [Moment]
    uniqueMoments: Int
  }
`
export const Moment = gql`
  type Moment {
    id: String!
    setID: String!
    playID: String!

    set: Set
    image: String
    description: String
  }
`
export const MomentListing = gql`
  type Price {
    price: Int
    serial: Int
  }

  type MomentListing {
    moment: Moment
    time: Int
    prices: [Price]
  }
`
