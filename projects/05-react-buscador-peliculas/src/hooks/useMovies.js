import { useState, useRef, useMemo, useCallback } from 'react'
import { searchMovies } from '../services/movies'

export function useMovies ({ search, sort }) {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const previousSearch = useRef(search)

  // ! useCallback
  // * memoriza funciones que queremos evitar que se
  // * vuelvan a ejecutar a no ser por las dependencias
  const getMovies = useCallback(
    async ({ search }) => {
      console.log('getMovies (useMemo)')
      if (previousSearch.current === search) return
      try {
        setLoading(true)
        setError(null)
        previousSearch.current = search
        const newMovies = await searchMovies({ search })
        setMovies(newMovies)
      } catch (e) {
        setError(e.message)
      } finally {
        setLoading(false)
      }
    }
  )
  // ! useMemo
  // * memoriza computaciones que queremos evitar que se vuelvan a ejecutar
  // * a no ser por las dependencias que le pasemos como segundo argumento

  const sortedMovies = useMemo(() => {
    console.log('memoSortedMovies')
    return sort
      ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
      : movies
  }, [sort, movies])

  return { movies: sortedMovies, loading, error, getMovies }
}
