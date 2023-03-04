import { AddToCartIcon, RemoveFromCartIcon } from './Icnos'
import { useCart } from '../hooks/useCart'
import './Products.css'

export function Products({ products }) {
  const { addToCart, removeFromCart, cart } = useCart()

  const checkIfProductIsInCart = (product) => {
    return cart.some(item => item.id === product.id)
  }
  return (
    <main className='products'>
      <ul>
        {
          products.slice(0, 10).map(product => {
            const isProductInCart = checkIfProductIsInCart(product)
            return (
              <li key={product.id} >
                <img
                  src={product.thumbnail}
                  alt={product.title}
                />
                <div>
                  <strong>{product.title}</strong>
                </div>
                <div>
                  <button style={{ backgroundColor: isProductInCart ? 'red' : '#09f' }} onClick={() => {
                    isProductInCart
                      ? removeFromCart(product)
                      : addToCart(product)
                  }}
                  >
                    {
                      isProductInCart
                        ? <RemoveFromCartIcon />
                        : <AddToCartIcon />
                    }
                  </button>
                </div>
              </li>)
          })
        }
      </ul>
    </main >
  )
}
