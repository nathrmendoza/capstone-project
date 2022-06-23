import React from 'react'
import { useContext } from 'react'
import { ProductsContext } from '../context/products.context'
import ProductCard from './product-card'

import '../styles/components/products/products-list.scss';

const ProductsList = () => {

  const {currentProducts} = useContext(ProductsContext);

  if(currentProducts) {
    return (
      <div className='products-list'>
        {currentProducts.map(e => <ProductCard key={e.id} product={e}/>)}
      </div>
    )
  }
}

export default ProductsList