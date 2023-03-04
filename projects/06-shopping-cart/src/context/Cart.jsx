import { useReducer, createContext } from 'react';
import { cartInitialState, cartReducer } from '../reducers/CartReducer';

// ~ 1. Create context
export const CartContext = createContext()

// * this is a reducer hook
function useCartReducer() {
  const [state, dispatch] = useReducer(cartReducer, cartInitialState)

  const addToCart = (product) => dispatch({
    type: 'ADD_TO_CART',
    payload: product
  })

  const removeFromCart = (product) => dispatch({
    type: 'REMOVE_FROM_CART',
    payload: product
  })

  const clearCart = () => dispatch({
    type: 'CLEAR_CART'
  })

  return { state, addToCart, removeFromCart, clearCart }
}

// ~ 2. Create provider
// the react context dependency is minuscule when isolate from the rest in the custom hooks
export function CartProvider({ children }) {
  const { state, addToCart, removeFromCart, clearCart } = useCartReducer()
  return (
    <CartContext.Provider value={{
      cart: state,
      addToCart,
      removeFromCart,
      clearCart
    }}
    >
      {children}
    </CartContext.Provider>
  )
}
