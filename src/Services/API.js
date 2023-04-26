import axios from 'axios';

const API_KEY = '045f57dbd430f06c0657f97d020f0d53';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
axios.defaults.params = {
  api_key: API_KEY,
};

export const getTrendingMovies = () => {
  return axios.get(`trending/movie/day`).then(({ data }) => data.results);
};

export const getMovieDetails = id => {
  return axios.get(`movie/${id}`).then(({ data }) => data);
};

export const getSearchMovie = query => {
  return axios
    .get(`search/movie?query=${query}`)
    .then(({ data }) => data.results);
};

export const getMovieActors = id => {
  return axios.get(`movie/${id}/credits`).then(({ data }) => data.cast);
};

export const getMovieReviews = id => {
  return axios.get(`movie/${id}/reviews`).then(({ data }) => data.results);
};
