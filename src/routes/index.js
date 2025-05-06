import Home from '../pages/Home'
import Following from '../pages/Following'
import Profiles from '../pages/Profiles'
import Upload from '../pages/Upload'
import AdminDashboard from '../pages/AdminDashboard'
import Login from '../pages/Login'
import Logout from '../pages/Logout'
import Order from '../pages/Order'
import BookList from '../pages/client/ProductPage/BookList'
const publicRoutes = [
  { path: '/', component: BookList },
  { path: '/home', component: Home },
  { path: '/following', component: Following },
  { path: '/profiles', component: Profiles },
  { path: '/upload', component: Upload, layout: null },
  { path: '/admin', component: AdminDashboard, layout: null },
  { path: '/login', component: Login, layout: null },
  { path: '/logout', component: Logout, layout: null },
  { path: '/orders', component: Order, layout: null }


]
const privateRoutes = []

export { publicRoutes, privateRoutes }
