import { createContext, useState } from "react";

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
const subItemQuantityHelper = (cartItems, itemToAdd) => {
  //add functionality to remove the item if post qunatity would be less than 1

  // if not === 1 just subtract
  return cartItems.map(cartItem => cartItem.id === itemToAdd.id 
    ? {...cartItem, quantity: cartItem.quantity - 1}
    : cartItem
  )
}

export const CartContext = createContext({
  isCartOpen: false,
  setCartOpen: () => {},
  cartItems: [
    {
      id: 1,
      imageUrl: "/images/products/mr993gl_nb_02_i.webp",
      name: "MADE in USA 993 Core",
      price: 199.9,
    }
  ],
  addItemToCart: () => {},
  addItemQuantity: () => {},
  subItemQuantity: () => {}
});

export const CartProvider = ({children}) => {
  const [isCartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([])
  
  const addItemToCart = itemToAdd => {
    setCartItems(addingHelper(cartItems, itemToAdd));
  }

  const addItemQuantity = itemToAdd => {
    setCartItems(addItemQuantityHelper(cartItems, itemToAdd))
  }

  const subItemQuantity = itemToAdd => {
    setCartItems(subItemQuantityHelper(cartItems, itemToAdd))
  }
  
  const value = {isCartOpen, setCartOpen, addItemToCart, addItemQuantity, subItemQuantity, cartItems} 
  
  return (
    <CartContext.Provider value={value}>{children}</CartContext.Provider>
  )
}