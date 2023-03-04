import { useFilters } from '../hooks/useFilters'
import { useCart } from '../hooks/useCart'
import './Footer.css'

export function Footer() {
  const { filters } = useFilters()
  const { cart } = useCart()

  console.log(JSON.stringify(filters))
  return (
    <footer className='footer'>
      <h5>Debugger</h5>
      <code>
        Filtros:
        {
          JSON.stringify(filters)
        }
        <hr />
        Carts:
        {
          JSON.stringify(cart)
        }
      </code>
      {/* <h4>Prueba técnica de React ⚛️ － <span>@oscartic</span></h4>
      <h5>Shopping Cart con useContext & useReducer</h5> */}
    </footer>
  )
}
