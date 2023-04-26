import { useEffect, useState } from 'react';
import { getTrendingMovies } from 'services/api';

export const useGetTrendingMovies = () => {
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

  return { isError, isLoading, hasFilms, movies };
};
