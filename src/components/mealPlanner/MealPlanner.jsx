import { useState, useEffect } from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import axios from 'axios'
import CalendarView from './CalendarView'

const MealPlanner = () => {
  const [recipes, setRecipes] = useState([])
  const [mealPlan, setMealPlan] = useState(
    JSON.parse(localStorage.getItem('mealPlan')) || {
      Monday: [],
      Tuesday: [],
      Wednesday: [],
      Thursday: [],
      Friday: [],
      Saturday: [],
      Sunday: []
    }
  )
  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get('http://localhost:3001/recipes')
        setRecipes(response.data)
      } catch (error) {
        console.error('Error fetching recipes:', error)
      }
    }
    fetchRecipes()
  }, [])

  const onDragEnd = (result) => {
    if (!result.destination) return
    const { source, destination } = result
    const sourceDay = source.droppableId
    const destDay = destination.droppableId

    const updatedMealPlan = { ...mealPlan }
    const [movedRecipe] = updatedMealPlan[sourceDay].splice(source.index, 1)
    updatedMealPlan[destDay].splice(destination.index, 0, movedRecipe)

    setMealPlan(updatedMealPlan)
    localStorage.setItem('mealPlan', JSON.stringify(updatedMealPlan))
  }

  const addRecipeToDay = (day, recipeId) => {
    const updatedMealPlan = { ...mealPlan, [day]: [...mealPlan[day], recipeId] }
    setMealPlan(updatedMealPlan)
    localStorage.setItem('mealPlan', JSON.stringify(updatedMealPlan))
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Meal Planner</h2>
      <DragDropContext onDragEnd={onDragEnd}>
        <CalendarView mealPlan={mealPlan} recipes={recipes} addRecipeToDay={addRecipeToDay} />
      </DragDropContext>
    </div>
  )
}
export default MealPlanner