export const ListMovies = ({ movies }) => {
  return (
    <ul>
      {
        movies.map(movie => (
          <li key={movie.id}>
            <h3>{movie.title}</h3>
            <p>{movie.year}</p>
            <img src={movie.poster} alt={movie.title} />
          </li>
        ))
      }
    </ul>
  )
}

export const MovieNotFound = () => {
  return (
    <p> No se encontraron Peliculas para esta lista</p>
  )
}

export const Movies = ({ movies }) => {
  const hasMovies = movies?.length > 0

  return (
    hasMovies
      ? <ListMovies movies={movies} />
      : <MovieNotFound />
  )
}
