import PropTypes from 'prop-types';
import {
  MovieGenres,
  MovieInfoWrapper,
  PosterContainer,
  TextWrapper,
} from './MovieInfo.styled';

export const MovieInfo = ({
  moviePoster,
  scorePercentage,
  title,
  overview,
  genres,
}) => {
  return (
    <MovieInfoWrapper>
      <PosterContainer>
        <img src={moviePoster} alt={title} />
      </PosterContainer>
      <TextWrapper>
        <h2>{title}</h2>
        <p>User score: {scorePercentage}%</p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h4>Genres</h4>
        {genres.length !== 0 ? (
          <MovieGenres>
            {genres.map(({ name }) => (
              <span key={name}>{name}</span>
            ))}
          </MovieGenres>
        ) : (
          <p>We couldn't find genre of this movie</p>
        )}
      </TextWrapper>
    </MovieInfoWrapper>
  );
};

MovieInfo.propTypes = {
  moviePoster: PropTypes.string.isRequired,
  scorePercentage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};
