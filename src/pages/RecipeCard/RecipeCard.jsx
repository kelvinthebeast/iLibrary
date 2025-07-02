// RecipeCard/RatingStars.jsx
function RatingStars({ ratingList = [], onRate }) {
  const avg = ratingList.length
    ? (ratingList.reduce((a, b) => a + b, 0) / ratingList.length).toFixed(1)
    : 0

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
      {[1, 2, 3, 4, 5].map((num) => (
        <span
          key={num}
          onClick={() => onRate(num)}
          style={{
            cursor: 'pointer',
            color: num <= Math.round(avg) ? '#ffc107' : '#e4e5e9',
            fontSize: 20,
          }}
        >
          ★
        </span>
      ))}
      <span style={{ fontSize: 14 }}>({avg})</span>
    </div>
  )
}

export default RatingStars
