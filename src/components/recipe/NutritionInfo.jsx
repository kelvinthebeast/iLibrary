const NutritionInfo = ({ nutritionalInfo }) => {
  return (
    <div className="p-4 bg-gray-100 rounded mt-4">
      <p>Calories: {nutritionalInfo.calories} kcal</p>
      <p>Protein: {nutritionalInfo.protein}g</p>
      <p>Fat: {nutritionalInfo.fat}g</p>
      <p>Carbs: {nutritionalInfo.carbs}g</p>
    </div>
  )
}
export default NutritionInfo