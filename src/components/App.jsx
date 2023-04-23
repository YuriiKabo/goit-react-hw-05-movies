import {
  getMovieDetails,
  getTrendingMovies,
  getSearchMovie,
  getMovieActors,
  getMovieReviews,
} from '../Services/API';

getSearchMovie('fight');
getTrendingMovies();
getMovieDetails(345);
getMovieActors(344);
getMovieReviews(346);

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      React homework template
    </div>
  );
};
