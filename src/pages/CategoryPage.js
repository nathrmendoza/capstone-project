import React, { useContext, useState, useEffect, Fragment } from 'react'
import { useParams } from 'react-router-dom'
import ProductCard from '../components/product-card';

import { ProductsContext } from '../context/products.context'

import '../styles/components/products/products-list.scss';

const CategoryPage = () => {
  const { category } = useParams();
  const { currentProducts } = useContext( ProductsContext );

  const [products, setProducts] = useState(currentProducts[category]);

  useEffect(() => {
    setProducts(currentProducts[category]);
  }, [category, currentProducts])


  return (
    <div className='category-page'>
      {products && 
        <Fragment>
          <h1>{category.toUpperCase()}</h1>
          <div className='products-list'>
            {products.map(product => <ProductCard key={product.id} product={product}/>)}
          </div>
        </Fragment>
      }
    </div>
  )
}

export default CategoryPage