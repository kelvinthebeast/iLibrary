import React from 'react'
import RatingStars from './RatingStars'

const FavoriteButton = ({ isFavorite, onToggle }) => (
  <span
    onClick={onToggle}
    style={{
      fontSize: 24,
      color: isFavorite ? 'red' : '#ccc',
      cursor: 'pointer',
      transition: 'color 0.3s',
    }}
  >
    ♥
  </span>
)

export default function RecipeCard({
  recipe,
  onEdit,
  onDelete,
  onFavoriteToggle,
  onRate,
}) {
  return (
    <div className="recipe-card">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h4>{recipe.title}</h4>
        <FavoriteButton isFavorite={recipe.isFavorite} onToggle={onFavoriteToggle} />
      </div>

      <p><strong>{recipe.category}</strong></p>
      <p>{recipe.description}</p>

      <ul>
        {recipe.ingredients.map((ing, idx) => (
          <li key={idx}>{ing}</li>
        ))}
      </ul>

      <p><strong>Instructions:</strong> {recipe.instructions}</p>
      <p>
        Cooking Time: {recipe.cookingTime} min | Servings: {recipe.servings}
      </p>

      {/* Rating */}
      <RatingStars ratings={recipe.ratings} onRate={onRate} />

      <div className="recipe-actions">
        <button onClick={onEdit}>Edit</button>
        <button onClick={onDelete}>Delete</button>
      </div>
    </div>
  )
}
