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
codexSetSchema.index({ name: "text" })

export default model("CodexSet", codexSetSchema)
