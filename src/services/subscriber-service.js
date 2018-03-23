import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:3000/api'

const API_URL = '/subscribers'

export const subscriberService = {
  putSubscriber (email) {
    return new Promise((resolve, reject) => {
      axios.post(API_URL, {email: email})
        .then((res) => {
          if (res.data.status === 200) resolve()
          else reject(new Error())
        })
    })
  }
}
