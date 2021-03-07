import { Schema, model } from "mongoose"

const momentPriceSchema = new Schema(
  {
    price: Number,
    serial: Number,
  },
  { _id: false }
)

const momentSchema = new Schema(
  {
    id: { type: String, index: true },
    time: { type: Number, index: true },
    prices: [momentPriceSchema],
    volumeCirculation: Number,
    volumeSold: Number,
    volumeListed: Number,
    high: Number,
    low: Number,
    open: Number,
    close: Number,
  },
  { versionKey: false }
)
momentSchema.index({ id: 1, time: 1 }, { unique: true })

export default model("Listings", momentSchema)
