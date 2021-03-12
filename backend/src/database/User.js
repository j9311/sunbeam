import { model, Schema } from "mongoose"

const userSchema = new Schema({
  name: String,
  email: String,
  picture: String,
})

export default model("User", userSchema)
