import axios from 'axios';

// Địa chỉ backend API (Flask)
const API_URL = 'http://127.0.0.1:5000/api';  // Chỉnh theo backend của bạn

// Hàm lấy danh sách sách từ backend
export const getBooks = async () => {
  try {
    const response = await axios.get(`${API_URL}/books`);
    return response.data;
  } catch (error) {
    console.error('Error fetching books:', error);
    throw error;
  }
};
