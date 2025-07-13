import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './index.css'

const Header = () => {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark')
    } else {
      document.body.classList.remove('dark')
    }
  }, [darkMode])

  return (
    <div className="header">
      <div className="app-title">
        <span>Recipe App</span>
        <button
          className="toggle-btn"
          onClick={() => setDarkMode(!darkMode)}
          title="Toggle Dark Mode"
        >
          {darkMode ? '🌞' : '🌙'}
        </button>
      </div>
      <div className="auth-links">
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </div>
    </div>
  )
}

export default Header
