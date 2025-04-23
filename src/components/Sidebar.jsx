import { Link } from 'react-router-dom'

export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-800 text-white p-4">
      <h2 className="text-xl font-bold mb-4">📚 iLibrary</h2>
      <ul className="space-y-2">
        <li><Link to="/dashboard">🏠 Dashboard</Link></li>
        <li><Link to="/books">📘 Books</Link></li>
        <li><Link to="/users">👥 Users</Link></li>
        <li><Link to="/borrows">📖 Borrowing</Link></li>
      </ul>
    </aside>
  )
}
