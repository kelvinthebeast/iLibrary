import React from 'react'
import { NavLink } from 'react-router-dom'
import '../../styles/sidebar.css'

const Sidebar = () => {
  const BASE_ADMIN_URL = '/admin/'
  return (
    <div className="sidebar">
      <h2>📚 iLibrary</h2>
      <ul>
        <li><NavLink to="/admin/" end className={({ isActive }) => isActive ? 'active' : ''}>Dashboard</NavLink></li>
        <li><NavLink to="/admin/books" className={({ isActive }) => isActive ? 'active' : ''}>Books</NavLink></li>
        <li><NavLink to="/admin/users" className={({ isActive }) => isActive ? 'active' : ''}>Users</NavLink></li>
        <li><NavLink to="/admin/reports" className={({ isActive }) => isActive ? 'active' : ''}>Reports</NavLink></li>
      </ul>
    </div>
  )
}

export default Sidebar
