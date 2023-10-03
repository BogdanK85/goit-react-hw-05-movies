import { getSearchedMovies } from 'Api/API';
import { MovieList } from 'components/MoviesList/MoviesList';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MoviePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const query = searchParams.get('query');

  // const handleSubmit = query => {
  //   setSearchParams({ query: query });
  //   setSearchResults([]);

  // };
  const handleSubmit = async query => {
    setSearchParams({ query: query });
    setSearchResults([]);
    try {
      const data = await getSearchedMovies(query);
      if (data.results.length === 0) {
        toast.error('No results found for the query', {
          position: 'top-right',
          autoClose: 3000,
        });
      } else {
        setSearchResults(data.results);
      }
    } catch (error) {
      console.log(error.message);
    }
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
