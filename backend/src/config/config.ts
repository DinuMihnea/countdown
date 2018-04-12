export class Config {

  static IS_PRODUCTION: boolean = process.env.NODE_ENV === 'production'
  static COUNTDOWN_TARGET: number = new Date(2018, 5, 12, 20).getTime()
  static DB_URI: string = 'mongodb://localhost:27017/countdown'
  static SECRET: string = 'SECRET'

  // Email configs
  static EMAIL_COUNTDOWN_INTERVAL: number = 60 * 1000
  static EMAIL_SERVICE: string = 'gmail'
  static EMAIL_FROM: string = 'MAIL_FROM'
  static EMAIL_PASSWORD: string = 'PASSWORD'
  static EMAIL_SUBJECT: string = 'Thanks for subscribe'
  static EMAIL_HTML: string = '<h1We will contact you soon...</h1>'

}
