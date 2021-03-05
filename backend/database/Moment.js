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
    _id: Number,
    prices: [momentPriceSchema],
  },
  { versionKey: false }
)

export default function (id) {
  return model("moment-" + id, momentSchema)
}
