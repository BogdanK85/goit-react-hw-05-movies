import { getSearchedMovies } from 'Api/API';
import TrendingMoviesList from 'components/MoviesList/MoviesList';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { useCallback, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const MoviePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const query = searchParams.get('query');

  const handleSubmit = query => {
    setSearchParams({ query: query });
    setSearchResults([]);
    fetchSearchedMovies(query);
  };

  const fetchSearchedMovies = useCallback(async query => {
    try {
      setLoading(true);
      const data = await getSearchedMovies(query);
      setSearchResults(data.results);
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (!searchResults.length) {
      setLoading(false);
    }
  }, [searchResults]);

  useEffect(() => {
    if (!query) {
      return;
    }
    fetchSearchedMovies(query);
  }, [query, fetchSearchedMovies]);

  return (
    <>
      <Searchbar onSubmit={handleSubmit} />
      {loading && <div>Loading data...</div>}
      <TrendingMoviesList movies={searchResults} />
    </>
  );
};

export default MoviePage;
