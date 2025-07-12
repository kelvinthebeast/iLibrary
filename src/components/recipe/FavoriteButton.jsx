import { useState } from 'react';
import { FaHeart } from 'react-icons/fa';

const FavoriteButton = ({ recipeId }) => {
  const [isFavorited, setIsFavorited] = useState(
    JSON.parse(localStorage.getItem('favorites') || '[]').includes(recipeId)
  );

  const toggleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    const updated = isFavorited
      ? favorites.filter((id) => id !== recipeId)
      : [...favorites, recipeId];
    localStorage.setItem('favorites', JSON.stringify(updated));
    setIsFavorited(!isFavorited);
  };

  return (
    <button onClick={toggleFavorite}>
      <FaHeart className={`text-2xl ${isFavorited ? 'text-red-500' : 'text-gray-500'}`} />
    </button>
  );
};
export default FavoriteButton;