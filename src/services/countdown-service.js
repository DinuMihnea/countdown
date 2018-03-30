import axios from './axios'

const API_URL = '/countdown'

export const countdownService = {
  async getTarget () {
    const response = await axios.get(API_URL)
    if (!response.data.countdownTarget) {
      return null
    } else {
      return response.data.countdownTarget
    }
  }
}
