import { Schema, model } from "mongoose"

const transactionSchema = new Schema(
  {
    transactionID: { type: String, index: true, unique: true },
    playID: { type: String, index: true },
    setID: { type: String, index: true },
    price: Number,
    date: { type: Number, index: true },
    serial: Number,
  },
  { versionKey: false }
)
transactionSchema.index({ playID: 1, setID: 1 })

export default model("Transactions", transactionSchema)
