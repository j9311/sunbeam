import express from "express"

// Create the express app
const app = express()

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

  console.log("Started at http://localhost:5000")
})

import scrape from "./private/scrape"
// scrape().then()
