import CodexSet from "../database/CodexSet"
import Play from "../database/Play"

// import {gql} from 'apollo-server'
export const Query = {
  getAllSets: async (parent, args, context, info) =>
    (await CodexSet.find({})).map((set) => {
      set.uniqueMoments = set.momentIDs?.length || 0
      return set
    }),

  getSet: async (parent, args, context, info) =>
    await CodexSet.findOne({ id: args.id }),

  getMoment: async (parent, args, context, info) => {
    const moment = await Play.findOne({ setID: args.setID, playID: args.id })
    console.log("id:", args.id, "setID:", args.setID, moment)
    moment.set = await CodexSet.findOne({ id: args.setID })
    console.log(args, context, info)
    moment.setID = args.setID
    return moment
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
}
