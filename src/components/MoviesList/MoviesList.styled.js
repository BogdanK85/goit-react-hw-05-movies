import { styled } from 'styled-components';

export const MoviesListStyle = styled.section`
  text-align: center;
`;
export const MoviesList = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 15px;
  padding: 0;
  list-style: none;
  margin: 0;
  min-width: 120px;
`;

export const TrendingTitle = styled.h1`
  font-weight: 800;
  font-size: 30px;
  margin-bottom: 20px;
`;

export const MoviePreview = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 200px;
  background-color: silver;
  overflow: hidden;
  border-radius: 10px;
`;

export const MovieImage = styled.img`
  width: 100%;
  height: auto;
`;
export const MovieTitle = styled.p`
  font-weight: 700;
  text-align: center;
  min-width: 45px;
  width: 100%;
`;
export const NoMovieTitle = styled.p`
  font-weight: 600;
  font-size: 25px;
  text-align: center;
  min-width: 45px;
  width: 100%;
  color: red;
`;
