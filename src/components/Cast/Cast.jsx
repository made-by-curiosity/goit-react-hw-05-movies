import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from 'services/moviesApi';

const IMG_500W_PATH = 'https://image.tmdb.org/t/p/w500';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    (async () => {
      const movieCredits = await getMovieCredits(movieId);
      setCast(movieCredits.data.cast);
    })();
  }, [movieId]);

  return (
    <ul>
      {cast.map(({ cast_id, name, character, profile_path }) => {
        const actorPhoto = profile_path ? IMG_500W_PATH + profile_path : '';

        return (
          <li key={cast_id}>
            <img src={actorPhoto} alt="name" />
            <p>{name}</p>
            <p>Character: {character}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default Cast;
