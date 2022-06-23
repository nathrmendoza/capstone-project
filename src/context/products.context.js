
import { createContext, useEffect, useState } from "react";
import SNEAKER_DATA from '../products.json';

export const ProductsContext = createContext([]);

export const ProductsProvider = ({children}) => {
  const [currentProducts, setCurrentProducts] = useState(null);
  const value = {currentProducts, setCurrentProducts}

  useEffect(() => {
    setCurrentProducts(SNEAKER_DATA);
    console.log(currentProducts)
  }, [])

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  )
}