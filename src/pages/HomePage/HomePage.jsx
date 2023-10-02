import { getTrendingMovies } from 'Api/API';
import TrendingMoviesList from 'components/MoviesList/MoviesList';
import { useCallback, useEffect, useState } from 'react';

const HomePage = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  const fetchTrendingMovies = useCallback(async () => {
    try {
      const data = await getTrendingMovies();
      setTrendingMovies(data.results);
    } catch (error) {
      console.log(error.message);
    }
  }, []);
  useEffect(() => {
    fetchTrendingMovies();
  }, [fetchTrendingMovies]);

  return (
    <div>
      <TrendingMoviesList movies={trendingMovies} />
    </div>
  );
};

export default HomePage;
