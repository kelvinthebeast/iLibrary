import { useEffect, useState } from "react"
import './index.css'
const RecipeSuggestions = () => {
  // Mock recipe data
  const mockRecipes = [
    // eslint-disable-next-line quotes
    { id: 1, title: "Spaghetti", category: "Italian", rating: 4.8 },
    { id: 2, title: "Sushi", category: "Japanese", rating: 4.9 },
    { id: 3, title: "Pho", category: "Vietnamese", rating: 4.7 },
    { id: 4, title: "Tacos", category: "Mexican", rating: 4.6 },
    { id: 5, title: "Banh Mi", category: "Vietnamese", rating: 4.8 },
    { id: 6, title: "Ramen", category: "Japanese", rating: 4.5 },
    { id: 7, title: "Pizza", category: "Italian", rating: 4.9 }
  ]

  const [userFavCategory, setUserFavCategory] = useState("Vietnamese")
  const [suggested, setSuggested] = useState([])

  useEffect(() => {
    localStorage.setItem("favCategory", userFavCategory)

    const suggestions = mockRecipes
      .filter((r) => r.category === userFavCategory)
      .sort((a, b) => b.rating - a.rating)
      .slice(0, 5)

    setSuggested(suggestions)
  }, [userFavCategory])

  return (
    <div style={styles.container}>
      <h2>Suggested for You</h2>
      <div style={styles.carousel}>
        {suggested.map((recipe) => (
          <div key={recipe.id} style={styles.card}>
            <h4>{recipe.title}</h4>
            <p>Category: {recipe.category}</p>
            <p>⭐ {recipe.rating}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

const styles = {
  container: {
    maxWidth: "800px",
    margin: "auto",
    fontFamily: "Arial, sans-serif",
    padding: "20px",
  },
  carousel: {
    display: "flex",
    overflowX: "auto",
    gap: "16px",
    paddingBottom: "10px",
    scrollSnapType: "x mandatory",
  },
  card: {
    flex: "0 0 auto",
    minWidth: "200px",
    border: "1px solid #ddd",
    borderRadius: "12px",
    padding: "16px",
    backgroundColor: "#f9f9f9",
    scrollSnapAlign: "start",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
  },
}

export default RecipeSuggestions
