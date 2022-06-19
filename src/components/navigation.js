import React, { Fragment } from 'react'
import { Link, Outlet } from 'react-router-dom'

const Navigation = () => {
  return (
    <Fragment>
      <nav>
        <ul>
          <li><Link to='/'>Homepage</Link></li>
          <li><Link to='/shop'>Shop</Link></li>
          <li><Link to='/shop/subpage'>Shop subpage</Link></li>
        </ul>
      </nav>
      <Outlet/>
    </Fragment>
  )
}

export default Navigation