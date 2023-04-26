import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'Services/API';
import { Loader } from 'components/Loader';
import NotFound from 'pages/NotFound';
import PropTypes from 'prop-types';

const Reviews = () => {
  const [review, setReview] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    setIsLoading(true);

    getMovieReviews(movieId)
      .then(data => {
        setReview(data);
      })
      .catch(error => {
        setIsError(true);
        console.error(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [movieId]);

  return (
    <>
      {isLoading && <Loader />}
      <ul>
        {review.length > 0 &&
          review.map(({ id, author, content }) => {
            return (
              <li key={id}>
                <h3>{`Author: ${author}`}</h3>
                <p>{content}</p>
              </li>
            );
          })}
      </ul>
      {!review.length && <p>We don't have any reviews for this movie.</p>}
      {isError && <NotFound />}
    </>
  );
};
export default Reviews;

Reviews.propTypes = {
  review: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      author: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }).isRequired
  ),
};
