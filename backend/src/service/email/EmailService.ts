import {Config} from '../../config/config'
import * as nodemailer from 'nodemailer'
import Subscriber from '../../models/Subscriber'
import {EmailOptions} from "./EmailOptions";

export class EmailService {

  private _emailOptions: EmailOptions
  private _transporter

  constructor(emailOptions: EmailOptions) {
    this._transporter = nodemailer.createTransport({
      service: Config.EMAIL_SERVICE,
      auth: {
        user: Config.EMAIL_FROM,
        pass: Config.EMAIL_PASSWORD
      }
    })
    this._emailOptions = emailOptions
  }

  public sendToAllSubscribers(): void {
    Subscriber.find({}, (error, subscribers) => {
      if (error) {
        console.log(error)
      } else {

        subscribers.forEach(em => {
          let email = em.get('email')
          this._emailOptions.to.push(email)
        })
        this.sendMail()
      }
    })
  }

  public sendMail(): void {
    console.log('Sending mail...')
    this._transporter.sendMail(this._emailOptions, function (err, response) {
      if (err) {
        console.log(`ERROR: An error occurred during email sending: ${err}`)
      } else {
        console.log(`Mail has been successfully sent to: ${response.accepted}`)
      }
    })
    console.log(this._emailOptions)
  }

  get emailOptions(): EmailOptions {
    return this._emailOptions;
  }

  set emailOptions(value: EmailOptions) {
    this._emailOptions = value;
  }
}
