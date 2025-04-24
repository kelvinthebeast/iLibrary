import axios from 'axios';
const API_URL = 'http://localhost:5000/api/'
const request = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})


export const getBook = () => request.get('/books');
export const get = async (url, params = {}) => {
  const response = await request.get(url, params)
  return response.data
}
export default request