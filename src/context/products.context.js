
import { createContext, useEffect, useState } from "react";
import { 
  getCategoriesDocuments 
} from '../utils/firebase/firebase.utils'

export const ProductsContext = createContext({
  currentProducts: [],
  getSpecificProduct: () => {}
});

export const ProductsProvider = ({children}) => {
  const [currentProducts, setCurrentProducts] = useState({});

  useEffect(() => {
    const getCategDocs = async () => {
      const response = await getCategoriesDocuments();
      setCurrentProducts(response);
    }

    getCategDocs();
  }, [])

  const getSpecificProduct = async (category, slug) => {
    const response = await getCategoriesDocuments();
    return response[category].find(item => (item.slug === slug));
  }

  const value = {
    currentProducts, 
    setCurrentProducts, 
    getSpecificProduct}

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  )
}