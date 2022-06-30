import { Fragment } from 'react'
import { Outlet } from 'react-router-dom'

import {Routes, Route} from 'react-router-dom'

import ProductsList from '../components/products-list';
import CategoryPage from './CategoryPage';

const ShopPage = () => {
  
  return (
    <Routes>
      {/* if shop/ */}
      <Route index element={<ProductsList/>}/>
      <Route path=':category' element={<CategoryPage/>}/>
    </Routes>
  )
}

export default ShopPage