import { Schema, model } from "mongoose"

const listingPriceSchema = new Schema(
  {
    price: Number,
    serial: Number,
  },
  { _id: false }
)

const listingSchema = new Schema(
  {
    id: { type: String, index: true },
    time: { type: Number, index: true },
    prices: [listingPriceSchema],
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
listingSchema.index({ id: 1, time: 1 }, { unique: true })

export default model("Listings", listingSchema)
