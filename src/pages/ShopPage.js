import { Fragment } from 'react'
import { Outlet } from 'react-router-dom'

const ShopPage = () => {
  return (
    <Fragment>
      <div>ShopPage</div>
      <Outlet/>
    </Fragment>
  )
}

export default ShopPage