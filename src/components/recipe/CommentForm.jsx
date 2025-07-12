import { useState } from 'react';
import axios from 'axios';
import { useAuth } from '../../context/AuthContext';

const CommentForm = ({ recipeId }) => {
  const [comment, setComment] = useState('');
  const { user } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (comment.length > 500) return alert('Comment too long');
    try {
      await axios.post(`http://localhost:3001/recipes/${recipeId}/comments`, {
        username: user?.username || 'Guest',
        text: comment,
        timestamp: new Date().toISOString()
      });
      setComment('');
      window.location.reload(); // Refresh comment list
    } catch (error) {
      console.error('Error posting comment:', error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 shadow-md space-y-4"
    >
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Add a comment..."
        className="w-full min-h-[100px] px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <div className="flex justify-end">
        <button
          type="submit"
          className="px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200 font-medium"
        >
          Post Comment
        </button>
      </div>
    </form>
  );
};

export default CommentForm;
