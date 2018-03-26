const config = require('../config/config')
const nodemailer = require('nodemailer')

let transporter = nodemailer.createTransport({
  service: config.EMAIL_SERVICE,
  auth: {
    user: config.EMAIL_FROM,
    pass: config.EMAIL_PASSWORD
  }
})

// TODO validate 'to' parameter
function getOptions (to) {
  return {
    from: config.EMAIL_FROM,
    to: to,
    subject: 'Testing mail sending',
    html: config.EMAIL_HTML
  }
}

module.exports = {
  sendMail (to) {
    return new Promise((resolve, reject) => {
      transporter.sendMail(getOptions(to), function (err, info) {
        if (err) {
          reject(err)
        } else {
          resolve(info)
        }
      })
    })
  }
}
