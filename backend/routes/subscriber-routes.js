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

module.exports = (req, res) => {
  if (req.body.subscriber) {
    let newSubscriber = req.body.subscriber

    Subscriber.findOne({ email: new RegExp(newSubscriber.email, 'i') }, (err, obj) => {
      if (obj) {
        res.status(403).json({message: 'Already exists!'})
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
        })
      }
    })
  } else {
    res.status(400).json({message: 'Bad request!'})
  }
}
