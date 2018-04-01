/* eslint-disable handle-callback-err */

const config = require('../config/config')
const Subscriber = require('../models/subscriber')

// Database connection
const mongoose = require('mongoose')
mongoose.connect(config.DR_URL)
const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => {
  console.log('DB connected.')
})

let subscriberRoutes = {
  insertSubscriber (req, res) {
    if (req.body.subscriber) {
      let newSubscriber = req.body.subscriber

      Subscriber.findOne({email: new RegExp(newSubscriber.email, 'i')}, (err, obj) => {
        if (obj) {
          res.status(200).json({status: 403, message: 'Already exists!'})
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
            res.status(200).json({status: 201, message: 'Successfully created!'})
            console.log(`Subscriber with email ${subscriber.email} successfully crated.`)
          })
        }
      })
    } else {
      res.status(200).json({status: 400, message: 'Bad request!'})
      console.log(`ERROR: Request doesn't contain subscriber object.`)
    }
  }
}

module.exports = subscriberRoutes
