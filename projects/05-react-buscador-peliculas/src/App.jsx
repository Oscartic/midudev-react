import './App.css'
import { useMovies } from './hooks/useMovies'
import { Movies } from './components/Movies'

function App() {
  const { movies } = useMovies()
  return (
    <div className='page'>
      <header>
        <h1>Buscador de Peliculas</h1>
        <form className='form'>
          <input placeholder='Avangers, Star Wars, The Matrix...' type='text' />
          <button type='submit'>Buscar</button>
        </form>
      </header>
      <main>
        <Movies movies={movies} />
      </main>
    </div>
  )
}

export default App
