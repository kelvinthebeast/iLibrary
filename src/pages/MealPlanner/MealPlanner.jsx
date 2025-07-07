import React, { useState, useEffect } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import "./MealPlanner.css";

const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

const initialRecipes = {
  Monday: [],
  Tuesday: [],
  Wednesday: [],
  Thursday: [],
  Friday: [],
  Saturday: [],
  Sunday: []
};

export const MealPlanner = () => {
  const [mealPlan, setMealPlan] = useState(initialRecipes);

  useEffect(() => {
    const savedPlan = JSON.parse(localStorage.getItem("mealPlan"));
    if (savedPlan) setMealPlan(savedPlan);
  }, []);

  useEffect(() => {
    localStorage.setItem("mealPlan", JSON.stringify(mealPlan));
  }, [mealPlan]);

  const onDragEnd = (result) => {
    const { source, destination } = result;
    if (!destination) return;

    const sourceDay = source.droppableId;
    const destDay = destination.droppableId;

    const sourceRecipes = Array.from(mealPlan[sourceDay]);
    const [movedRecipe] = sourceRecipes.splice(source.index, 1);

    const destRecipes = Array.from(mealPlan[destDay]);
    destRecipes.splice(destination.index, 0, movedRecipe);

    setMealPlan({
      ...mealPlan,
      [sourceDay]: sourceRecipes,
      [destDay]: destRecipes
    });
  };

  const addRecipe = (day) => {
    const recipeName = prompt(`Add recipe for ${day}:`);
    if (!recipeName) return;
    const nutrition = {
      calories: Math.floor(Math.random() * 500 + 200),
      protein: Math.floor(Math.random() * 50),
      fat: Math.floor(Math.random() * 30),
      carbs: Math.floor(Math.random() * 80),
    };
    const newRecipe = { name: recipeName, nutrition };
    setMealPlan({
      ...mealPlan,
      [day]: [...mealPlan[day], newRecipe],
    });
  };

  const totalNutrition = Object.values(mealPlan).flat().reduce(
    (totals, recipe) => ({
      calories: totals.calories + recipe.nutrition.calories,
      protein: totals.protein + recipe.nutrition.protein,
      fat: totals.fat + recipe.nutrition.fat,
      carbs: totals.carbs + recipe.nutrition.carbs,
    }),
    { calories: 0, protein: 0, fat: 0, carbs: 0 }
  );

  return (
    <div className="meal-planner">
      <h2>Weekly Meal Planner</h2>
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="calendar-grid">
          {daysOfWeek.map((day) => (
            <Droppable droppableId={day} key={day}>
              {(provided) => (
                <div
                  className="calendar-day"
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  <div className="day-header">
                    <h3>{day}</h3>
                    <button onClick={() => addRecipe(day)}>➕</button>
                  </div>
                  <div className="recipes-list">
                    {mealPlan[day].map((recipe, index) => (
                      <Draggable
                        key={`${day}-${index}`}
                        draggableId={`${day}-${index}`}
                        index={index}
                      >
                        {(provided) => (
                          <div
                            className="recipe-item"
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            <strong>{recipe.name}</strong>
                            <small>{recipe.nutrition.calories} kcal</small>
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                </div>
              )}
            </Droppable>
          ))}
        </div>
      </DragDropContext>
      <div className="nutrition-summary">
        <h3>Nutrition Summary (Week)</h3>
        <p>Calories: {totalNutrition.calories} kcal</p>
        <p>Protein: {totalNutrition.protein} g</p>
        <p>Fat: {totalNutrition.fat} g</p>
        <p>Carbs: {totalNutrition.carbs} g</p>
      </div>
    </div>
  );
};
