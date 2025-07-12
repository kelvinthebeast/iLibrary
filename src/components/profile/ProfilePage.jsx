import { useAuth } from '../../context/AuthContext';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';

const ProfilePage = () => {
  const { user } = useAuth();
  const [favorites, setFavorites] = useState([]);
  const [createdRecipes, setCreatedRecipes] = useState([]);

  useEffect(() => {
    const fetchFavorites = async () => {
      const favoriteIds = JSON.parse(localStorage.getItem('favorites') || '[]');
      try {
        const responses = await Promise.all(
          favoriteIds.map((id) => axios.get(`http://localhost:3001/recipes/${id}`))
        );
        setFavorites(responses.map((res) => res.data));
      } catch (error) {
        console.error('Error fetching favorites:', error);
      }
    };

    const fetchCreatedRecipes = async () => {
      try {
        const response = await axios.get('http://localhost:3001/recipes');
        setCreatedRecipes(response.data.filter((recipe) => recipe.userId === user?.email));
      } catch (error) {
        console.error('Error fetching created recipes:', error);
      }
    };

    fetchFavorites();
    fetchCreatedRecipes();
  }, [user]);

  return (
    <div className="max-w-2xl mx-auto px-6 py-10 bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-lg shadow">
      <h2 className="text-3xl font-bold text-center mb-6">Your Profile</h2>

      {user ? (
        <>
          <div className="flex flex-col items-center text-center mb-6">
            <img
              src={user.profilePicture || 'https://via.placeholder.com/100'}
              alt="Profile"
              className="w-24 h-24 rounded-full object-cover border-2 border-gray-300 dark:border-gray-700 mb-2"
            />
            <p className="text-xl font-semibold">{user.username || 'User'}</p>
            <p className="text-gray-600 dark:text-gray-400">{user.email}</p>
            <Link
              to="/profile/edit"
              className="mt-2 text-sm text-blue-500 hover:underline"
            >
              ✏️ Edit Profile
            </Link>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">❤️ Favorite Recipes</h3>
            {favorites.length === 0 ? (
              <p className="text-gray-500 dark:text-gray-400">No favorites yet.</p>
            ) : (
              <ul className="space-y-2 list-disc list-inside">
                {favorites.map((recipe) => (
                  <li key={recipe.id}>
                    <Link
                      to={`/recipe/${recipe.id}`}
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      {recipe.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">👨‍🍳 Created Recipes</h3>
            {createdRecipes.length === 0 ? (
              <p className="text-gray-500 dark:text-gray-400">You haven’t created any recipes yet.</p>
            ) : (
              <ul className="space-y-2 list-disc list-inside">
                {createdRecipes.map((recipe) => (
                  <li key={recipe.id}>
                    <Link
                      to={`/recipe/${recipe.id}`}
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      {recipe.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </>
      ) : (
        <p className="text-center text-gray-600 dark:text-gray-400">
          Please log in to view your profile.
        </p>
      )}
    </div>
  );
};

export default ProfilePage;
