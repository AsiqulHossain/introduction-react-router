
import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Product from './pages/Product'
import Contact from './pages/Contact'
import About from './pages/About'
import RootLayout from './layout/RootLayout'

const App = () => {

  const router = createBrowserRouter(
   createRoutesFromElements(
    <Route path='/' element={<RootLayout/>}>
       <Route index element={<Home/>}/>
       <Route path='product' element={<Product/>}/>
       <Route path='contact' element={<Contact/>}/>
       <Route path='about' element={<About/>}/>
    </Route>
   )
  )

  return (
  <RouterProvider router={router}/>
  )
}

export default App