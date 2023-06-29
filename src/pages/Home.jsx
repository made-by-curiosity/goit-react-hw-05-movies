import { useState, useEffect } from 'react';
import MoviesList from 'components/MoviesList/MoviesList';
import Section from 'components/Section/Section';
import { getTrendingMovies } from 'services/moviesApi';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const trendingMovies = await getTrendingMovies();
        setMovies(trendingMovies.data.results);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <Section title="Trending today">
      <MoviesList movies={movies} />
    </Section>
  );
};

export default Home;
