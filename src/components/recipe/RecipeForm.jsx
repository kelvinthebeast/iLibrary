import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const RecipeForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    ingredients: [],
    instructions: '',
    cookingTime: 0,
    servings: 1,
    category: 'Breakfast',
    nutritionalInfo: { calories: 0, protein: 0, fat: 0, carbs: 0 },
  });

  const [newIngredient, setNewIngredient] = useState('');

  useEffect(() => {
    if (id) {
      const fetchRecipe = async () => {
        try {
          const response = await axios.get(`http://localhost:3001/recipes/${id}`);
          setFormData(response.data);
        } catch (error) {
          console.error('Error fetching recipe:', error);
        }
      };
      fetchRecipe();
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.title.trim()) return alert('Title is required');
    try {
      if (id) {
        await axios.put(`http://localhost:3001/recipes/${id}`, formData);
      } else {
        await axios.post('http://localhost:3001/recipes', formData);
      }
      navigate('/');
    } catch (error) {
      console.error('Error saving recipe:', error);
    }
  };

  const addIngredient = () => {
    if (newIngredient.trim()) {
      setFormData({
        ...formData,
        ingredients: [...formData.ingredients, newIngredient.trim()],
      });
      setNewIngredient('');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-3xl mx-auto bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md space-y-6 transition-all"
    >
      <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
        {id ? 'Edit Recipe' : 'Create New Recipe'}
      </h2>

      <div className="space-y-4">
        <input
          type="text"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          placeholder="Recipe Title"
          className="input"
        />

        <textarea
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          placeholder="Short description"
          className="input h-24"
        />

        <div className="flex gap-2">
          <input
            type="text"
            value={newIngredient}
            onChange={(e) => setNewIngredient(e.target.value)}
            placeholder="Add ingredient"
            className="input flex-1"
          />
          <button
            type="button"
            onClick={addIngredient}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
          >
            Add
          </button>
        </div>

        {formData.ingredients.length > 0 && (
          <ul className="list-disc list-inside text-gray-800 dark:text-gray-300 space-y-1">
            {formData.ingredients.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        )}

        <textarea
          value={formData.instructions}
          onChange={(e) => setFormData({ ...formData, instructions: e.target.value })}
          placeholder="Cooking Instructions"
          className="input h-36"
        />

        <div className="grid grid-cols-2 gap-4">
          <input
            type="number"
            value={formData.cookingTime}
            onChange={(e) => setFormData({ ...formData, cookingTime: parseInt(e.target.value) })}
            placeholder="Cooking Time (min)"
            className="input"
          />

          <input
            type="number"
            value={formData.servings}
            onChange={(e) => setFormData({ ...formData, servings: parseInt(e.target.value) })}
            placeholder="Servings"
            className="input"
          />
        </div>

        <select
          value={formData.category}
          onChange={(e) => setFormData({ ...formData, category: e.target.value })}
          className="input"
        >
          <option value="Breakfast">Breakfast</option>
          <option value="Lunch">Lunch</option>
          <option value="Dinner">Dinner</option>
          <option value="Dessert">Dessert</option>
        </select>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {['calories', 'protein', 'fat', 'carbs'].map((key) => (
            <input
              key={key}
              type="number"
              value={formData.nutritionalInfo[key]}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  nutritionalInfo: {
                    ...formData.nutritionalInfo,
                    [key]: parseInt(e.target.value),
                  },
                })
              }
              placeholder={`${key[0].toUpperCase() + key.slice(1)} (${key === 'calories' ? 'kcal' : 'g'})`}
              className="input"
            />
          ))}
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-blue-600 text-white font-medium text-lg rounded hover:bg-blue-700 transition"
        >
          {id ? 'Update Recipe' : 'Save Recipe'}
        </button>
      </div>
    </form>
  );
};

export default RecipeForm;
