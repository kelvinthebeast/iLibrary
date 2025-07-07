import React, { useState } from "react";
import "./NutritionInfo.css";

export const NutritionInfo = ({ recipe, servings, filters }) => {
  const [perServing, setPerServing] = useState(true);

  const nutrition = perServing
    ? recipe.nutrition
    : {
        calories: recipe.nutrition.calories * servings,
        protein: recipe.nutrition.protein * servings,
        fat: recipe.nutrition.fat * servings,
        carbs: recipe.nutrition.carbs * servings,
      };

  const isHighlighted =
    (filters.lowCalorie && nutrition.calories <= 400) ||
    (filters.highProtein && nutrition.protein >= 30);

  return (
    <div className={`nutrition-info ${isHighlighted ? "highlight" : ""}`}>
      <div className="nutrition-header">
        <h4>{recipe.name}</h4>
        <button onClick={() => setPerServing(!perServing)}>
          {perServing ? "Total" : "Per Serving"}
        </button>
      </div>
      <div className="nutrition-bars">
        <div className="nutrition-bar">
          <span>Calories: {nutrition.calories} kcal</span>
          <div className="bar" style={{ width: `${Math.min(nutrition.calories / 5, 100)}%` }} />
        </div>
        <div className="nutrition-bar">
          <span>Protein: {nutrition.protein} g</span>
          <div className="bar protein" style={{ width: `${Math.min(nutrition.protein * 2, 100)}%` }} />
        </div>
        <div className="nutrition-bar">
          <span>Fat: {nutrition.fat} g</span>
          <div className="bar fat" style={{ width: `${Math.min(nutrition.fat * 3, 100)}%` }} />
        </div>
        <div className="nutrition-bar">
          <span>Carbs: {nutrition.carbs} g</span>
          <div className="bar carbs" style={{ width: `${Math.min(nutrition.carbs, 100)}%` }} />
        </div>
      </div>
    </div>
  );
};
