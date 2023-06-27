import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { searchMovies } from 'services/moviesApi';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    (async () => {
      try {
        const searchMoviesResult = await searchMovies(
          searchParams.get('query')
        );
        setMovies(searchMoviesResult.data.results);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [searchParams]);

  const onSearch = e => {
    e.preventDefault();

    if (!e.target.elements.query.value) {
      return;
    }

    setSearchParams({ query: e.target.elements.query.value });

    e.target.reset();
  };

  return (
    <div>
      <h2>Movies page</h2>
      <form onSubmit={onSearch}>
        <input type="text" name="query" />
        <button type="submit">Search</button>
      </form>
      {movies.length !== 0 && (
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <Link to={`${movie.id}`} state={{ from: location }}>
                {movie.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Movies;
