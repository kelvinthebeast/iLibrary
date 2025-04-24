import axios from 'axios';

const request = axios.create({
  baseURL: 'http://localhost:5000/api',
  headers: {
    'Content-Type': 'application/json'
  }
})

export const get = async (url, params = {}) => {
  const response = await request.get(url, params)
  return response.data
}
export default request