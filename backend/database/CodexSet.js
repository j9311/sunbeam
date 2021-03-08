import { Schema, model } from "mongoose"

const codexSetSchema = new Schema(
  {
    id: { type: String, index: true, unique: true },
    name: String,
    description: Boolean,
    momentIDs: [String],
    rarity: String,
    image: String,
  },
  { versionKey: false }
)

export default model("CodexSet", codexSetSchema)
