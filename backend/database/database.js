import mongoose from "mongoose"

mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost/topshot", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    poolSize: 200,
  })
  .then(console.log)
  .catch(console.error)

export default mongoose.connection
