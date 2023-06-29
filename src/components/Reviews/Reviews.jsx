import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { BsChatTextFill } from 'react-icons/bs';
import { ReviewsList } from './Reviews.styled';
import { getMovieInfo } from 'services/moviesApi';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    (async () => {
      const movieReviews = await getMovieInfo(movieId, '/reviews');

      setReviews(movieReviews.data.results);
    })();
  }, [movieId]);

  if (reviews.length === 0) {
    return <p>We don't have any reviews for this movie</p>;
  }

  return (
    <ReviewsList>
      {reviews.map(({ id, author, content }) => {
        return (
          <li key={id}>
            <h4>
              Author: {author}
              <BsChatTextFill />
            </h4>
            <p>{content}</p>
          </li>
        );
      })}
    </ReviewsList>
  );
};

export default Reviews;
