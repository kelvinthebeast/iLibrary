import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './pages/Home';
import Login from './components/auth/LoginForm';
import Register from './components/auth/RegisterForm';
import RecipeDetails from './pages/RecipeDetails';
import Profile from './pages/Profile';
import Navbar from './components/common/Navbar';
import RecipeForm from './components/recipe/RecipeForm';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-300">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/recipe/:id" element={<RecipeDetails />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/add-recipe" element={<RecipeForm />} />
            <Route path="/edit-recipe/:id" element={<RecipeForm />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}
export default App;