import {Schema, model} from "mongoose"

let SubscriberSchema: Schema = new Schema({

  createdAt: Date,
  email: {
    type: String,
    required: true,
    unique: true
  }

})

export default model('Subscriber', SubscriberSchema)
