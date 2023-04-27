import { useEffect, useState } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { getSearchMovie } from 'Services/API';
import {
  StyledActorUl,
  StyledLi,
  StyledLink,
  StyledHeader,
} from './Movies.styled';
import imgNotFound from 'images/imgNotFound.jpg';
import { Loader } from 'components/Loader';

import NotFound from 'pages/NotFound';
import PropTypes from 'prop-types';

const Movies = () => {
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const [movies, setMovie] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('movieName');
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (movieName === null) return;
    setIsLoading(true);

    getSearchMovie(movieName)
      .then(data => {
        setMovie(data);
      })
      .catch(error => {
        setIsError(true);
        console.error(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [movieName]);

  const handleSubmit = e => {
    e.preventDefault();
    setSearchParams({ movieName: e.currentTarget.elements.movieName.value });
    e.currentTarget.reset();
  };

  return (
    <>
      {isLoading && <Loader />}
      <StyledHeader> Search Movies </StyledHeader>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="movieName"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
        />
        <button type="submit">Search</button>
      </form>
      {movies && (
        <div>
          <StyledActorUl className="actors">
            {movies.map(({ id, original_title, poster_path }) => {
              return (
                <StyledLi key={id}>
                  <StyledLink to={`${id}`} state={{ from: location }}>
                    {poster_path && (
                      <img
                        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                        alt={original_title}
                        width="200"
                      />
                    )}
                    {!poster_path && (
                      <img src={imgNotFound} alt={original_title} width="200" />
                    )}
                    <h3> {original_title}</h3>
                  </StyledLink>
                </StyledLi>
              );
            })}
          </StyledActorUl>
        </div>
      )}
      {isError && <NotFound />}
    </>
  );
};

export default Movies;

Movies.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      original_title: PropTypes.string.isRequired,
      poster_path: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired
  ),
};
