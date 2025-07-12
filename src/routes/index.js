import Home from '../pages/Home'
import Following from '../pages/Following'
import Profiles from '../pages/Profiles'
import Upload from '../pages/Upload'
import Recipe from '../pages/Recipe/index.jsx'
import RecipeSuggestions from '../pages/RecipeSuggestion/index.jsx'
const publicRoutes = [
  { path: '/', component: Home },
  { path: '/home', component: Home },
  { path: '/following', component: Following },
  { path: '/profiles', component: Profiles },
  { path: '/upload', component: Upload, layout: null },
  { path: '/recipe', component: Recipe, layout: null },

  { path: '/suggest', component: RecipeSuggestions }

]
const privateRoutes = []

export { publicRoutes, privateRoutes }
