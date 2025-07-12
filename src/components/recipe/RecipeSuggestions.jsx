import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const RecipeSuggestions = () => {
  const [suggestions, setSuggestions] = useState([])

  useEffect(() => {
    const fetchSuggestions = async () => {
      try {
        const response = await axios.get(
          'http://localhost:3001/recipes?_sort=rating&_order=desc&_limit=3'
        )
        setSuggestions(response.data)
      } catch (error) {
        console.error('Error fetching suggestions:', error)
      }
    }
    fetchSuggestions()
  }, [])

  return (
    <div className="p-4">
      <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Suggested for You</h3>
      <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 dark:scrollbar-thumb-gray-600 dark:scrollbar-track-gray-800">
        {suggestions.map((recipe) => (
          <Link
            to={`/recipe/${recipe.id}`}
            key={recipe.id}
            className="min-w-[220px] max-w-xs bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition duration-300 p-4 flex-shrink-0"
          >
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 truncate">
              {recipe.title}
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-300">Rating: ⭐ {recipe.rating}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default RecipeSuggestions
