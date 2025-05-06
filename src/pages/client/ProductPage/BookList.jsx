import React, { useEffect, useState } from 'react';

// Data mẫu (mock data)
const mockData = [
  {
    _id: '1',
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    price: 10.99,
    description: 'A novel about the American dream.',
    stock: 100,
  },
  {
    _id: '2',
    title: '1984',
    author: 'George Orwell',
    price: 8.99,
    description: 'A dystopian novel about totalitarianism.',
    stock: 50,
  },
];

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://127.0.0.1:5000/api/books')
      .then(res => res.json())
      .then(data => {
        // Nếu API trả về mảng trống, sẽ dùng mockData
        if (data.length === 0) {
          console.log('API trả về mảng trống, sử dụng mock data');
          setBooks(mockData);
        } else {
          setBooks(data);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching books:', err);
        // Nếu fetch có lỗi, sẽ dùng mock data
        setBooks(mockData);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading books...</p>;

  return (
    <div>
      <h2>Book List</h2>
      {books.length === 0 ? (
        <p>No books found.</p>
      ) : (
        <ul>
          {books.map(book => (
            <li key={book._id}>
              <h3>{book.title}</h3>
              <p><strong>Author:</strong> {book.author}</p>
              <p><strong>Price:</strong> ${book.price}</p>
              <p>{book.description}</p>
              <p><strong>Stock:</strong> {book.stock}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BookList;
