import { navigate } from '../Link.jsx'

export default function HomePage() {
  return (
    <>
      <h1>Midu Router</h1>
      <p>Esta es una página de ejemplo para crear un React Router desde 0</p>
      <button onClick={() => navigate('/about')}>Sobre mí</button>
    </>
  )
}
