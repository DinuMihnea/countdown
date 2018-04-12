
export class EmailOptions {

  from: string
  subject: string
  to: string[]
  html: string

  constructor(from: string, subject: string, to: string[], html?: string) {
    this.from= from;
    this.subject = subject;
    this.to = to;
    this.html = html;
  }

}
