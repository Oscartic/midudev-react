import { createContext, useState } from 'react';
// ~ 1. Create context
export const CartContext = createContext()
// ~ 2. Create provider
export function CartProvider({ children }) {
  const [cart, setCart] = useState([])

  const addToCart = (product) => {
    const productInCartIndex = cart.findIndex(item => item.id === product.id)
    if (productInCartIndex >= 0) {
      // * deep clone of the cart with structuredClone
      const newCart = structuredClone(cart)
      newCart[productInCartIndex].quantity += 1
      return setCart(newCart)
    }
    // ? product is not in the cart
    setCart(prevState => [...prevState, { ...product, quantity: 1 }])
  }

  const removeFromCart = (product) => {
    setCart(prevState => prevState.filter(item => item.id !== product.id))
  }

  const clearCart = () => {
    setCart([])
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  )
}
