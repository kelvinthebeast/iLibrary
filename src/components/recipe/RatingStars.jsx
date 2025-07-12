import { useState } from 'react'
import { FaStar } from 'react-icons/fa'
import axios from 'axios'

const RatingStars = ({ recipeId, initialRating }) => {
  const [rating, setRating] = useState(initialRating || 0)

  const handleRating = async (value) => {
    setRating(value)
    try {
      await axios.patch(`http://localhost:3001/recipes/${recipeId}`, { rating: value })
    } catch (error) {
      console.error('Error updating rating:', error)
    }
  }

  return (
    <div className="flex">
      {[1, 2, 3, 4, 5].map((star) => (
        <FaStar
          key={star}
          className={star <= rating ? 'text-yellow-400' : 'text-gray-300'}
          onClick={() => handleRating(star)}
        />
      ))}
    </div>
  )
}
export default RatingStars