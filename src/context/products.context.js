
import { createContext, useEffect, useState } from "react";
import { 
  getCategoriesDocuments 
} from '../utils/firebase/firebase.utils'

export const ProductsContext = createContext({
  currentProducts: []
});

export const ProductsProvider = ({children}) => {
  const [currentProducts, setCurrentProducts] = useState({});
  const value = {currentProducts, setCurrentProducts}

  useEffect(() => {
    const getCategDocs = async () => {
      const response = await getCategoriesDocuments();
      setCurrentProducts(response);
    }

    getCategDocs();
  }, [])

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  )
}