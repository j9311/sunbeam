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
    name: String,
    descrption: String,
    image: String,
    jerseyNumber: Number,
    team: String,
    date: Number,
  },
  { versionKey: false }
)

export default model("Play", playSchema)
