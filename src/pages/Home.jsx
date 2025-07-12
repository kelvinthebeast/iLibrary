import RecipeList from '../components/recipe/RecipeList';
import FilterBar from '../components/recipe/FilterBar';
import RecipeSuggestions from '../components/recipe/RecipeSuggestions';

const Home = () => {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Recipe Sharing Website</h1>
      <FilterBar />
      <RecipeSuggestions />
      <RecipeList />
    </div>
  );
};
export default Home;