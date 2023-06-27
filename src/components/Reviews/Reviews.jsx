import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/moviesApi';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    (async () => {
      const movieReviews = await getMovieReviews(movieId);

      setReviews(movieReviews.data.results);
    })();
  }, [movieId]);

  if (reviews.length === 0) {
    return <p>We don't have any reviews for this movie</p>;
  }

  return (
    <ul>
      {reviews.map(({ id, author, content }) => {
        return (
          <li key={id}>
            <h4>Author: {author}</h4>
            <p>{content}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default Reviews;
