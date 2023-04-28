import { Link, Outlet, useLocation } from 'react-router-dom';
import Alert from '@mui/material/Alert';
import { Loader } from 'components/Loader';
import { PageWrapper } from 'components/PageWrapper';
import { Title } from 'components/Title';
import { useGetMovieDetail } from 'hooks/useGetMovieDetail';
import Cast from 'components/Cast/Cast';
import Reviews from 'components/Reviews';
import PropTypes from 'prop-types';

const MovieDetails = () => {
  const location = useLocation();
  const { isError, isLoading, movie } = useGetMovieDetail();
  if (isError)
    return (
      <Alert severity="error">Something went wrong. Try again later.</Alert>
    );
  if (isLoading) return <Loader />;

  const { title, poster_path, vote_average, overview, genres } = movie;
  return (
    <>
      <Link to={location.state?.from ?? '/'}>Go back</Link>
      <PageWrapper>
        <Title content={title && title} />
        {poster_path && (
          <img
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            alt={title && title}
            width="200"
          />
        )}
        <p>{`User Score:  ${(vote_average * 10).toFixed(0)}%`}</p>
        <h3>Overview</h3>
        <div> {overview && overview}</div>
        <h3>Geners</h3>
        {genres && genres.map(({ name, id }) => <span key={id}>{name} </span>)}

        <ul>
          <li>
            <Link to="cast" element={<Cast />}>
              Cast
            </Link>
          </li>
          <li>
            <Link to="reviews" element={<Reviews />}>
              Reviews
            </Link>
          </li>
        </ul>
        <Outlet />
      </PageWrapper>
    </>
  );
};

export default MovieDetails;

MovieDetails.propTypes = {
  genres: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired
  ),
};
