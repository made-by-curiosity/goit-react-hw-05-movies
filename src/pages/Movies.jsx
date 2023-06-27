import MoviesList from 'components/MoviesList/MoviesList';
import Section from 'components/Section/Section';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMovies } from 'services/moviesApi';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const queryName = searchParams.get('query');

  useEffect(() => {
    if (!queryName) {
      return;
    }

    (async () => {
      try {
        setIsLoading(true);
        const searchMoviesResult = await searchMovies(queryName);
        setMovies(searchMoviesResult.data.results);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [queryName]);

  const onSearch = e => {
    e.preventDefault();

    if (!e.target.elements.query.value.trim()) {
      return;
    }

    setSearchParams({ query: e.target.elements.query.value.trim() });

    e.target.reset();
  };

  return (
    <Section>
      <form onSubmit={onSearch}>
        <input type="text" name="query" />
        <button type="submit">Search</button>
      </form>
      {!isLoading && <MoviesList movies={movies} />}
      {isLoading && <div>Trying to find {queryName} movie</div>}
      {movies.length === 0 && queryName && !isLoading && (
        <p>Sorry, we don't have any movies with name {queryName}</p>
      )}
    </Section>
  );
};

export default Movies;
