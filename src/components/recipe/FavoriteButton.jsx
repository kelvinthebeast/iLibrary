import { useState } from 'react'
import { FaHeart } from 'react-icons/fa'

const FavoriteButton = ({ recipeId }) => {
  const [isFavorited, setIsFavorited] = useState(
    JSON.parse(localStorage.getItem('favorites') || '[]').includes(recipeId)
  )

  const toggleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]')
    const updated = isFavorited
      ? favorites.filter((id) => id !== recipeId)
      : [...favorites, recipeId]
    localStorage.setItem('favorites', JSON.stringify(updated))
    setIsFavorited(!isFavorited)
  }

  return (
    <button
      onClick={toggleFavorite}
      className="group p-2 rounded-full hover:bg-red-100 dark:hover:bg-red-900 transition duration-200"
      title={isFavorited ? 'Remove from favorites' : 'Add to favorites'}
    >
      <FaHeart
        className={`text-2xl transition-transform duration-200 ${
          isFavorited ? 'text-red-500 scale-110' : 'text-gray-400 group-hover:scale-105'
        }`}
      />
    </button>
  )
}

export default FavoriteButton
