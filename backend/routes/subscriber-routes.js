/* eslint-disable handle-callback-err */

const config = require('../config/config')
const Subscriber = require('../models/subscriber')
const emailService = require('../email/email-service')

// Database connection
const mongoose = require('mongoose')
mongoose.connect(config.DR_URL)
const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => {
  console.log('DB connected.')
})

module.exports = (req, res) => {
  if (req.body.subscriber) {
    let newSubscriber = req.body.subscriber

    Subscriber.findOne({ email: new RegExp(newSubscriber.email, 'i') }, (err, obj) => {
      if (obj) {
        res.status(403).json({message: 'Already exists!'})
        console.log(`WARNING: Subscriber with email ${newSubscriber.email}, already exists.`)
      } else {
        let subscriber = new Subscriber()
        subscriber.email = newSubscriber.email
        subscriber.date = newSubscriber.date
        subscriber.save((err) => {
          if (err) {
            console.log(err)
            res.status(500).send(err)
          }
          res.status(201).json({message: 'Successfully created!'})
          console.log(`Subscriber with email ${subscriber.email} successfully crated.`)

          // TODO send mail to all subscribers when countdown is end
          emailService.sendMail(subscriber.email)
            .then(response => {
              console.log(`Mail has been successfully sent to ${response.accepted}`)
            }).catch(err => {
              console.log(`ERROR: An error occurred during email sending: ${err}`)
            })
        })
      }
    })
  } else {
    res.status(400).json({message: 'Bad request!'})
    console.log(`ERROR: Request doesn't contain subscriber object.`)
  }
}
