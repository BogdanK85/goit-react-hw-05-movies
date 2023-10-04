import { Link, useLocation } from 'react-router-dom';
import {
  MovieImage,
  MoviePreview,
  MoviesListStyle,
  MovieTitle,
  MoviesList,
} from './MoviesList.styled';
import NoPoster from '../../images/no-poster-available.png';

export const MovieList = ({ movies, state }) => {
  const location = useLocation();
  return (
    <MoviesListStyle>
      {movies && movies.length > 0 ? (
        <MoviesList>
          {' '}
          {movies.map(movie => {
            const { id, title, poster_path } = movie;
            return (
              <li key={id}>
                <MoviePreview>
                  <Link
                    style={{ textDecoration: 'none', color: 'black' }}
                    to={`/movies/${id}`}
                    state={{ from: location }}
                  >
                    <MovieImage
                      width={200}
                      height={300}
                      loading="lazy"
                      src={
                        poster_path
                          ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                          : NoPoster
                      }
                      alt={title}
                      onError={error => {
                        error.target.src = NoPoster;
                      }}
                    />
                  </Link>
                  <MovieTitle>{title}</MovieTitle>
                </MoviePreview>
              </li>
            );
          })}
        </MoviesList>
      ) : (
        <MoviesList>
          <p>No movies found</p>
        </MoviesList>
      )}
    </MoviesListStyle>
  );
};
