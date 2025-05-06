import React from 'react'
import './AdminDashboard.css'
import { useState } from 'react'
import { useEffect } from 'react'
import * as request from '../../utils/request'
import { Link } from 'react-router-dom'
export default function AdminDashboard() {
  const [books, setBooks] = useState([])

  const [formData, setFormData] = useState({
    title: '',
    author: '',
    price: '',
    description: '',
    stock: ''
  })

  useEffect(() => {
    request.fetchBooks()
      .then((res) => setBooks(res.data))
      .catch((err) => console.error('Failed to fetch books:', err))
  }, [])

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  // Gửi form thêm sách
  const handleSubmit = (e) => {
    e.preventDefault()
    fetch('http://localhost:5000/api/books', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}` // token từ localStorage sau khi đăng nhập
      },
      body: JSON.stringify(formData)
    })
      .then(res => res.json())
      .then(data => {
        alert(data.message)
        window.location.reload()
      })
      .catch(err => console.error(err))
  }
  return (
    <div className="admin-dashboard">
      <aside className="admin-sidebar">
        <h2>📘 BookStore Admin</h2>
        <ul>
          <li>📊 Overview</li>
          <li><Link to="/books">📚 Books</Link></li>
          <li><Link to="/orders">🧾 Orders</Link></li>
          <li>💰 Revenue</li>
        </ul>
      </aside>

      <div className="admin-main">
        <header className="admin-header">
          <h1>Welcome, Store Owner</h1>
        </header>

        <section className="admin-content">
          <div className="cards">
            <div className="card">📚 Total Books: <strong>320</strong></div>
            <div className="card">🛒 Orders: <strong>75</strong></div>
            <div className="card">💸 Revenue: <strong>45,000,000$</strong></div>
          </div>

          <div className="book-table">
            <h2>📖 Book List</h2>
            <table>
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Author</th>
                  <th>Price</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Java Programming for Beginners</td>
                  <td>Nhan</td>
                  <td>120,000$</td>
                  <td>In Stock</td>
                </tr>
                <tr>
                  <td>React for Beginners</td>
                  <td>Dat</td>
                  <td>135,000$</td>
                  <td>Out of Stock</td>
                </tr>
                <tr>
                  <td>Advanced Node.js</td>
                  <td>Luan</td>
                  <td>150,000$</td>
                  <td>In Stock</td>
                </tr>
              </tbody>
            </table>
          </div>
          {/*api book */}
          <div className="book-table">
            <h2>📖 Book List</h2>
            <table>
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Author</th>
                  <th>Price</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {books.map((book) => (
                  <tr key={book._id}>
                    <td>{book.title}</td>
                    <td>{book.author}</td>
                    <td>{book.price}$</td>
                    <td>{book.stock > 0 ? 'In Stock' : 'Out of Stock'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* End api book */}

          <div className="add-book-form">
            <h2> Add New Book</h2>
            <form onSubmit={handleSubmit}>
              <input type="text" name="title" placeholder="Title" onChange={handleChange} required />
              <input type="text" name="author" placeholder="Author" onChange={handleChange} required />
              <input type="number" name="price" placeholder="Price" onChange={handleChange} required />
              <input type="text" name="description" placeholder="Description" onChange={handleChange} />
              <input type="text" name="stock" placeholder="Stock" onChange={handleChange} required />
              <button type="submit">Add Book</button>
            </form>
          </div>
        </section>
      </div>
    </div>
  )
}
// /mnt/c/Users/nhan/workspace$