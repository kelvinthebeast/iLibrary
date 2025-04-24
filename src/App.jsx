
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { publicRoutes } from './routes'
import { DefaultLayout } from './components/Layout'
import { Fragment } from 'react'
import * as request from './utils/request'
function App() {
  return (
    <>
      <Router>
        <div className="app">
          <Routes>
            {publicRoutes.map((route, index) => {
              let Layout = DefaultLayout
              if (route.layout) {
                Layout = route.layout
              } else if (route.layout === null) {
                Layout = Fragment
              }
              const Page = route.component
              return (
                // bấm alt + w
                <Route key = {index} path={route.path} element={<Layout><Page/></Layout>}></Route>
              )
            })}
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './pages/Home';
// import Profiles from './pages/Profiles';
// import Following from './pages/Following';

// function App() {
//   return (
//     <Router>
//       <div className="app">
//         <div>Route example</div>
//         <Routes>
//           <Route path='/' element={<div>Trang app</div>} />
//           <Route path='/home' element={<Home />} />
//           <Route path='/following' element={<Following />} />
//           <Route path='/profiles' element={<Profiles />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;
