import express from "express"

import conn from "./database/database"

// Create the express app
const app = express()

import cors from "cors"
app.use(cors({ origin: /^http(s)?:\/\/(localhost|superdomain.com)(:3000)?/ }))

import cookieParser from "cookie-parser"
app.use(cookieParser())

import apolloServer from "./apollo/apollo"
apolloServer.applyMiddleware({ app, path: "/api/v1/graphql" })

import bodyParser from "body-parser"
app.use(bodyParser.json())

import * as Auth from "./auth"
app.post("/api/v1/auth/google", Auth.googleLogin)

// Routes and middleware
// app.use(/* ... */)
// app.get(/* ... */)

// Error handlers
app.use(function fourOhFourHandler(req, res) {
  res.status(404).send()
})

app.use(function fiveHundredHandler(err, req, res, next) {
  console.error(err)
  res.status(500).send()
})

// Start server
app.listen(process.env.PORT || 5000, function (err) {
  if (err) {
    return console.error(err)
  }

  console.log(
    `listening on port ${process.env.PORT || 5000} as ${
      process.env.NODE_ENV || "development"
    }`
  )
})

import scrape from "./private/scrape"
if (process.env.NODE_ENV === "production" && !process.env.NO_SCRAPE) {
  scrape().then(() => {
    console.log("Done scraping!?")
  })
}
