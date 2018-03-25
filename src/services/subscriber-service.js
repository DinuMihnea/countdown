import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:3000/api'

const API_URL = '/subscribers'

export const subscriberService = {
  insertSubscriber (subscriber) {
    return new Promise((resolve, reject) => {
      axios.post(API_URL, {subscriber: subscriber})
        .then(response => {
          resolve(response)
        })
        .catch(error => {
          console.log(error)
          reject(error)
        })
    })
  }
}
