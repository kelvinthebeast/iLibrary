import { useAuth } from '../context/AuthContext'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect } from 'react'

const Profile = () => {
  const { user } = useAuth()
  const [favorites, setFavorites] = useState([])

  useEffect(() => {
    const fetchFavorites = async () => {
      const favoriteIds = JSON.parse(localStorage.getItem('favorites') || '[]')
      try {
        const responses = await Promise.all(
          favoriteIds.map((id) => axios.get(`http://localhost:3001/recipes/${id}`))
        )
        setFavorites(responses.map((res) => res.data))
      } catch (error) {
        console.error('Error fetching favorites:', error)
      }
    }
    fetchFavorites()
  }, [])

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-2xl font-bold">Profile</h2>
      {user ? (
        <>
          <img
            src={user.profilePicture || 'https://via.placeholder.com/100'}
            alt="Profile"
            className="w-24 h-24 rounded-full mx-auto"
          />
          <p className="text-xl mt-2">{user.username || 'User'}</p>
          <p>{user.email}</p>
          <h3 className="text-lg font-semibold mt-4">Favorite Recipes</h3>
          <ul className="list-disc pl-5">
            {favorites.map((recipe) => (
              <li key={recipe.id}>
                <Link to={`/recipe/${recipe.id}`} className="text-blue-500 hover:underline">
                  {recipe.title}
                </Link>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <p>Please log in to view your profile.</p>
      )}
    </div>
  )
}
export default Profile