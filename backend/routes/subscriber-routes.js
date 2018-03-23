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
  if (req.body.email) {
    let newEmail = req.body.email

    Subscriber.findOne({ email: new RegExp(newEmail, 'i') }, (err, obj) => {
      if (obj) {
        res.status(400).json({message: 'Already exists!'})
      } else {
        let subscriber = new Subscriber()
        subscriber.email = newEmail
        subscriber.save((err) => {
          if (err) {
            console.log(err)
            res.send(err)
          }
          res.status(200).json({message: 'Successfully created!'})
        })
      }
    })
  } else {
    res.status(400).json({message: 'Bad request!'})
  }
}
