import { Routes, Route } from 'react-router-dom';
import Movies from '../pages/Movies/Movies';
import Home from '../pages/Home/Home';
import Cast from './Cast/Cast';
import Reviews from './Reviews';
import NotFound from '../pages/NotFound';
import MovieDetails from '../pages/MovieDetails';
import { Layout } from './Layout';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="notfound" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
