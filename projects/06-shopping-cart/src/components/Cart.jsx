import { useId } from 'react'
import { CartIcon, ClearCartIcon } from './Icnos.jsx'
import { useCart } from '../hooks/useCart'
import './Cart.css'

function CartItem({ product, addToCart }) {
  return (
    product
    && (<li>
      <img src={product.thumbnail} alt={product.title} />
      <div>
        <strong>{product.title}</strong> - {product.price}
      </div>
      <footer>
        <small>
          Qty: {product.quantity}
        </small>
        <button onClick={addToCart}>+1</button>
      </footer>
    </li>)
  )
}

export function Cart() {
  const cartCheckBoxId = useId()
  const { cart, clearCart, addToCart } = useCart()
  return (
    <>
      <label className='cart-button' htmlFor={cartCheckBoxId}>
        <CartIcon />
      </label>
      <input type='checkbox' id={cartCheckBoxId} className='cart-checkbox' hidden />
      <aside className='cart'>
        <ul>
          {cart.map(product => (
            <CartItem
              key={product.id}
              product={product}
              addToCart={() => addToCart(product)}
            />))}
        </ul>
        <button onClick={clearCart}>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  )
}
