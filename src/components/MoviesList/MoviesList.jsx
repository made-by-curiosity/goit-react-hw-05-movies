import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import { TbMovie } from 'react-icons/tb';
import { FilmsList } from './MoviesList.styled';

const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <FilmsList>
      {movies.map(movie => (
        <li key={movie.id}>
          <TbMovie />
          <Link to={`/movies/${movie.id}`} state={{ from: location }}>
            {movie.title}
          </Link>
        </li>
      ))}
    </FilmsList>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};

export default MoviesList;
