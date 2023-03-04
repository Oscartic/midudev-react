import { useFilters } from '../hooks/useFilters'
import './Footer.css'

export function Footer() {
  const { filters } = useFilters()

  console.log(JSON.stringify(filters))
  return (
    <footer className='footer'>
      <h5>Debugger</h5>
      <code>
        {
          JSON.stringify(filters)
        }
      </code>
      {/* <h4>Prueba técnica de React ⚛️ － <span>@oscartic</span></h4>
      <h5>Shopping Cart con useContext & useReducer</h5> */}
    </footer>
  )
}
