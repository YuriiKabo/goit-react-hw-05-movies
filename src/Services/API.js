import axios from 'axios';

const API_KEY = '045f57dbd430f06c0657f97d020f0d53';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const getTrendingMovies = () => {
  axios
    .get('trending/movie/day?', {
      params: {
        api_key: API_KEY,
      },
    })
    .then(({ data }) => {
      console.log(data.results);
    });
};

export const getSearchMovie = movieName => {
  axios
    .get('search/movie?', {
      params: {
        api_key: API_KEY,
        query: movieName,
      },
    })
    .then(({ data }) => {
      console.log(data.results);
    });
};

export const getMovieDetails = id => {
  axios
    .get(`movie/${id}?`, {
      params: {
        api_key: API_KEY,
      },
    })
    .then(({ data }) => {
      console.log(data);
    });
};

export const getMovieActors = id => {
  axios
    .get(`movie/${id}/credits?`, {
      params: {
        api_key: API_KEY,
      },
    })
    .then(({ data }) => {
      console.log(data.cast);
    });
};

export const getMovieReviews = id => {
  axios
    .get(`movie/${id}/reviews`, {
      params: {
        api_key: API_KEY,
      },
    })
    .then(({ data }) => {
      console.log(data.results);
    });
};
