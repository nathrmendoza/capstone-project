import { Fragment } from 'react'
import { Outlet } from 'react-router-dom'

import ProductsList from '../components/products-list';

const ShopPage = () => {
  
  return (
    <Fragment>
      <ProductsList />
      <Outlet/>
    </Fragment>
  )
}

export default ShopPage