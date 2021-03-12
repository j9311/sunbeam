import { gql } from "apollo-server"

export const Query = gql`
  type Query {
    verifyLogin(token: String!): User

    getAllSets: [Set]
    getSet(id: String!): Set
    getMoment(playID: String!, setID: String): Moment
    getMoments(moments: [String]!): [Moment]
    searchMoments(search: String!): [Moment]
  }
`

export const Set = gql`
  type Set {
    id: String!

    name: String
    image: String
    rarity: String
    cssRarity: String
    humanRarity: String

    moments: [Moment]
    uniqueMoments: Int
  }
`
export const Moment = gql`
  type Moment {
    playID: String!
    setID: String!

    set: Set
    image: String
    description: String

    name: String
    jerseyNumber: Int
    team: String
    date: Float

    playType: String
    playCategory: String

    transactions: [Transaction]
    listings: [Listing]
  }

  type Transaction {
    transactionID: String
    playID: String
    setID: String
    price: String
    date: Float
    serial: Int
  }

  type Listing {
    setID: String
    playID: String

    time: Float
    prices: [ListingPrice]
    volumeCirculation: Int
    volumeSold: Int
    volumeListed: Int
    high: Int
    low: Int
    open: Int
    close: Int
  }

  type ListingPrice {
    price: Int
    serial: Int
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
