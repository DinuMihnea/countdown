import {Router, Request, Response, NextFunction} from "express"
import {Config} from "../config/config"

class CountdownRouter {

  router: Router

  constructor() {
    this.router = Router()
    this.routes()
  }

  public getTarget(req: Request, res: Response): void {
    const status = res.statusCode
    const countdownTarget: number = Config.COUNTDOWN_TARGET
    res.json({
      status,
      countdownTarget
    })
  }

  private routes() {
    this.router.get('/', this.getTarget)
  }
}

export default new CountdownRouter().router
