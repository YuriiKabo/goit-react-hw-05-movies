import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieActors } from 'services/api';
import { Loader } from 'components/Loader';
import NotFound from 'pages/NotFound';
import { StyledActorUl, StyledLi } from './Cast.styled';
import imgNotFound from 'images/imgNotFound.jpg';
import PropTypes from 'prop-types';

const Cast = () => {
  const [cast, setCast] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    setIsLoading(true);

    getMovieActors(movieId)
      .then(data => {
        setCast(data);
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
      <StyledActorUl className="actors">
        {cast.length > 0 &&
          cast.map(({ name, cast_id, profile_path }) => {
            return (
              <StyledLi key={cast_id}>
                {profile_path && (
                  <img
                    src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                    alt={name}
                    width="100"
                  />
                )}
                {!profile_path && (
                  <img src={imgNotFound} alt={name} width="100" />
                )}
                <h3>{name}</h3>
              </StyledLi>
            );
          })}
      </StyledActorUl>
      {!cast.length && <p>We don't have any casts for this movie.</p>}
      {isError && <NotFound />}
    </>
  );
};
export default Cast;

Cast.propTypes = {
  cast: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      cast_id: PropTypes.number.isRequired,
      profile_path: PropTypes.string.isRequired,
    }).isRequired
  ),
};
