import React from 'react'
import './AdminDashboard.css'

export default function AdminDashboard() {
  return (
    <div className="admin-dashboard">
      <aside className="admin-sidebar">
        <h2>📘 BookStore Admin</h2>
        <ul>
          <li>📊 Overview</li>
          <li>📚 Books</li>
          <li>🧾 Orders</li>
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
        </section>
      </div>
    </div>
  )
}
// /mnt/c/Users/nhan/workspace$