import axios from './axiosInstance'

export const getUsers = async () => {
  const res = await axios.get('/users')
  return res.data
}
