import { getTrendingMovies } from 'Services/API';
import { useEffect, useState } from 'react';
import { Loader } from '../../components/Loader';
import NotFound from '../NotFound';
import { StyledActorUl, StyledLi, StyledLink } from './Home.styled';
import imgNotFound from 'images/imgNotFound.jpg';
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
      <StyledActorUl className="actors">
        {hasFilms &&
          movies.map(({ poster_path, title, id }) => {
            return (
              hasFilms && (
                <StyledLi key={id}>
                  <StyledLink to={`${'/movies'}/${id}`}>
                    {poster_path && (
                      <img
                        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                        alt={title}
                        width="200"
                      />
                    )}
                    {!poster_path && (
                      <img src={imgNotFound} alt={title} width="200" />
                    )}
                    <h3>{title}</h3>
                  </StyledLink>
                </StyledLi>
              )
            );
          })}
      </StyledActorUl>
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
