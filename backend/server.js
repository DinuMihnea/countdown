const express = require('express')
const routes = require('./routes')
const app = express()
const emailService = require('./email/email-service')
const port = process.env.PORT || 3000

app.use('/api', routes)
if (!module.parent) {
  app.listen(port, () => {
    console.log(`Listening starts on port: ${port}`)
    emailService.startEmailCountdown()
  })
}
