import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config()

console.log("MONGODBUYRI", process.env.MONGODB_URI)

mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost/topshot", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
    poolSize: 300,
  })
  .then(async function () {
    console.log("Mongoose connected!")
  })
  .catch(console.error)

const conn = mongoose.connection
export default conn

/**
 * REMOVING COMPOUND INDEX DUPLICATES
 * 
  const dups = conn.db.collection("listings").aggregate([
    {
      $group: {
        _id: {
          id: "$id",
          time: "$time",
        },
        dups: {
          $addToSet: "$_id",
        },
        count: {
          $sum: 1,
        },
      },
    },
    { $match: { count: { $gt: 1 } } },
  ])
  console.log("#dups", (await dups.toArray()).length)
  await dups.forEach(async function (doc) {
    console.log("Hi documents dumped or something")
    doc.dups.shift()
    await conn.db
      .collection("listings")
      .deleteMany({ _id: { $in: doc.dups } })
  })
  console.log("Done deleting!")
 */
