module.exports = {
  'IS_PRODUCTION': process.env.NODE_ENV === 'production',
  // TODO Try to test countdown target with different timezones
  'COUNTDOWN_TARGET': new Date(2018, 4, 20, 20).getTime(),
  'DR_URL': 'mongodb://localhost:27017/countdown',
  'SECRET': 'SECRET',
  'EMAIL_SERVICE': 'gmail',
  'EMAIL_FROM': 'MAIL_FROM',
  'EMAIL_PASSWORD': 'PASSWORD',
  'EMAIL_SUBJECT': 'Thanks for subscribe',
  'EMAIL_HTML': '<h1>We will contact you soon...</h1>'
}
