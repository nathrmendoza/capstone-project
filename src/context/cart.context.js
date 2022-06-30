import { createContext, useState, useEffect } from "react";

//helper function to find items in existing array
//cart items that have the same id, if yes increment quantity
//else add item seperate
const addingHelper = (cartItems, itemToAdd) => {
  const exisitingCartItem = cartItems.find(cartItem => cartItem.id === itemToAdd.id);

  if (exisitingCartItem)
    //returns mutated cartItems array with, mutation via quantity
    return cartItems.map(cartItem => 
      cartItem.id === itemToAdd.id 
        //if cart run through item matches ids with item to add, increment qunatity
        ? {...cartItem, quantity: cartItem.quantity + 1} 
        //else just return cart items
        : cartItem
      );

  /// .... spreads thru object or array items
  return [...cartItems, {...itemToAdd, quantity: 1}]
}

const addItemQuantityHelper = (cartItems, itemToAdd) => {
  return cartItems.map(cartItem => cartItem.id === itemToAdd.id 
    ? {...cartItem, quantity: cartItem.quantity + 1}
    : cartItem
  )
}
const subItemQuantityHelper = (cartItems, itemToSubtract) => {
  const exisitingItem = cartItems.find(cartItem => {
    return cartItem.id === itemToSubtract.id;
  });

  // if quantity is already 1 and need to subtract, just remove item
  if (exisitingItem.quantity === 1) {
    return cartItems.filter(cartItem => cartItem.id !== itemToSubtract.id);
  }

  // if not, return current item with subtracted quantity
  return cartItems.map(cartItem => cartItem.id === itemToSubtract.id 
    ? {...cartItem, quantity: cartItem.quantity - 1}
    : cartItem
  )
}

const removeItemHelper = (cartItems, itemToRemove) => {
  return cartItems.filter(cartItem => cartItem.id !== itemToRemove.id)
}

export const CartContext = createContext({
  isCartOpen: false,
  setCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  addItemQuantity: () => {},
  subItemQuantity: () => {},
  removeItem: () => {},
  cartPriceTotal: 0,
  cartQuantityOfItems: 0
});

export const CartProvider = ({children}) => {
  const [isCartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([])
  const [cartPriceTotal, setCartPriceTotal] = useState(0);
  const [cartQuantityOfItems, setCartQuantityOfItems] = useState(0);

  //best practice for useeffect is use one hook per function/responsibility
  //calculate total price
  useEffect(() => {
    setCartPriceTotal(cartItems.reduce((total, item) => total + item.price, 0))  
  }, [cartItems])

  //calculate total number of products
  useEffect(() => {
    setCartQuantityOfItems(cartItems.reduce((total, item) => total + item.quantity, 0))
  }, [cartItems])

  const addItemToCart = itemToAdd => {
    setCartItems(addingHelper(cartItems, itemToAdd));
  }

  const addItemQuantity = itemToAdd => {
    setCartItems(addItemQuantityHelper(cartItems, itemToAdd))
  }

  const subItemQuantity = itemToSubtract => {
    setCartItems(subItemQuantityHelper(cartItems, itemToSubtract))
  }

  const removeItem = itemToRemove => {
    setCartItems(removeItemHelper(cartItems, itemToRemove))
  }
  
  const value = {
    isCartOpen, 
    setCartOpen, 
    addItemToCart, 
    addItemQuantity, 
    subItemQuantity, 
    removeItem,
    cartItems,
    cartPriceTotal,
    cartQuantityOfItems
  } 
  
  return (
    <CartContext.Provider value={value}>{children}</CartContext.Provider>
  )
}