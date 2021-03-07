import { Schema, model } from "mongoose"
import Moment from "./Moment"

const setSchema = new Schema(
  {
    id: { type: String, index: true, unique: true },
    name: String,
    description: Boolean,
    moments: [Moment],
  },
  { versionKey: false }
)

export default model("Set", setSchema)
