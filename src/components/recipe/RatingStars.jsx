import { useState } from 'react'
import { FaStar } from 'react-icons/fa'
import axios from 'axios'

const RatingStars = ({ recipeId, initialRating }) => {
  const [rating, setRating] = useState(initialRating || 0)
  const [hovered, setHovered] = useState(null)

  const handleRating = async (value) => {
    setRating(value)
    try {
      await axios.patch(`http://localhost:3001/recipes/${recipeId}`, { rating: value })
    } catch (error) {
      console.error('Error updating rating:', error)
    }
  }

  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <FaStar
          key={star}
          className={`cursor-pointer text-2xl transition-transform duration-150 ${
            (hovered || rating) >= star ? 'text-yellow-400' : 'text-gray-300 dark:text-gray-600'
          } hover:scale-110`}
          onClick={() => handleRating(star)}
          onMouseEnter={() => setHovered(star)}
          onMouseLeave={() => setHovered(null)}
        />
      ))}
    </div>
  )
}

export default RatingStars
