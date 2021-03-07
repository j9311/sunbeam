import Sets from "../database/Set"
import Moment from "../database/Set"

// import {gql} from 'apollo-server'
export const Query = {
  getAllSets: async (parent, args, context, info) => Sets.find({}),

  getSet: async (parent, args, context, info) => Sets.findOne({ id: args.id }),

  getMoment: async (parent, args, context, info) =>
    Moment.findOne({ id: args.id }),
}

export const Set = {
  moments: (parent, args, context, info) => {
    return Moment.find({ setID: parent.id })
  },
}
