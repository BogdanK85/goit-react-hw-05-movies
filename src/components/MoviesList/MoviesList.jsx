import { Link } from 'react-router-dom';
import {
  MovieImage,
  MoviePreview,
  MoviesListStyle,
  MovieTitle,
  TrendingMovieList,
} from './MoviesList.styled';
import NoPoster from '../../images/no-poster-available.png';

const TrendingMoviesList = ({ movies, state }) => {
  return (
    <MoviesListStyle>
      {/* {<TrendingTitle>Trending Movies</TrendingTitle>} */}
      <TrendingMovieList>
        {movies &&
          movies.map(movie => {
            const { id, title, poster_path } = movie;
            return (
              <li key={id}>
                <MoviePreview>
                  <Link
                    style={{ textDecoration: 'none', color: 'black' }}
                    to={`/movies/${id}`}
                    state={{ state }}
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
      </TrendingMovieList>
    </MoviesListStyle>
  );
};

export default TrendingMoviesList;
