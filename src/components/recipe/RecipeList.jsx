import { useState, useEffect } from 'react';
import axios from 'axios';
import RecipeItem from './RecipeItem';
import FilterBar from './FilterBar';

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);
  const [filters, setFilters] = useState({ category: '', search: '' });

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get('http://localhost:3001/recipes');
        setRecipes(response.data);
      } catch (error) {
        console.error('Error fetching recipes:', error);
      }
    };
    fetchRecipes();
  }, []);

  const handleFilter = (newFilters) => {
    setFilters(newFilters);
  };

  const filteredRecipes = recipes.filter((recipe) => {
    const matchesCategory = filters.category ? recipe.category === filters.category : true;
    const matchesSearch = filters.search
      ? recipe.title.toLowerCase().includes(filters.search.toLowerCase())
      : true;
    return matchesCategory && matchesSearch;
  });

  return (
    <div>
      <FilterBar onFilter={handleFilter} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredRecipes.map((recipe) => (
          <RecipeItem key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};
export default RecipeList;