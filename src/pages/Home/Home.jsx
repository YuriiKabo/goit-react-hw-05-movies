import { getTrendingMovies } from 'services/api';
import { useEffect, useState } from 'react';
import { Loader } from '../../components/Loader';
import NotFound from '../NotFound';
import { StyledUl, StyledLi, StyledLink } from './Home.styled';
import PropTypes from 'prop-types';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [hasFilms, setHasFilms] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getTrendingMovies()
      .then(data => {
        if (data.length === 0) {
          setHasFilms(false);
        }
        setMovies(data);
      })
      .catch(error => {
        setIsError(true);
        console.error(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);
  return (
    <>
      {isLoading && <Loader />}
      <StyledUl>
        {hasFilms &&
          movies.map(({ title, id }) => {
            return (
              hasFilms && (
                <StyledLi key={id}>
                  <StyledLink to={`${'/movies'}/${id}`}>{title} </StyledLink>
                </StyledLi>
              )
            );
          })}
      </StyledUl>
      {isError && <NotFound />}
    </>
  );
};

export default Home;

Home.propTypes = {
  movie: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired
  ),
};
