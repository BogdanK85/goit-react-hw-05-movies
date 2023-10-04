import { getSearchedMovies } from 'Api/API';
import { MovieList } from 'components/MoviesList/MoviesList';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

const MoviePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const query = searchParams.get('query');

  const handleSubmit = async query => {
    setSearchParams({ query: query });
    setSearchResults([]);
  };
  useEffect(() => {
    async function fetchSearchedMovies(query) {
      try {
        setLoading(true);
        const data = await getSearchedMovies(query);
        setSearchResults(data.results);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    }

    if (query) {
      fetchSearchedMovies(query);
    } else {
      setLoading(false);
    }
  }, [query]);

  return (
    <>
      <Searchbar onSubmit={handleSubmit} />
      {loading && <div>Loading data...</div>}
      <MovieList movies={searchResults} />
    </>
  );
};

export default MoviePage;
