import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from 'services/moviesApi';
import { ActorItem, ActorName, ActorsList } from './Cast.styled';

const IMG_500W_PATH = 'https://image.tmdb.org/t/p/w500';
const defaultImg =
  'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    (async () => {
      const movieCredits = await getMovieCredits(movieId);
      setCast(movieCredits.data.cast);
    })();
  }, [movieId]);

  if (cast.length === 0) {
    return <p>We couldn't find any actors of this movie</p>;
  }

  return (
    <ActorsList>
      {cast.map(({ cast_id, name, character, profile_path }) => {
        const actorPhoto = profile_path
          ? IMG_500W_PATH + profile_path
          : defaultImg;

        return (
          <ActorItem key={cast_id}>
            <img src={actorPhoto} alt="name" />
            <div>
              <ActorName>{name}</ActorName>
              <p>Character: {character}</p>
            </div>
          </ActorItem>
        );
      })}
    </ActorsList>
  );
};

export default Cast;
