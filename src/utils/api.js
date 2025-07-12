import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:3002'
})

export const getRecipes = () => api.get('/recipes')
export const getRecipe = (id) => api.get(`/recipes/${id}`)
export const createRecipe = (data) => api.post('/recipes', data)
export const updateRecipe = (id, data) => api.put(`/recipes/${id}`, data)
export const deleteRecipe = (id) => api.delete(`/recipes/${id}`)
export const addComment = (recipeId, comment) => api.post(`/recipes/${recipeId}/comments`, comment)