import { useState, useEffect } from 'react';
import axios from 'axios';

const RecipeSuggestions = () => {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const fetchSuggestions = async () => {
      try {
        const response = await axios.get('http://localhost:3001/recipes?_sort=rating&_order=desc&_limit=3');
        setSuggestions(response.data);
      } catch (error) {
        console.error('Error fetching suggestions:', error);
      }
    };
    fetchSuggestions();
  }, []);

  return (
    <div className="flex overflow-x-auto gap-4 p-4">
      <h3 className="text-xl font-semibold mb-2">Suggested for You</h3>
      {suggestions.map((recipe) => (
        <div key={recipe.id} className="bg-white p-4 rounded shadow min-w-[200px]">
          <h3 className="text-lg font-semibold">{recipe.title}</h3>
          <p>Rating: {recipe.rating}</p>
        </div>
      ))}
    </div>
  );
};
export default RecipeSuggestions;