import { Link } from 'react-router-dom'
import './sidebar.css'

export default function Sidebar() {
  return (
    <div className="sidebar">
      <h2 className="sidebar-title">iLibrary</h2>
      <nav className="sidebar-nav">
        <Link to="/home" className="sidebar-link">Home</Link>
        <Link to="/following" className="sidebar-link">Following</Link>
        <Link to="/profiles" className="sidebar-link">Profiles</Link>
      </nav>
    </div>
  )
}
