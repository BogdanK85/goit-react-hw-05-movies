import { MovieDetailsStyle } from './MovieDetailsPage.styled';
import NoPoster from '../../images/no-poster-available.png';

const { getMoviesDetailsById } = require('Api/API');
const { useState, useCallback, useEffect, Suspense } = require('react');
const { useLocation, useParams, Outlet, Link } = require('react-router-dom');

const MovieDetailsPage = () => {
  const location = useLocation();
  const { moviesId } = useParams();
  const [moviesInfo, setMoviesInfo] = useState({});
  const backLink = location?.state?.from ?? '/';

  const fetchMoviesDetails = useCallback(async () => {
    try {
      const data = await getMoviesDetailsById(moviesId);
      setMoviesInfo(data);
    } catch (error) {
      console.log(error.message);
    }
  }, [moviesId]);

  useEffect(() => {
    fetchMoviesDetails();
  }, [fetchMoviesDetails]);

  const date = new Date(moviesInfo.release_date);
  const year = date.getFullYear();
  const score = Math.round(moviesInfo.vote_average * 10);
  const overview = moviesInfo.overview;
  const gernes = moviesInfo.gernes;

  return (
    <>
      <MovieDetailsStyle>
        <Link className="back-link" to={backLink}>
          Return back
        </Link>
        <div className="main-content">
          <img
            className="main-img"
            width={180}
            src={
              moviesInfo.poster_path
                ? `https://image.tmdb.org/t/p/original/${moviesInfo.poster_path}`
                : NoPoster
            }
            alt={moviesInfo.title}
          />
          <div className="main-description">
            <div>
              <h2 className="card-title">
                {moviesInfo.title} ({year})
              </h2>
              <p className="card-score">User score {score} %</p>
              <h3 className="card-overview">Overview:</h3>
              <p className="text-overview">{overview}</p>
              <h3 className="gernes-title"> Gernes:</h3>
              {gernes &&
                gernes.map(gerne => <span key={gerne.id}>{gerne.name}</span>)}
            </div>
            <div>
              <h3 className="information-title">Additional Information</h3>
              <ul>
                <li>
                  <Link
                    className="info-link"
                    to="cast"
                    state={{ from: backLink }}
                  >
                    Casts
                  </Link>
                </li>
                <li>
                  <Link
                    className="info-link last-link"
                    to="review"
                    state={{ from: backLink }}
                  >
                    Reviews
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </MovieDetailsStyle>
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetailsPage;
