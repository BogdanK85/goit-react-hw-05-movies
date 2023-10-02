import { styled } from 'styled-components';

export const CastWrap = styled.div`
  margin-top: 22px;
`;
export const CastList = styled.ul`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

export const CastItem = styled.li`
width: 200px;
  background-color: azure;
  border: 1px solid #111111
  border-radius: 5px;
  overflow: hidden;
  `;
export const CastImage = styled.img`
  width: 100%;
  height: auto;
`;
