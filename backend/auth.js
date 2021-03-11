import User from "./database/User"

const JWT_SECRET =
  process.env.NODE_ENV === "production" ? process.env.JWT_SECRET : "notsecret"

const JWT_OPTIONS = {
  issuer: "TOPPESTSHOT",
  audience: "TOPPESTSHOT",
}

import jwt from "jsonwebtoken"
import { OAuth2Client } from "google-auth-library"
const client = new OAuth2Client(process.env.GOOGLE_CLIENT)

export async function googleLogin(req, res) {
  const { token } = req.body
  const ticket = await client.verifyIdToken({
    idToken: token,
    audience: process.env.GOOGLE_CLIENT,
  })

  const { name, email, picture } = ticket.getPayload()
  const user = await User.findOneAndUpdate(
    { email: email },
    {
      name,
      email,
      picture,
    },
    { new: true, upsert: true }
  )

  const authToken = await jwt.sign({ email }, JWT_SECRET, JWT_OPTIONS)
  res.cookie("authToken", authToken)

  res.status(201)
  res.json({ jwt: authToken, ...user._doc })
}

export async function verify(token) {
  const data = await jwt.verify(token, JWT_SECRET, JWT_OPTIONS)
  return data
}
