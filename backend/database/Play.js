import { Schema, model, Connection } from "mongoose"

/**
 * A MOMENT IS A SERIALIZED PLAY
 * AKA it's a card with a serial #, set ID and play ID.
 * Plays can appear in different sets
 * But we'll call them moments here for ease of udnerstanding
 */
const playSchema = new Schema(
  {
    id: { type: String, index: true, unique: true },
    name: { type: String, index: true },
    descrption: String,
    image: String,
    jerseyNumber: Number,
    playType: { type: String, index: true },
    playCategory: { type: String, index: true },
    team: { type: String, index: true },
    date: Number,
  },
  { versionKey: false }
)

playSchema.index({ name: "text", playType: "text", team: "text" })

export default model("Play", playSchema)
