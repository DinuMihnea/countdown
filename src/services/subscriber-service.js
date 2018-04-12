import axios from './axios'

const API_URL = '/subscribers'

export const subscriberService = {
  async insertSubscriber (subscriber) {
    let response = await axios.post(API_URL, {subscriber: subscriber})
    let data = response.data
    if (response.status === 201 || 200) {
      if (data.error) {
        return Promise.reject(data.error.code)
      } else {
        return Promise.resolve(data)
      }
    }
  }
}
