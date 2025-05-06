import { Link } from 'react-router-dom' // Đảm bảo đã import Link từ react-router-dom

import './style.css'
const Slider = () => {
  return (
    <div className="slider">
      <nav className="nav flex-column">
        <Link className="nav-link active" to="/dashboard">Dashboard</Link>
        <Link className="nav-link" to="/books">Books</Link>
        <Link className="nav-link" to="/users">Users</Link>
        {/* Bạn có thể thêm các liên kết khác ở đây */}
      </nav>
    </div>
  )
}

export default Slider
