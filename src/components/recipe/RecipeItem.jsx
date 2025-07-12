import { Link } from 'react-router-dom';
import FavoriteButton from './FavoriteButton';
import RatingStars from './RatingStars';

const RecipeItem = ({ recipe }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition">
      <h3 className="text-xl font-semibold">{recipe.title}</h3>
      <p className="text-gray-600">{recipe.description}</p>
      <span className="inline-block bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded">
        {recipe.category}
      </span>
      <div className="flex justify-between mt-2">
        <FavoriteButton recipeId={recipe.id} />
        <RatingStars recipeId={recipe.id} initialRating={recipe.rating} />
      </div>
      <Link to={`/recipe/${recipe.id}`} className="text-blue-500 hover:underline">
        View Details
      </Link>
    </div>
  );
};
export default RecipeItem;