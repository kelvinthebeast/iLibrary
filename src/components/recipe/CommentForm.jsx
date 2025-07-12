import { useState } from 'react'
import axios from 'axios'
import { useAuth } from '../../context/AuthContext'

const CommentForm = ({ recipeId }) => {
  const [comment, setComment] = useState('')
  const { user } = useAuth()

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (comment.length > 500) return alert('Comment too long')
    try {
      await axios.post(`http://localhost:3001/recipes/${recipeId}/comments`, {
        username: user?.username || 'Guest',
        text: comment,
        timestamp: new Date().toISOString()
      })
      setComment('')
      window.location.reload() // Reload to refresh comments
    } catch (error) {
      console.error('Error posting comment:', error)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Add a comment..."
        className="w-full p-2 border rounded"
      />
      <button type="submit" className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Post
      </button>
    </form>
  )
}
export default CommentForm