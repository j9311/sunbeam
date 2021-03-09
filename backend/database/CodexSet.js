import { Schema, model } from "mongoose"

const codexSetSchema = new Schema(
  {
    id: { type: String, index: true, unique: true },
    name: String,
    momentIDs: [String],
    rarity: String,
    image: String,
  },
  { versionKey: false }
)

export default model("CodexSet", codexSetSchema)
