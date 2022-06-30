import React, { Fragment } from 'react'
import { useContext } from 'react'
import { ProductsContext } from '../context/products.context'
import ProductCard from './product-card'

import {Link} from 'react-router-dom'

import '../styles/components/products/products-list.scss';

const ProductsList = () => {

  const { currentProducts } = useContext(ProductsContext);

  if(currentProducts) {
    return (
      <Fragment>
        {
          Object.keys(currentProducts).map(title => (
            <Fragment key={title}>
              <h2 style={{textTransform: 'capitalize'}}><Link to={title}>{title}</Link></h2>
              <div className='products-list'>
              {
                //get only 4 as featured
                currentProducts[title].slice(0, 4).map(item => <ProductCard key={item.id} product={item}/>)
              }
              </div>
            </Fragment>
          ))
        }
        <div className='products-list'>
          {/* {currentProducts.map(e => <ProductCard key={e.id} product={e}/>)} */}
        </div>

      </Fragment>
    )
  }
}

export default ProductsList