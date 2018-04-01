import axios from './axios'

const API_URL = '/subscribers'

export const subscriberService = {
  async insertSubscriber (subscriber) {
    let response = await axios.post(API_URL, {subscriber: subscriber})
    if (response.data.status === 201 || 200) {
      return Promise.resolve(response.data.status)
    } else {
      return Promise.reject(response.data.status)
    }
  }
}
