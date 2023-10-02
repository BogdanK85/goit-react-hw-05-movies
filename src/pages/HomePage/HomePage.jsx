import { getTrendingMovies } from 'Api/API';
import TrendingMoviesList from 'components/MoviesList/MoviesList';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export const HomePage = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        const movies = await getTrendingMovies();
        setTrendingMovies(movies);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchTrendingMovies();
  }, []);

  // useEffect(() => {
  //   fetchTrendingMovies();
  // }, [fetchTrendingMovies]);

  return (
    <div>
      <TrendingMoviesList movies={trendingMovies} state={{ from: location }} />
    </div>
  );
};

// export default HomePage;
