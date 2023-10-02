import { getMovieCast } from 'Api/API';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import NoPhoto from '../../images/no-photo.png';
import { CastImage, CastItem, CastList, CastWrap } from './Casts.styled';

const Casts = () => {
  const [moviesCast, setMoviesCast] = useState([]);
  const { moviesId } = useParams();

  useEffect(() => {
    try {
      const fetchMoviesCast = async () => {
        const cast = await getMovieCast(moviesId);
        setMoviesCast(cast);
      };
      fetchMoviesCast();
    } catch (error) {
      console.log(error.message);
    }
  }, [moviesId]);

  return (
    <CastWrap>
      {moviesCast.length === 0 ? (
        <p>There are no cast</p>
      ) : (
        <CastList>
          {moviesCast.map(moviesCast => (
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
          ))}
        </CastList>
      )}
    </CastWrap>
  );
};

export default Casts;
