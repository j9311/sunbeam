import { Schema, model, Connection } from "mongoose"

const momentSchema = new Schema(
  {
    id: { type: String, index: true, unique: true },
    setID: String,
    name: String,
    descrption: String,
  },
  { versionKey: false }
)

export default momentSchema
