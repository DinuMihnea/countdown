import {Config} from "./config/config";
import * as express from 'express'
import * as mongoose from 'mongoose'
import * as bodyParser from 'body-parser'
import * as compression from 'compression'
import * as logger from 'morgan'
import * as helemt from 'helmet'
import * as cors from 'cors'

import CountdownRouter from './router/CountdownRouter'
import SubscriberRouter from './router/SubscriberRouter'
import {EmailService} from './service/email/EmailService'
import {EmailOptions} from "./service/email/EmailOptions";
import {emit} from "cluster";
import {EmailCountdown} from "./service/email/EmailCountdown";

class Server {

  public app: express.Application

  constructor() {
    this.app = express();
    this.config();
    this.routes();
  }

  public config() {
    const DB_URI = Config.DB_URI
    mongoose.connect(DB_URI || process.env.DB_URI)

    this.app.use(bodyParser.json())
    this.app.use(bodyParser.urlencoded({extended: true}))
    this.app.use(logger('dev'))
    this.app.use(compression())
    this.app.use(helemt())
    this.app.use(cors())

    if (!Config.IS_PRODUCTION) {
      let emailService = new EmailService(
        new EmailOptions(
          Config.EMAIL_FROM,
          Config.EMAIL_SUBJECT,
          [],
          Config.EMAIL_HTML))

      let emailCountdown = new EmailCountdown(
        Config.EMAIL_COUNTDOWN_INTERVAL,
        Config.COUNTDOWN_TARGET,
        () => {
          emailService.sendToAllSubscribers()
        })

      emailCountdown.initEmailCountdown()
    }
  }

  public routes(): void {
    let router: express.Router
    router = express.Router()

    this.app.use('/', router)
    this.app.use('/api/countdown', CountdownRouter)
    this.app.use('/api/subscribers', SubscriberRouter)
  }

}

export default new Server().app
