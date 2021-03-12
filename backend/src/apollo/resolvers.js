import CodexSet from "../database/CodexSet"
import Play from "../database/Play"
import User from "../database/User"
import Transactions from "../database/Transactions"
import Listings from "../database/Listing"
import * as Auth from "../auth"

// import {gql} from 'apollo-server'
export const Query = {
  getAllSets: async (parent, args, context, info) => {
    return (await CodexSet.find({})).map((set) => {
      set.uniqueMoments = set.momentIDs?.length || 0
      return set._doc
    })
  },

  getSet: async (parent, args, context, info) => {
    return (await CodexSet.findOne({ id: args.id }))._doc
  },

  getMoment: async (parent, args, context, info) => {
    const moment = await Play.findOne({
      setID: args.setID,
      playID: args.playID,
    })
    console.log("id:", args.id, "setID:", args.setID, moment)
    moment.set = await CodexSet.findOne({ id: args.setID })
    console.log(args, context, info)
    return moment._doc
  },

  getMoments: async (parent, args, context, info) => {
    const momentSearch = args.moments.map((moment) => {
      const [setID, playID] = moment.split("+")
      return { playID, setID }
    })

    if (momentSearch.length < 1) {
      return null
    }

    const moments = await Play.find({ $or: momentSearch })
    await Promise.all(
      moments.map((moment) => {
        return (async () => {
          moment.set = await CodexSet.find({ id: args.setID })
        })()
      })
    )
    return moments.map((moment) => moment._doc)
  },

  verifyLogin: async (parent, args, context, info) => {
    try {
      const loggedIn = await Auth.verify(args.token)
      if (loggedIn) {
        const user = await User.findOne({ email })
        return user._doc
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
    })
    console.log("plays", plays)
    return plays.map((play) => play._doc)
  },
}

export const Set = {
  moments: async (parent, args, context, info) => {
    console.log("Getting moments", parent.momentIDs)
    return (
      await Play.find({ setID: parent.id, playID: { $in: parent.momentIDs } })
    ).map((play) => {
      console.log("parent", parent.id, play.id)
      console.log("play", play)
      play._doc.setID = parent.id
      play._doc.set = { ...parent }

      return play._doc
    })
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
    console.log("getting set", parent.setID)
    return (await CodexSet.findOne({ id: parent.setID }))._doc
  },

  listings: async (parent) => {
    console.log("getting listings", parent.setID, parent.playID)
    const listings = (
      await Listings.find({
        id: `${parent.setID}+${parent.playID}`,
      }).sort({ time: "asc" })
    ).map((x) => {
      const ret = { ...x._doc }

      ;[ret.setID, ret.playID] = ret.id.split("+")
      delete ret.id

      return ret
    })

    return listings
  },

  transactions: async (parent) => {
    console.log("getting trans", parent.setID)
    return (
      await Transactions.find({
        setID: parent.setID,
        playID: parent.playID,
      }).sort({ date: "asc" })
    ).map((x) => x._doc)
  },
}
