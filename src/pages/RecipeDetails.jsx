import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import NutritionInfo from '../components/recipe/NutritionInfo'
import CommentForm from '../components/recipe/CommentForm'
import CommentList from '../components/recipe/CommentList'
import ShareButtons from '../components/recipe/ShareButtons'

const RecipeDetails = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [recipe, setRecipe] = useState(null)

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/recipes/${id}`)
        setRecipe(response.data)
      } catch (error) {
        console.error('Error fetching recipe:', error)
      }
    }
    fetchRecipe()
  }, [id])

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this recipe?')) {
      try {
        await axios.delete(`http://localhost:3001/recipes/${id}`)
        navigate('/')
      } catch (error) {
        console.error('Error deleting recipe:', error)
      }
    }
  }

  if (!recipe) return <div>Loading...</div>

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold">{recipe.title}</h1>
      <p className="text-gray-600">{recipe.description}</p>
      <span className="inline-block bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded">
        {recipe.category}
      </span>
      <NutritionInfo nutritionalInfo={recipe.nutritionalInfo} />
      <h3 className="text-xl font-semibold mt-4">Ingredients</h3>
      <ul className="list-disc pl-5">
        {recipe.ingredients.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <h3 className="text-xl font-semibold restricting mt-4">Instructions</h3>
      <p>{recipe.instructions}</p>
      <div className="flex gap-4 mt-4">
        <button
          onClick={() => navigate(`/edit-recipe/${id}`)}
          className="p-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
        >
          Edit Recipe
        </button>
        <button
          onClick={handleDelete}
          className="p-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Delete Recipe
        </button>
      </div>
      <ShareButtons recipe={recipe} />
      <CommentForm recipeId={recipe.id} />
      <CommentList comments={recipe.comments} />
    </div>
  )
}
export default RecipeDetails