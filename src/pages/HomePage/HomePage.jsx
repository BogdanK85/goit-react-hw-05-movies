import { getTrendingMovies } from 'Api/API';
import { MovieList } from 'components/MoviesList/MoviesList';
import { useEffect, useState } from 'react';

export const HomePage = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

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
      <MovieList movies={trendingMovies} />
    </div>
  );
};

// export default HomePage;
