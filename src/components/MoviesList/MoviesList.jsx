import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  MovieImage,
  MoviePreview,
  MoviesListStyle,
  MovieTitle,
  TrendingMovieList,
  TrendingTitle,
} from './MoviesList.styled';
import NoPoster from '../../images/no-poster-available.png';

const TrendingMoviesList = ({ trendFilms, searchResults }) => {
  const location = useLocation();
  const [arrayList, setArreyList] = useState([]);
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const films = trendFilms || searchResults;

    if (!films) {
      return;
    }

    const promises = films.map(item => {
      if (!item.poster_path) {
        return Promise.resolve();
      }

      return new Promise(({ resolve, reject }) => {
        const img = new Image();
        img.src = `https://image.tmdb.org/t/p/original/${item.poster_path}`;
        img.onload = resolve;
        img.onerror = reject;
      });
    });

    Promise.all(promises)
      .then(() => {})
      .catch(() => {
        console.log('Error loading images');
      });
    setArreyList(films);
  }, [trendFilms, searchResults]);

  const createMoviesDetailsURL = movieID => {
    return `/movies/${movieID}`;
  };

  return (
    <MoviesListStyle>
      {isHomePage && <TrendingTitle>Trending Movies</TrendingTitle>}
      <TrendingMovieList
        trendFilms={trendFilms}
        searchResults={searchResults}
        title="Trending Movies"
      >
        {arrayList.map(item => (
          <li key={item.id}>
            <MoviePreview>
              <Link
                style={{ textDecoration: 'none', color: 'black' }}
                to={createMoviesDetailsURL(item.id)}
                state={{ from: location }}
              >
                <MovieImage
                  width={200}
                  height={300}
                  loading="lazy"
                  src={
                    item.poster_path
                      ? `https://image.tmdb.org/t/p/original/${item.poster_path}`
                      : NoPoster
                  }
                  alt={item.title}
                  onError={error => {
                    error.target.src = NoPoster;
                  }}
                />
              </Link>
              <MovieTitle>{item.title}</MovieTitle>
            </MoviePreview>
          </li>
        ))}
      </TrendingMovieList>
    </MoviesListStyle>
  );
};

export default TrendingMoviesList;
