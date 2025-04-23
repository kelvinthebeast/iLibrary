import React, { useEffect, useState } from 'react';
import { getBooks } from '../services/apiService';
import Sidebar from '../components/Sidebar';
const Dashboard = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // Hàm gọi API để lấy danh sách sách
    async function fetchBooks() {
      try {
        const data = await getBooks();
        setBooks(data);
      } catch (error) {
        console.error('Failed to fetch books:', error);
      }
    }
    fetchBooks();
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <ul>
        {books.map((book) => (
          <li key={book._id}>
            {book.title} by {book.author}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
