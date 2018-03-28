const config = require('../config/config')

let countdownRoutes = {
  getTarget (req, res) {
    return res.status(200).json({ countdownTarget: config.COUNTDOWN_TARGET })
  }
}

module.exports = countdownRoutes
