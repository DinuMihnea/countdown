const express = require('express')
const routes = require('./routes')
const app = express()
const port = process.env.PORT || 8080

app.use('/api', routes)
if (!module.parent) {
  app.listen(port, () => {
    console.log(`Listening starts on port: ${port}`)
  })
}