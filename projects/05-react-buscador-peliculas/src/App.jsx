import './App.css'
// import { useRef } from 'react'
import { useMovies } from './hooks/useMovies'
import { useSearch } from './hooks/useSearch'
import { Movies } from './components/Movies'
import { useState, useCallback } from 'react'
import debounce from 'just-debounce-it'

function App() {
  const [sort, setSort] = useState()
  const { search, updateSearch } = useSearch()
  const { movies, error, loading, getMovies } = useMovies({ search, sort })
  // const inputRef = useRef() // * this value persist in the renders

  // ~ debounce
  const debouncedGetMovies = useCallback(debounce(search => {
    console.log('search => ', search)
    getMovies({ search })
  }, 500), [])

  const handleChange = (event) => {
    const newQuery = event.target.value
    if (newQuery.startsWith(' ')) return
    updateSearch(newQuery)
    debouncedGetMovies({ search: newQuery })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    getMovies({ search })
    // const value = inputRef.current.value
    // console.log(value)
    // ~ get input values from form
    // * const fields = new window.FormData(event.target)
    // * const query = fields.get('query')
    // * console.log(query)
    // ~ get many inputs values from form
    // * const fields = Object.fromEntries(new window.FormData(event.target))
    // * console.log(fields)
  }

  const handleSort = () => {
    setSort(!sort)
  }

  return (
    <div className='page'>
      <header>
        <h1>Buscador de Peliculas</h1>
        <form className='form' onSubmit={handleSubmit}>
          {/* <input name='query' ref={inputRef} placeholder='Avangers, Star Wars, The Matrix...' type='text' /> */}
          <input onChange={handleChange} value={search} placeholder='Avangers, Star Wars, The Matrix...' type='text' />
          <input type='checkbox' onChange={handleSort} />
          <button type='submit'>Buscar</button>
        </form>
        {error && <p className='error'>⚠️ {error}</p>}
      </header>
      <main>
        {
          loading ? <p>Cargando...</p> : <Movies movies={movies} />
        }
      </main>
    </div>
  )
}

export default App
