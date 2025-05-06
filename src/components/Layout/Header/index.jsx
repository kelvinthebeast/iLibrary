import React from 'react'
import './style.css'
const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">Admin Panel</a>
          {/* Add other header elements like menu, search bar, etc. */}
        </div>
      </nav>
    </header>
  )
}

export default Header
