import { useState, useEffect } from 'react'
import './index.css'
const defaultRecipe = {
  title: '',
  description: '',
  ingredients: [''],
  instructions: '',
  cookingTime: '',
  servings: '',
  category: 'Breakfast',
}

const categories = ['Breakfast', 'Lunch', 'Dinner', 'Dessert']

function RecipeManager() {
  const [recipes, setRecipes] = useState(() => {
    const saved = localStorage.getItem('recipes')
    return saved ? JSON.parse(saved) : []
  })

  const [formData, setFormData] = useState(defaultRecipe)
  const [editingIndex, setEditingIndex] = useState(null)

  useEffect(() => {
    localStorage.setItem('recipes', JSON.stringify(recipes))
  }, [recipes])

  const handleChange = (e, index) => {
    if (e.target.name === 'ingredient') {
      const updatedIngredients = [...formData.ingredients]
      updatedIngredients[index] = e.target.value
      setFormData({ ...formData, ingredients: updatedIngredients })
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value })
    }
  }

  const addIngredient = () =>
    setFormData({ ...formData, ingredients: [...formData.ingredients, ''] })

  const removeIngredient = (index) => {
    const newIngredients = formData.ingredients.filter((_, i) => i !== index)
    setFormData({ ...formData, ingredients: newIngredients })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.title.trim()) return alert('Title is required')

    if (editingIndex !== null) {
      const updated = [...recipes]
      updated[editingIndex] = formData
      setRecipes(updated)
    } else {
      setRecipes([...recipes, formData])
    }

    setFormData(defaultRecipe)
    setEditingIndex(null)
  }

  const handleEdit = (index) => {
  // Tạo bản sao của object để tránh binding trực tiếp vào recipes[index]
    const recipeToEdit = { ...recipes[index], ingredients: [...recipes[index].ingredients] }
    setFormData(recipeToEdit)
    setEditingIndex(index)
}


  const handleDelete = (index) => {
    if (window.confirm('Delete this recipe?')) {
      const updated = recipes.filter((_, i) => i !== index)
      setRecipes(updated)
    }
  }

  return (
    <div className="container">
      <div style={{ padding: 20, maxWidth: 800, margin: '0 auto' }}>
        <h2>{editingIndex !== null ? 'Edit Recipe' : 'Add New Recipe'}</h2>
        <form onSubmit={handleSubmit}>
          <input
            name="title"
            placeholder="Title *"
            value={formData.title}
            onChange={handleChange}
            required
          />
          <br />
          <textarea
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
          />
          <br />
          <label>Ingredients:</label>
          {formData.ingredients.map((ing, idx) => (
            <div key={idx}>
              <input
                name="ingredient"
                value={ing}
                onChange={(e) => handleChange(e, idx)}
                placeholder={`Ingredient ${idx + 1}`}
              />
              {formData.ingredients.length > 1 && (
                <button type="button" onClick={() => removeIngredient(idx)}>X</button>
              )}
            </div>
          ))}
          <button type="button" onClick={addIngredient}>+ Ingredient</button>
          <br />
          <textarea
            name="instructions"
            placeholder="Instructions"
            value={formData.instructions}
            onChange={handleChange}
          />
          <br />
          <input
            name="cookingTime"
            type="number"
            placeholder="Cooking Time (min)"
            value={formData.cookingTime}
            onChange={handleChange}
          />
          <br />
          <input
            name="servings"
            type="number"
            placeholder="Servings"
            value={formData.servings}
            onChange={handleChange}
          />
          <br />
          <select name="category" value={formData.category} onChange={handleChange}>
            {categories.map((cat) => (
              <option key={cat}>{cat}</option>
            ))}
          </select>
          <br />
          <button type="submit">{editingIndex !== null ? 'Update' : 'Add'} Recipe</button>
        </form>
        <hr />
        <h3>Recipe List</h3>
        {recipes.length === 0 && <p>No recipes yet.</p>}
        <div style={{ display: 'grid', gap: 12 }}>
          {recipes.map((r, i) => (
            <div key={i} style={{ border: '1px solid #ccc', padding: 10 }}>
              <h4>{r.title}</h4>
              <p><strong>{r.category}</strong></p>
              <p>{r.description}</p>
              <ul>
                {r.ingredients.map((ing, idx) => (
                  <li key={idx}>{ing}</li>
                ))}
              </ul>
              <p><strong>Instructions:</strong> {r.instructions}</p>
              <p>Cooking Time: {r.cookingTime} min | Servings: {r.servings}</p>
              <button onClick={() => handleEdit(i)}>Edit</button>
              <button onClick={() => handleDelete(i)}>Delete</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default RecipeManager
