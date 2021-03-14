import CodexSet from "../database/CodexSet"
import Play from "../database/Play"
import User from "../database/User"
import Transactions from "../database/Transactions"
import Listings from "../database/Listing"
import * as Auth from "../auth"

// import {gql} from 'apollo-server'
export const Query = {
  getAllSets: async (parent, args, context, info) => {
    return await CodexSet.find({}).lean()
  },

  getSet: async (parent, args, context, info) => {
    return await CodexSet.findOne({ id: args.id }).lean()
  },

  getMoment: async (parent, args, context, info) => {
    const moment = await Play.findOne({
      setID: args.setID,
      playID: args.playID,
    }).lean()
    moment.set = await CodexSet.findOne({ id: args.setID }).lean()
    return moment
  },

  getMoments: async (parent, args, context, info) => {
    const momentSearch = args.moments.map((moment) => {
      const [setID, playID] = moment.split("+")
      return { playID, setID }
    })

    if (momentSearch.length < 1) {
      return null
    }

    const moments = await Play.find({ $or: momentSearch }).lean()

    return moments
  },

  verifyLogin: async (parent, args, context, info) => {
    try {
      const loggedIn = await Auth.verify(args.token)
      if (loggedIn) {
        const user = await User.findOne({ email }).lean()
        return user
      }
      return null
    } catch (e) {
      return null
    }
  },

  searchMoments: async (parent, args, context, info) => {
    if (!args.search || args.search.length <= 3) {
      return []
    }
    const exp = new RegExp(args.search.replaceAll(/[^a-zA-Z0-9]/g, ""), "i")
    console.log("Searching woo", exp)

    const plays = await Play.find({
      $or: [
        { $text: { $search: args.search } },
        { name: { $regex: exp } },
        { team: { $regex: exp } },
        { playType: { $regex: exp } },
        { playCategory: { $regex: exp } },
        // { rarity: { $regex: exp } },
      ],
    }).lean()
    console.log("plays", plays)
    return plays
  },
}

export const Set = {
  moments: async (parent, args, context, info) => {
    console.log("Getting moments", parent.momentIDs)
    return await Play.find({
      setID: parent.id,
      playID: { $in: parent.momentIDs },
    }).lean()
  },

  uniqueMoments: (parent) => {
    return parent?.momentIDs?.length || 0
  },

  cssRarity: (parent, args, context, info) => {
    return (
      "rarity-" +
      (parent.rarity?.replace("SET_VISUAL_", "").toLowerCase() ?? "common")
    )
  },

  humanRarity: (parent, args, context, info) => {
    return parent.rarity?.replace("SET_VISUAL_", "").toLowerCase() ?? "common"
  },
}

export const Moment = {
  set: async (parent, args, context, info) => {
    return await CodexSet.findOne({ id: parent.setID }).lean()
  },

  listings: async (parent) => {
    const listings = (
      await Listings.find(
        {
          id: `${parent.setID}+${parent.playID}`,
        },
        {},
        { sort: { time: 1 } }
      ).lean()
    ).map((ret) => {
      ;[ret.setID, ret.playID] = ret.id.split("+")
      delete ret.id

      return ret
    })

    return listings
  },

  transactions: async (parent) => {
    console.log("getting trans", parent.setID)
    return await Transactions.find(
      {
        setID: parent.setID,
        playID: parent.playID,
      },
      {},
      { sort: { date: 1 } }
    )
  },
}
