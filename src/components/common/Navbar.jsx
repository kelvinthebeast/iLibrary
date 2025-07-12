import { useAuth } from '../../context/AuthContext'
import { Link } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'
import './Navbar.css'

const Navbar = () => {
  const { user, logout } = useAuth()
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold">Recipe App</Link>
      <div className="flex items-center gap-4">
        <ThemeToggle />
        {user ? (
          <>
            <Link to="/profile" className="hover:underline font-medium transition">Profile</Link>
            <Link to="/add-recipe" className="hover:underline font-medium transition">Add Recipe</Link>
            <button onClick={logout} className="bg-red-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-600 transition">
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="hover:underline">Login</Link>
            <Link to="/register" className="hover:underline">Register</Link>
          </>
        )}
      </div>
    </nav>
  )
}
export default Navbar