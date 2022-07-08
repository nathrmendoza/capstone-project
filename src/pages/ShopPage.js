import { Fragment } from 'react'
import { Outlet } from 'react-router-dom'

import {Routes, Route} from 'react-router-dom'

import ProductsList from '../components/products-list';
import CategoryPage from './CategoryPage';
import SinglePage from './SinglePage';

const ShopPage = () => {
  
  return (
    <Routes>
      {/* if shop/ */}
      <Route index element={<ProductsList/>}/>
      <Route path=':category' element={<CategoryPage/>}/>
      <Route path=':category/:slug' element={<SinglePage/>}/>
    </Routes>
  )
}

export default ShopPage