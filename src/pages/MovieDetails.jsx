import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import { Link, Outlet, useParams, useLocation } from 'react-router-dom';
import { getMovieInfo } from 'services/moviesApi';

const IMG_500W_PATH = 'https://image.tmdb.org/t/p/w500';

const MovieDetails = () => {
  const [movieInfo, setMovieInfo] = useState([]);
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');

  useEffect(() => {
    (async function fetchMovieInfo() {
      try {
        const fullMovieInfo = await getMovieInfo(movieId);
        setMovieInfo(fullMovieInfo.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [movieId]);

  const { poster_path, title, genres = [], overview, vote_average } = movieInfo;
  const moviePoster = poster_path ? IMG_500W_PATH + poster_path : '';
  const scorePercentage = (vote_average * 10).toFixed();

  return (
    <div>
      <Link to={backLinkLocationRef.current}>&#129044; Go back</Link>

      <div>
        <h3>main info</h3>
        <div>
          <img src={moviePoster} alt={title} />
        </div>
        <div>
          <h2>{title}</h2>
          <p>User score: {scorePercentage}%</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h4>Genres</h4>
          <p>
            {genres.map(({ name }) => (
              <span key={name}>{name}</span>
            ))}
          </p>
        </div>
      </div>
      <div>
        <p>Additional information</p>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
        <Outlet />
      </div>
    </div>
  );
};

export default MovieDetails;
