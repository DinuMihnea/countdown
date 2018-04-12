import {Router, Request, Response, NextFunction} from "express"
import Subscriber from '../models/Subscriber'

class SubscriberRouter {

  router: Router

  constructor() {
    this.router = Router()
    this.routes()
  }

  public createSubscriber(req: Request, res: Response): void {
    let email: string = req.body.subscriber.email
    let createdAt: Date = new Date()
    let subscriber = new Subscriber({
      createdAt,
      email
    })

    subscriber.save()
      .then((data) => {
        const status = res.statusCode
        res.json({
          status,
          data
        })
      })
      .catch((error) => {
        const status = res.statusCode
        res.json({
          status,
          error
        })
      })
  }

  private routes() {
    this.router.post('/', this.createSubscriber)
  }
}

export default new SubscriberRouter().router
