
export class EmailCountdown {

  private _interval: number
  private _target: number
  private _handle: () => void

  constructor(interval: number, target: number, handle: () => void) {
    this._interval = interval;
    this._target = target;
    this._handle = handle;
  }

  public initEmailCountdown(): void {
    this.refreshEmailCountdown()
  }

  private refreshEmailCountdown(): void {
    let diff = 0
    try {
      diff = this.getTimeDiff()
    } catch (e) {
      console.log(e)
    }

    if (diff > 0) {
      // TODO validate console time displaying
      console.log(`Message will be send after: ${Math.floor(diff / 1000)} seconds`)
      setTimeout(() => {
        this.refreshEmailCountdown()
      }, this._interval)

    } else if (diff < 0 && diff >= -this._interval) {
      this._handle()
    } else {
      console.log('Exit from email countdown.')
    }
  }

  private getTimeDiff(): number {
    let diff = Math.floor(this._target - new Date().getTime())
    if (diff < -this._target) {
      throw new Error('ERROR: Target date is less than now.')
    }
    return diff
  }

  get interval(): number {
    return this._interval;
  }

  set interval(value: number) {
    this._interval = value;
  }

  get target(): number {
    return this._target;
  }

  set target(value: number) {
    this._target = value;
  }

  get handle(): () => void {
    return this._handle;
  }

  set handle(value: () => void) {
    this._handle = value;
  }
}
