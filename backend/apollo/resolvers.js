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

  getMoment: async (parent, args, context, info) =>
    await Play.findOne({ id: args.id }),
}

export const Set = {
  moments: async (parent, args, context, info) => {
    console.log("Getting moments", parent.momentIDs)
    return (await Play.find({ id: { $in: parent.momentIDs } })).map((play) => {
      console.log("parent", parent.id)
      play.playID = play.id
      play.setID = parent.id
      play.set = parent

      return play
    })
  },
}
