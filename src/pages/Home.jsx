import { useState } from 'react';
import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getTrendingMovies } from 'services/moviesApi';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

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
    <div>
      <h2>Trending today</h2>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={{ from: location }}>
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
