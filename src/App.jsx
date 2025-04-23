import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DashboardLayout from './components/DashboardLayout'
import DashboardPage from './pages/DashboardPage'
import BooksPage from './pages/BooksPage'
import UsersPage from './pages/UsersPage'
import BorrowPage from './pages/BorrowPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="books" element={<BooksPage />} />
          <Route path="users" element={<UsersPage />} />
          <Route path="borrows" element={<BorrowPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
