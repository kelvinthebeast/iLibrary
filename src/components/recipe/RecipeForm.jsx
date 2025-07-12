import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const RecipeForm = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    ingredients: [],
    instructions: '',
    cookingTime: 0,
    servings: 1,
    category: 'Breakfast',
    nutritionalInfo: { calories: 0, protein: 0, fat: 0, carbs: 0 }
  })
  const [newIngredient, setNewIngredient] = useState('')

  useEffect(() => {
    if (id) {
      const fetchRecipe = async () => {
        try {
          const response = await axios.get(`http://localhost:3001/recipes/${id}`)
          setFormData(response.data)
        } catch (error) {
          console.error('Error fetching recipe:', error)
        }
      }
      fetchRecipe()
    }
  }, [id])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!formData.title) return alert('Title is required')
    try {
      if (id) {
        await axios.put(`http://localhost:3001/recipes/${id}`, formData)
      } else {
        await axios.post('http://localhost:3001/recipes', formData)
      }
      navigate('/')
    } catch (error) {
      console.error('Error saving recipe:', error)
    }
  }

  const addIngredient = () => {
    if (newIngredient) {
      setFormData({ ...formData, ingredients: [...formData.ingredients, newIngredient] })
      setNewIngredient('')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-4">
      <h2 className="text-2xl mb-4">{id ? 'Edit Recipe' : 'Add Recipe'}</h2>
      <input
        type="text"
        value={formData.title}
        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        placeholder="Recipe Title"
        className="w-full p-2 mb-2 border rounded"
      />
      <textarea
        value={formData.description}
        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
        placeholder="Description (optional)"
        className="w-full p-2 mb-2 border rounded"
      />
      <div className="flex gap-2 mb-2">
        <input
          type="text"
          value={newIngredient}
          onChange={(e) => setNewIngredient(e.target.value)}
          placeholder="Add ingredient"
          className="w-full p-2 border rounded"
        />
        <button
          type="button"
          onClick={addIngredient}
          className="p-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Add
        </button>
      </div>
      <ul className="list-disc pl-5 mb-2">
        {formData.ingredients.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <textarea
        value={formData.instructions}
        onChange={(e) => setFormData({ ...formData, instructions: e.target.value })}
        placeholder="Instructions"
        className="w-full p-2 mb-2 border rounded"
      />
      <input
        type="number"
        value={formData.cookingTime}
        onChange={(e) => setFormData({ ...formData, cookingTime: parseInt(e.target.value) })}
        placeholder="Cooking Time (minutes)"
        className="w-full p-2 mb-2 border rounded"
      />
      <input
        type="number"
        value={formData.servings}
        onChange={(e) => setFormData({ ...formData, servings: parseInt(e.target.value) })}
        placeholder="Servings"
        className="w-full p-2 mb-2 border rounded"
      />
      <select
        value={formData.category}
        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
        className="w-full p-2 mb-2 border rounded"
      >
        <option value="Breakfast">Breakfast</option>
        <option value="Lunch">Lunch</option>
        <option value="Dinner">Dinner</option>
        <option value="Dessert">Dessert</option>
      </select>
      <input
        type="number"
        value={formData.nutritionalInfo.calories}
        onChange={(e) =>
          setFormData({
            ...formData,
            nutritionalInfo: { ...formData.nutritionalInfo, calories: parseInt(e.target.value) }
          })
        }
        placeholder="Calories (kcal)"
        className="w-full p-2 mb-2 border rounded"
      />
      <input
        type="number"
        value={formData.nutritionalInfo.protein}
        onChange={(e) =>
          setFormData({
            ...formData,
            nutritionalInfo: { ...formData.nutritionalInfo, protein: parseInt(e.target.value) }
          })
        }
        placeholder="Protein (g)"
        className="w-full p-2 mb-2 border rounded"
      />
      <input
        type="number"
        value={formData.nutritionalInfo.fat}
        onChange={(e) =>
          setFormData({
            ...formData,
            nutritionalInfo: { ...formData.nutritionalInfo, fat: parseInt(e.target.value) }
          })
        }
        placeholder="Fat (g)"
        className="w-full p-2 mb-2 border rounded"
      />
      <input
        type="number"
        value={formData.nutritionalInfo.carbs}
        onChange={(e) =>
          setFormData({
            ...formData,
            nutritionalInfo: { ...formData.nutritionalInfo, carbs: parseInt(e.target.value) }
          })
        }
        placeholder="Carbs (g)"
        className="w-full p-2 mb-2 border rounded"
      />
      <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Save Recipe
      </button>
    </form>
  )
}
export default RecipeForm