import { Route, Routes } from 'react-router-dom'
import './App.css'
import Categories from './pages/Categories'
import MainLayout from './layouts/MainLayout'
import Wishlist from './pages/Wishlist'
import Basket from './pages/Basket'
import CategoryDetails from './pages/CategoryDetails'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<Categories />} />
          <Route path='/:id' element={<CategoryDetails />} />
          <Route path='/wishlist' element={<Wishlist />} />
          <Route path='/basket' element={<Basket />} />
        </Route>

      </Routes>

    </>
  )
}

export default App
