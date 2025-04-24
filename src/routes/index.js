import Home from '../pages/Home'
import Following from '../pages/Following'
import Profiles from '../pages/Profiles'
import Upload from '../pages/Upload'
const publicRoutes = [
  { path: '/', component: Home },
  { path: '/home', component: Home },
  { path: '/following', component: Following },
  { path: '/profiles', component: Profiles },
  { path: '/upload', component: Upload, layout: null }


]
const privateRoutes = []

export { publicRoutes, privateRoutes }
