import { AdditionalInfo } from 'components/AdditionalInfo/AdditionalInfo';
import { MovieInfo } from 'components/MovieInfo/MovieInfo';
import { ReturnBtn } from 'components/ReturnBtn/ReturnBtn';
import Section from 'components/Section/Section';
import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { getMovieInfo } from 'services/moviesApi';

const IMG_500W_PATH = 'https://image.tmdb.org/t/p/w500';
const defaultImg =
  'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

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

  const {
    poster_path,
    title,
    genres = [],
    overview,
    vote_average = 0,
  } = movieInfo;

  const moviePoster = poster_path ? IMG_500W_PATH + poster_path : defaultImg;
  const scorePercentage = (vote_average * 10).toFixed();

  if (movieInfo.length === 0) {
    return;
  }

  return (
    <Section>
      <ReturnBtn backLink={backLinkLocationRef.current} />
      <MovieInfo
        title={title}
        overview={overview}
        genres={genres}
        moviePoster={moviePoster}
        scorePercentage={scorePercentage}
      />
      <AdditionalInfo />
    </Section>
  );
};

export default MovieDetails;
