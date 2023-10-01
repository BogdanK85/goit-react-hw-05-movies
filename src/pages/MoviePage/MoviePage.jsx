import { getSearchedMovies } from 'Api/API';
import { Searchbar } from 'components/Searchbar/Searchbar';

const { default: MoviesList } = require('components/MoviesList/MoviesList');
const { useState, useCallback, useEffect } = require('react');
const { useSearchParams } = require('react-router-dom');

const MoviePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const query = searchParams.get('query');

  const handleSubmit = query => {
    setSearchParams({ query: query });
    setSearchResults([]);
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
      <MoviesList searchResults={searchResults} />
    </>
  );
};

export default MoviePage;
