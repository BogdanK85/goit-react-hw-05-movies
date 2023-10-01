import { getMovieCast } from 'Api/API';
import { useCallback, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import NoPhoto from '../../images/no-photo.png';
import { CastImage, CastItem, CastList, CastWrap } from './Casts.styled';

const Casts = () => {
  const [moviesCast, setMoviesCast] = useState([]);
  const { moviesID } = useParams();

  const fetchMoviesCast = useCallback(async () => {
    try {
      const data = await getMovieCast(moviesID);
      setMoviesCast(data);
    } catch (error) {
      console.log(error.message00);
    }
  }, [moviesID]);

  useEffect(() => {
    fetchMoviesCast();
  }, [fetchMoviesCast]);

  return (
    <CastWrap>
      <CastList>
        {moviesCast.length === 0 ? (
          <p>There are no cast</p>
        ) : (
          moviesCast.map(moviesCast => (
            <CastItem key={moviesCast.id}>
              <CastImage
                width={180}
                src={
                  moviesCast.profile_path
                    ? `https://image.tmdb.org/t/p/original/${moviesCast.profile_path}`
                    : NoPhoto
                }
                alt="Actor"
              />
            </CastItem>
          ))
        )}
      </CastList>
    </CastWrap>
  );
};

export default Casts;
