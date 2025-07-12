import { Droppable, Draggable } from 'react-beautiful-dnd'

const CalendarView = ({ mealPlan, recipes, addRecipeToDay }) => {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

  return (
    <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
      {days.map((day) => (
        <Droppable droppableId={day} key={day}>
          {(provided) => (
            <div
              className="p-4 bg-gray-100 rounded"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              <h3 className="text-lg font-semibold">{day}</h3>
              {mealPlan[day].map((recipeId, index) => {
                const recipe = recipes.find((r) => r.id === recipeId)
                return (
                  <Draggable key={recipeId} draggableId={recipeId.toString()} index={index}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className="p-2 bg-white mb-2 rounded shadow"
                      >
                        {recipe ? recipe.title : 'Unknown Recipe'}
                      </div>
                    )}
                  </Draggable>
                )
              })}
              {provided.placeholder}
              <select
                onChange={(e) => addRecipeToDay(day, parseInt(e.target.value))}
                className="w-full p-2 mt-2 border rounded"
              >
                <option value="">Add Recipe</option>
                {recipes.map((recipe) => (
                  <option key={recipe.id} value={recipe.id}>
                    {recipe.title}
                  </option>
                ))}
              </select>
            </div>
          )}
        </Droppable>
      ))}
    </div>
  )
}
export default CalendarView