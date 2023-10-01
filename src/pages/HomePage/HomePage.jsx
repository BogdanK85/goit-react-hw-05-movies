import TrendingMoviesList from 'components/MoviesList/MoviesList';
import { TrendingMoviesText } from './HomePage.styled';

const { getTrendingMovies } = require('Api/API');
const { useState, useEffect } = require('react');

const HomePage = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        const data = await getTrendingMovies();
        setTrendingMovies(data.results);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchTrendingMovies();
  }, []);

  return (
    <div>
      <TrendingMoviesText>Trending movies</TrendingMoviesText>
      <TrendingMoviesList movies={trendingMovies} />
    </div>
  );
};

export default HomePage;
