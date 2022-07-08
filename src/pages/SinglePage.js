import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ProductsContext } from '../context/products.context'

import ProductPageInner from '../components/product-page-inner'

const SinglePage = () => {

  const { category, slug } = useParams();

  const { currentProducts, getSpecificProduct } = useContext(ProductsContext);

  const [product, setProduct] = useState(null);

  useEffect(() => {

    const tryGetSpecificProduct = async () => {
      const response = await getSpecificProduct(category, slug)
      setProduct(response);
    }
    tryGetSpecificProduct();
  
  }, [currentProducts, category, slug])

  return (
    <div className='product-single-page'>
      {product && <ProductPageInner product={product}/>}
    </div>
  )
}

export default SinglePage