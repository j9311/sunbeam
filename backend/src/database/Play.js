import { Schema, model, Connection } from "mongoose"

/**
 * A MOMENT IS A SERIALIZED PLAY
 * AKA it's a card with a serial #, set ID and play ID.
 * Plays can appear in different sets
 * But we'll call them moments here for ease of udnerstanding
 */
const playSchema = new Schema(
  {
    playID: String,
    setID: { type: String, index: true },
    name: String,
    description: String,
    image: String,
    jerseyNumber: Number,
    playType: { type: String, index: true },
    playCategory: { type: String, index: true },
    team: { type: String, index: true },
    date: Number,
  },
  { versionKey: false }
)
playSchema.index({ setID: 1, playID: 1 }, { unique: true })

playSchema.index({ name: "text", playType: "text", team: "text" })

export default model("Play", playSchema)
