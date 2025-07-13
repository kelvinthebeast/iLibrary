import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './LoginForm.css'

const LoginForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('') // Reset error
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError('📧 Email không hợp lệ')
      return
    }
    if (password.length < 8) {
      setError('🔒 Mật khẩu phải có ít nhất 8 ký tự')
      return
    }

    localStorage.setItem('user', JSON.stringify({ email }))
    navigate('/')
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200 p-4">
      <div className="bg-white shadow-xl rounded-2xl w-full max-w-md p-8">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">Welcome Back 👋</h2>

        {error && (
          <p className="bg-red-100 text-red-700 px-4 py-2 rounded mb-4 text-sm">{error}</p>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              📧 Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              🔒 Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white text-lg font-medium py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  )
}

export default LoginForm
